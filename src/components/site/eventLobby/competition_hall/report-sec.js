import React from 'react';
import parse from 'html-react-parser';
import '../../userDashboard/preview-sec.css';
import '../../../../assets/css/agency.min.css'
import { useLocation, Link } from 'react-router-dom'

import PdfDownloader from '../../../PdfDownloader';

function FullReport() {
    let fromReport = useLocation();
    let data = fromReport.state.data;

    function displayTitle() {
        if (data.abstract !== undefined) {
            var section = [];
            for (var i = 0; i < data.abstract.length; i++) {
                section.push(
                    <div id="abstract_title">
                        <h1>
                            <b>{data.abstract[0].title}</b>
                        </h1>
                    </div>
                );
            }
            return section;
        }
    }


    function displayAuthor() {
        var section = [];
        var string = data.name;
        if (data.members !== undefined) {
            data.members.map(function (member) {
                string += ', ' + member.name + ' ';
            });
        }
        section.push(
            <div id="author">
                <p>
                    {string}
                </p>
            </div>
        );
        return section;
    }


    function displayAffiliation() {
        var section = [];
        var string = data.affiliation;
        if (data.members !== undefined) {
            data.members.map(function (member) {
                string += ', ' + member.affiliation + ' ';
            });
        }
        section.push(
            <div id="aff">
                <p>
                    <span>Affiliation</span><br></br>{string}
                </p>
            </div>
        );
        return section;
    }


    function displayAbstractContent() {
        if (data.abstract !== undefined) {
            var section = [];

            for (var i = 0; i < data.abstract.length; i++) {
                section.push(
                    <div id="body_content">
                        <p id="subtitle">Abstract</p><br></br>
                        <p>
                            {data.abstract[0].content}
                        </p>
                    </div>
                );
            }
            return section;
        }
    }


    function displayKeywords() {
        var section = [];
        var string = '';
        if (data.abstract === undefined) { }
        else if (data.abstract[0] === undefined) { }
        else if (data.abstract[0]['keywords'] === undefined) { }
        else {
            data.abstract[0]['keywords'].map(function (word) {
                string += word + ' ';
            });
        }
        section.push(
            <div id="keywords">
                <p>
                    <strong>Key words:</strong> {string}
                </p>
            </div>
        );
        return section;
    }


    function displayIntroduction() {
        var section = [];
        if (data.bookChapter != null) {
            for (var i = 0; i < data.bookChapter.length; i++) {
                section.push(
                    <div id="body_content">
                        <p>
                            <b>Introduction</b><br></br>{data.bookChapter[0].introduction}
                        </p>
                    </div>
                );
            }
        }
        return section;
    }


    function displayContent() {
        var section = [];
        if (data.bookChapter != null) {
            for (var i = 0; i < data.bookChapter.length; i++) {
                section.push(
                    <div id="body_content">
                        <p>
                            <b>Content</b><br></br>{parse(data.bookChapter[0].content)}
                        </p>
                    </div>
                );
            }
        }
        return section;
    }


    function displayConclusion() {
        var section = [];
        if (data.bookChapter != null) {
            for (var i = 0; i < data.bookChapter.length; i++) {
                section.push(
                    <div id="body_content">
                        <p>
                            <b>Conclusion</b><br></br> {data.bookChapter[0].conclusion}
                        </p>
                    </div>
                );
            }
        }
        return section;
    }


    function displayReference() {
        var section = [];
        if (data.bookChapter != null) {

            if (data.bookChapter[0] != null) {
                if (data.bookChapter[0]['references'] !== undefined) {
                    section.push(
                        <div id="body_content">
                            <p id="subtitle">References</p><br></br>
                            <ul>
                                {data.bookChapter[0]['references'].map((reference) => (
                                    <li>
                                        {reference}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }
            }
        }
        return section;
    }


    return (
        <div className ="edit-form-container" style={{marginTop:"2%", marginBottom:"2%"}}>
            <div className="page" id="downloadPdf">
                <div className="preview-section">
                    {displayTitle()}
                    {displayAuthor()}
                    {displayAffiliation()}
                    {displayAbstractContent()}
                    {displayKeywords()}
                    {displayIntroduction()}
                    {displayContent()}
                    {displayConclusion()}
                    {displayReference()}
                </div>
            </div>
            <PdfDownloader rootElementId="downloadPdf" downloadFileName={data.abstract[0].title} />
        </div>
    );
}

export default FullReport;