import React, { Component } from "react";
import "./EditProfile.css";

class EditProfile extends Component {
  render() {
    return (
      <div className="edit-profile-container">
        <h2 className="edit-profile-title">Edit Profile</h2>
        <section>
          <form className="edit-profile-form">
            <div className="profile-form-group">
              <label>
                <h4>Upload an Image</h4>
              </label>
              <input
                type="file"
                className="file-form-control"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>Name:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>Genre:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>Website:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>City:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>State:</h4>
              </label>
              <input
                type="text"
                className="profile-form-control"
                name="profile-img"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>About:</h4>
              </label>
              <textarea
                type="text"
                className="form-control form-about-control"
                name="journalEntry"
              />
            </div>
            <div className="profile-form-group">
              <label>
                <h4>Upload a Song (mp3 or wav only):</h4>
              </label>
              <input
                type="file"
                className="file-form-control"
                name="profile-img"
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default EditProfile;
