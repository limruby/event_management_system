import React, { useState, useEffect } from "react";
import axiosInstance from '../../../../utils/axiosConfig';
import "./../../../../assets/css/agency.min.css";
import { useLocation } from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";

function Sponsor_booth() {
  const [data, setData] = useState([]);
  const [forum, setForum] = useState([])
  const [comment, setComment] = useState("");
  const location = useLocation();
  const thePath = location.pathname;
  const user_id = thePath.substring(thePath.lastIndexOf('/') + 1);
  const string = '"' + user_id + '"'
  useEffect(() => {
    axiosInstance.get("/iiidentex_uitm/api/sponsors/read", { params: { account_id: string } })
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/iiidentex_uitm/api/forum/read", { params: { booth_id: string } })
      .then(function (response) {
        console.log(response.data.data)
        setForum(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, [string])

  const inputChange = e => {
    setComment(e.target.value)
  };

  const handleForm = (e) => {
    var defaultName;

    if (!localStorage.getItem("user_id")) {
      if (localStorage.getItem("temp_name")) {
        defaultName = localStorage.getItem("temp_name");
      }
      else {
        defaultName = "Visitor" + (Math.floor(Math.random() * 90000) + 10000);
        localStorage.setItem("temp_name", defaultName);
      }
    }

    var postData = {
      booth_id: string,
      account_id: localStorage.getItem("user_id"),
      email: localStorage.getItem("email") || "n/a",
      name: localStorage.getItem("name") || defaultName,
      role: localStorage.getItem("role") || "n/a",
      comment: comment,
      comment_date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
    if (comment !== null) {
      axiosInstance.post("/iiidentex_uitm/api/forum/create", postData)
        .then(function (response) {
          location.reload()
        }).catch(function (error) {
          console.log(error);
        })
    }
  }
  function displayTitle() {
    if (data.company_name !== undefined) {
      var section = [];
      section.push(
        <div style={{ marginTop: "10%" }}>{data.company_name}</div>
      );
    }
    return section;
  }
  function displayLogo() {
    var section = [];
    if (data.company_logo && data.company_logo[0]) {
      const imageFormat = data.company_logo[0].name.substring(data.company_logo[0].name.lastIndexOf('.') + 1);
      if (imageFormat === "pdf") {
        for (var i = 0; i < data.company_logo.length; i++) {
          const imageBuffer = Buffer.from(data.company_logo[0].source.data);
          section.push(
            <div>
              <embed src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
            </div>
          );
        }
      }
      else {
        for (var i = 0; i < data.company_logo.length; i++) {
          const imageBuffer = Buffer.from(data.company_logo[0].source.data);
          section.push(
            <div style={{ marginTop: "5%" }}>
              <img src={imageBuffer} alt={data.company_logo[0].name} width="60%" height="auto" />
            </div>
          );
        }
      }
    }
    return section;
  }

  function displayPoster() {
    var section = [];
    if (data.poster && data.poster[0]) {
      const imageFormat = data.poster[0].name.substring(data.poster[0].name.lastIndexOf('.') + 1);
      if (imageFormat === "pdf") {
        for (var i = 0; i < data.poster.length; i++) {
          const imageBuffer = Buffer.from(data.poster[0].source.data);
          section.push(
            <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
          );
        }
      }
      else {
        for (var i = 0; i < data.poster.length; i++) {
          const imageBuffer = Buffer.from(data.poster[0].source.data);
          section.push(
            <img src={imageBuffer} alt={data.poster[0].name} />
          );
        }
      }
    }
    return section;
  }
  function displayVideo() {
    var section = []
    if (data.video) {
      if (data.video.length !== 0) {
        const url = data.video[0].source.substring(data.video[0].source.lastIndexOf('/') + 9);

        section.push(
          <iframe className="video_iframe" height="400" src={`https://www.youtube.com/embed/${url}`} title={data.video[0].name}></iframe>
        );

      }
    }
    return section;
  }
  function displayComp_video() {
    var section = []
    if (data.video) {
      for (var i = 0; i < data.video.length; i++) {
        const url = data.video[i].source.substring(data.video[i].source.lastIndexOf('/') + 9);
        section.push(
          <div className="video-name">
            <a href={`https://www.youtube.com/embed/${url}`} >{data.video[i].name}</a>
          </div>
        );
      }
    }
    return section;
  }
  function displayForumForm() {
    var section = []
    section.push(
      <form onSubmit={handleForm} style={{padding: "2%"}}>
        <br></br>
        <textarea
          className="form-control"
          type='text'
          name='comment'
          id="comment"
          placeholder='Type your message...'
          required
          onChange={inputChange}
          value={comment} />
        <br></br>
        <div>
          <input className="btn btn-primary" type="submit" value="Post" />
        </div>
        <br></br>
      </form>
    );
    return section;
  }
  function displayForum() {
    var section = []
    for (var i = 0; i < forum.length; i++) {
      if (forum[i].role === "n/a") {
        section.push(
          <div>
            <div className="row">
              <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name}</b>
              <p className="col-xl-4">{forum[i].comment_date}</p>
            </div>
            <p className="forum-comment">{forum[i].comment}</p>
          </div>
        );
      }
      else if (forum[i].role === "Judge") {
        section.push(
          <div style={{ color: 'blue' }}>
            <div className="row">
              <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name} ({forum[i].role}) </b>
              <p className="col-xl-4">{forum[i].comment_date}</p>
            </div>
            <p className="forum-comment">{forum[i].comment}</p>
          </div>
        );
      }
      else if (forum[i].role === "Competitor") {
        section.push(
          <div style={{ color: '#7e7ebc' }}>
            <div className="row">
              <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name} ({forum[i].role}) </b>
              <p className="col-xl-4">{forum[i].comment_date}</p>
            </div>
            <p className="forum-comment">{forum[i].comment}</p>
          </div>
        );
      }
      else if (forum[i].role === "Admin") {
        section.push(
          <div style={{ color: 'black' }}>
            <div className="row">
              <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].role}</b>
              <p className="col-xl-4">{forum[i].comment_date}</p>
            </div>
            <p className="forum-comment">{forum[i].comment}</p>
          </div>
        );
      }
      else if (JSON.stringify(forum[i].booth_id) === JSON.stringify(forum[i].account_id)) {
        section.push(
          <div style={{ color: 'red' }}>
            <div className="row">
              <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name} (Booth Owner) </b>
              <p className="col-xl-4">{forum[i].comment_date}</p>
            </div>
            <p className="forum-comment">{forum[i].comment}</p>
          </div>
        );
      }
      else {
        section.push(
          <div style={{ color: '#f7b13e' }}>
            <div className="row">
              <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name} ({forum[i].role}) </b>
              <p className="col-xl-4">{forum[i].comment_date}</p>
            </div>
            <p className="forum-comment">{forum[i].comment}</p>
          </div>
        );
      }
    }
    return section;
  }
  return (
    <header className="masthead comp-background">
      <div className="container">
        <div className="intro-text">
          <div className="row justify-content-center">
            <div className="intro-heading">
              {displayTitle()}
              {displayLogo()}
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ padding: "0px 10px" }}>
        <div className="display-poster col-xl-6">
          {displayPoster()}
        </div>

        <div className="display-video col-xl-6">
          {displayVideo()}
        </div>
      </div>

      <div className="row" style={{ padding: "0px 10px" }}>
        <div className="display col-xl-6">
          <div className="display-profile">
            <div className="title">
              <b>COMPANY PROFILE</b>
            </div>
            <div className="profile">
              <p><b>Company Name: </b>{data.company_name}</p>
              <p><b>Company Address:</b> <br></br>{data.address_1 + " " + data.postcode + " " + data.city + ", " + data.state + ", " + data.country}</p>
              <p><b>Person In Charge: </b>{data.company_pic_name}</p>
              <p><b>Website: </b>{data.company_website}</p>
            </div>
          </div>

          <div className="display-promotional-content">
            <div className="title">
              <b>PROMOTIONAL CONTENT</b>
            </div>
            <div className="promotional-content">
              {displayComp_video()}
            </div>
          </div>
          <div className="display-awards">
            <div className="title">
              <b>CONTACT US</b>
            </div>
            <div className="contact-us">
              <p><b>Tel: </b>{data.company_contact}</p>
            </div>
          </div>
        </div>

        <div className="display col-xl-6">
          <div className="forum-title">
            <b>FORUM CHAT</b>
          </div>
          <div className="display-forum col-xl-12">
            {displayForum()}
          </div>
          <div className="display-forum-form">
            {displayForumForm()}
          </div>
        </div>
      </div>
    </header>

  );
}

export default Sponsor_booth;