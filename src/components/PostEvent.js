import React, { Component } from "react";
import Notifications, { notify } from "react-notify-toast";
import "./PostEvent.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../contexts/UserContext";
const { API_BASE_URL } = require("../config");

const toastColor = {
  background: "#505050",
  text: "#fff"
};

class PostEvent extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      eventImg:
        "https://res.cloudinary.com/namninja/image/upload/v1555809657/dzpmw1hbngbmv9u5qb0i.png",
      uploaded: false,
      cloudinaryImg: "",
      eventName: "",
      eventDate: "",
      eventVenue: "",
      eventAddress: "",
      eventAddress2: "",
      eventCity: "",
      eventState: "",
      eventZip: "",
      eventCost: "",
      eventStart: "",
      eventEnd: "",
      eventDetails: "",
      redirect: false
    };
  }
  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 1) {
      const msg = "Only 1 image can be uploaded at a time";
      return this.toast(msg, "custom", 2000, toastColor);
    }

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    if (errs.length) {
      return errs.forEach(err => this.toast(err, "custom", 2000, toastColor));
    }
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("Bearer");

    fetch(`${API_BASE_URL}/image-upload/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(cloudinaryImg => {
        this.setState({
          uploaded: true,
          cloudinaryImg: cloudinaryImg[0].url,
          eventImg: cloudinaryImg[0].url
        });
      })
      .catch(err => {
        err.json().then(e => {
          this.toast(e.message, "custom", 2000, toastColor);
          this.setState({ uploaded: false });
        });
      });
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("Bearer");

    const eventData = {
      eventImg: this.state.eventImg,
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      eventVenue: this.state.eventVenue,
      eventAddress: this.state.eventAddress,
      eventAddress2: this.state.eventAddress2,
      eventCity: this.state.eventCity,
      eventState: this.state.eventState,
      normalizedCity: this.state.eventCity.toUpperCase(),
      normalizedState: this.state.eventState.toUpperCase(),
      eventZip: this.state.eventZip,
      eventCost: this.state.eventCost,
      eventStart: this.state.eventStart,
      eventEnd: this.state.eventEnd,
      eventDetails: this.state.eventDetails
    };
    fetch(`${API_BASE_URL}/post-event/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(() => {
        return this.toast("Event Posted", "custom", 2000, toastColor);
      })
      .then(() => this.setState(() => ({ redirect: true })))
      .catch(err => {
        this.setState({ errors: err });
      });
  };
  toast = notify.createShowQueue();
  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/profile/${this.context.loggedInUser._id}`} />;
    }
    return (
      <div className="post-event-container">
        <Notifications />
        <h2 className="post-event-title">Post Event</h2>
        <section>
          <div className="button post-event-form">
            {this.state.uploaded ? (
              <h4 style={{ backgroundColor: "red" }}>Successfully Uploaded!</h4>
            ) : (
              <h4>Upload an Event Image:</h4>
            )}
            <label htmlFor="eventImg">
              <abbr title="Click to Upload">
                <FontAwesomeIcon icon={faImage} color="#3B5998" size="4x" />
              </abbr>
            </label>
            <input
              type="file"
              id="eventImg"
              name="eventImg"
              onChange={this.onChange}
            />
            {this.state.uploaded ? (
              <img
                className="thumbnail"
                src={this.state.eventImg}
                alt="uploaded thumbnail"
              />
            ) : null}
          </div>

          <form className="post-event-form" onSubmit={this.onSubmit}>
            <div className="post-event-form-group">
              <label for="eventName">
                <h4>Event Name:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventName"
                name="eventName"
                onChange={this.handleChange}
                required
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
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventVenue">
                <h4>Venue:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventVenue"
                name="eventVenue"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                required
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                required
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
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="post-event-form-group">
              <label for="eventZip">
                <h4>Zip Code:</h4>
              </label>
              <input
                type="text"
                className="post-event-form-control"
                id="eventZip"
                name="eventZip"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
            <div className="form-btns">
              <Link
                to={`/profile/${this.context.loggedInUser._id}`}
                className="submit-btn "
              >
                Cancel
              </Link>
              <button type="submit" className="cancel-btn ">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default PostEvent;
