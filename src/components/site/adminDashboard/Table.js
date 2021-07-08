import React, { useState } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter,usePagination, } from "react-table";
 
export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setGlobalFilter,
    pageOptions,
    pageCount,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );
 
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
 
  };
 
  // Render the UI for your table
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search"}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-btn">
        <button className="btn-primary btn table-button" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <button className="btn-primary btn table-button" onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
        <div>
          Page{''}
          <em className="table-button">
            {pageIndex + 1} of {pageOptions.length}
          </em>
          <select className="table-button"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15, 25, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>
 
      </div>
    </>
  );
}