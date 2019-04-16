import React, { Component } from "react";
import "./PostEvent.css";
import { Link } from "react-router-dom";
class EditProfile extends Component {
  render() {
    return (
      <div className="post-event-container">
        <h2 className="post-event-title">Post Event</h2>
        <section>
          <form className="post-event-form">
            <div className="post-event-form-group">
              <label for="post-event-img">
                <h4>Upload an Image:</h4>
              </label>
              <input
                type="file"
                className="file-form-control"
                id="post-event-img"
                name="post-event-img"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-name">
                <h4>Event Name:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-name"
                name="post-event-name"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-venue">
                <h4>Venue:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-venue"
                name="post-event-venue"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-date">
                <h4>Date:</h4>
              </label>
              <input
                type="date"
                className="post-event-form-control"
                id="post-event-date"
                name="post-event-date"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-address">
                <h4>Address:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-address"
                name="post-event-address"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-address2">
                <h4>Address 2:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-address2"
                name="post-event-address2"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-city">
                <h4>City:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-city"
                name="post-event-city"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-state">
                <h4>State:</h4>
              </label>
              <input
                maxlength="2"
                type="text"
                className="post-event-form-control"
                id="post-event-state"
                name="post-event-state"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-cost">
                <h4>Cost:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-cost"
                name="post-event-cost"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-start">
                <h4>Start Time:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-start"
                name="post-event-start"
              />
            </div>
            <div className="post-event-form-group">
              <label for="post-event-end">
                <h4>End Time:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="post-event-end"
                name="post-event-end"
              />
            </div>
            <div className="post-event-form-group">
              <label>
                <h4>Additional Details:</h4>
              </label>
              <textarea
                type="text"
                className="form-control form-about-control"
                name="post-event-details"
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
