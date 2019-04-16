import React, { Component } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
class EditProfile extends Component {
  render() {
    return (
      <div className="edit-profile-container">
        <h2 className="edit-profile-title">Edit Profile</h2>
        <section>
          <form className="edit-profile-form">
            <div className="profile-form-group">
              <label for="profile-img">
                <h4>Upload an Image:</h4>
              </label>
              <input
                type="file"
                className="file-form-control"
                id="profile-img"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-name">
                <h4>Name:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                id="profile-name"
                name="profile-name"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-genre">
                <h4>Genre:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                id="profile-genre"
                name="profile-genre"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-website">
                <h4>Website:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                id="profile-website"
                name="profile-website"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-city">
                <h4>City:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                id="profile-city"
                name="profile-city"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-state">
                <h4>State:</h4>
              </label>
              <input
                maxlength="2"
                type="text"
                className="profile-form-control"
                id="profile-state"
                name="profile-state"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-about">
                <h4>About:</h4>
              </label>
              <textarea
                type="text"
                className="form-control form-about-control"
                id="profile-about"
                name="profile-about"
              />
            </div>
            <div className="profile-form-group">
              <label for="profile-song">
                <h4>Upload a Song (mp3 or wav only):</h4>
              </label>
              <input
                type="file"
                className="file-form-control"
                id="profile-song"
                name="profile-song"
              />
            </div>
            <div className="form-btns">
              <button to="profile/" className="cancel-btn ">
                Cancel
              </button>
              <Link to="profile/" className="submit-btn ">
                Submit
              </Link>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default EditProfile;
