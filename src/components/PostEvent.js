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
              <label for="eventImg">
                <h4>Upload an Image:</h4>
              </label>
              <input
                type="file"
                className="file-form-control"
                id="eventImg"
                name="eventImg"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventName">
                <h4>Event Name:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventName"
                name="eventName"
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
              <label for="eventDate">
                <h4>Date:</h4>
              </label>
              <input
                type="date"
                className="post-event-form-control"
                id="eventDate"
                name="eventDate"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventAddress">
                <h4>Address:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventAddress"
                name="eventAddress"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventAddress2">
                <h4>Address 2:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventAddress2"
                name="eventAddress2"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventCity">
                <h4>City:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventCity"
                name="eventCity"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventState">
                <h4>State:</h4>
              </label>
              <input
                maxlength="2"
                type="text"
                className="post-event-form-control"
                id="eventState"
                name="eventState"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventCost">
                <h4>Cost:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventCost"
                name="eventCost"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventStart">
                <h4>Start Time:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventStart"
                name="eventStart"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventEnd">
                <h4>End Time:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventEnd"
                name="eventEnd"
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventDetails">
                <h4>Additional Details:</h4>
              </label>
              <textarea
                type="text"
                className="form-control form-about-control"
                id="eventDetails"
                name="eventDetails"
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
