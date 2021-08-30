import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./../../../../assets/css/agency.min.css";
import axiosInstance from '../../../../utils/axiosConfig';

function Sponsor_hall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/iiidentex_uitm/api/sponsors/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, [data]);


  function displayGoldSponsor() {
    var section = [];
    data.map((sponsor, index) => {
      if (sponsor.category === "Gold Package" && sponsor.company_logo && sponsor.company_logo[0]) {
        const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
        if (imageFormat === "pdf") {
          for (var i = 0; i < sponsor.company_logo.length; i++) {
            const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
            section.push(
              <div className="col-md-12">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                  <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                </Link>
              </div>
            );
          }
        }
        else {
          for (var i = 0; i < sponsor.company_logo.length; i++) {
            const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
            section.push(
              <div className="col-md-12">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                  <img width="60%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
                </Link>
              </div>
            );
          }
        }
      }
    }
    );
    return section;
  }
  function displaySilverSponsor() {
    var section = [];
    data.map((sponsor, index) => {
      if (sponsor.category === "Silver Package" && sponsor.company_logo && sponsor.company_logo[0]) {
        const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
        if (imageFormat === "pdf") {
          for (var i = 0; i < sponsor.company_logo.length; i++) {
            const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
            section.push(
              <div className="col-md-4">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                  <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                </Link>
              </div>
            );
          }
        }
        else {
          for (var i = 0; i < sponsor.company_logo.length; i++) {
            const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
            section.push(
              <div className="col-md-4">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                  <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
                </Link>
              </div>
            );
          }
        }
      }
    }
    );
    return section;
  }
  function displayBronzeSponsor() {
    var section = [];
    data.map((sponsor, index) => {
      if (sponsor.category === "Bronze Package" && sponsor.company_logo && sponsor.company_logo[0]) {
        const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
        if (imageFormat === "pdf") {
          for (var i = 0; i < sponsor.company_logo.length; i++) {
            const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
            section.push(
              <div className="col-md-2">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                  <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                </Link>
              </div>
            );
          }
        }
        else {
          for (var i = 0; i < sponsor.company_logo.length; i++) {
            const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
            section.push(
              <div className="col-md-2">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                  <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
                </Link>
              </div>
            );
          }
        }
      }
    }
    );
    return section;
  }

  return (
    <header className="masthead comp-background">
      <div className="intro-text">
        <div className="intro-lead-in">
          <br></br>
        </div>
        <div className="row">
          <div className="intro-heading col-xl-12">
            Sponsor Hall
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#fff" }}>
        <div className="sponsor">
          <h1>Featured Sponsor</h1>
          <div>{displayGoldSponsor()}</div>
        </div>


        <div className="sponsor">
          <h1>Silver Sponsor</h1>
          <div className="sponsor-category">{displaySilverSponsor()}</div>
        </div>

        <div className="sponsor" style={{ marginBottom: "5%" }}>
          <h1>Bronze Sponsor</h1>
          <div className="sponsor-category">{displayBronzeSponsor()}</div>
        </div>

      </div>
    </header>
  );
}

export default Sponsor_hall;