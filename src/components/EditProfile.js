import React, { Component } from "react";
import Notifications, { notify } from "react-notify-toast";
import "./EditProfile.css";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../contexts/UserContext";
const { API_BASE_URL } = require("../config");

const toastColor = {
  background: "#505050",
  text: "#fff"
};

class EditProfile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false,
      cloudinaryImg: "",
      imgURL: "",
      profileName: "",
      genre: "",
      website: "",
      city: "",
      state: "",
      about: "",
      soundCloud: "",
      redirect: false
    };
  }

  componentDidMount() {
    const id = window.localStorage.getItem("id");
    const token = window.localStorage.getItem("Bearer");
    if (!id) {
      return (window.location.href = "/");
    }
    fetch(`${API_BASE_URL}/profile/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => {
        this.setState(data);
      })
      .catch(err => {
        this.setState({ errors: err });
      });
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
          imgURL: cloudinaryImg[0].url
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

    const userData = {
      imgURL: this.state.imgURL,
      profileName: this.state.profileName,
      genre: this.state.genre,
      website: this.state.website,
      city: this.state.city,
      state: this.state.state,
      normalizedCity: this.state.city.toUpperCase(),
      normalizedState: this.state.state.toUpperCase(),
      about: this.state.about,
      soundCloud: this.state.soundCloud
    };
    fetch(`${API_BASE_URL}/edit-profile/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(() => {
        return this.toast("Profile Updated", "custom", 2000, toastColor);
      })
      .then(() => this.setState(() => ({ redirect: true })))
      .catch(err => {
        this.setState({ errs: err });
      });
  };

  toast = notify.createShowQueue();
  render() {
    const id = window.localStorage.getItem("id");
    if (this.state.redirect === true) {
      return <Redirect to={`/profile/${id}`} />;
    }
    return (
      <div className="edit-profile-container">
        <Notifications />
        <h2 className="edit-profile-title">Edit Profile</h2>
        <section>
          <div className="button edit-profile-form">
            {this.state.uploaded ? (
              <h4 style={{ backgroundColor: "red" }}>Successfully Uploaded!</h4>
            ) : (
              <h4>Upload an Image:</h4>
            )}
            <label htmlFor="profileImage">
              <abbr title="Click to Upload">
                <FontAwesomeIcon icon={faImage} color="#3B5998" size="4x" />
              </abbr>
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={this.onChange}
            />
            {this.state.uploaded ? (
              <img className="thumbnail" src={this.state.cloudinaryImg} />
            ) : null}
          </div>

          <form className="edit-profile-form" onSubmit={this.onSubmit}>
            <div className="profile-form-group">
              <label htmlFor="profileName">
                <h4>Name:</h4>
              </label>
              <input
                type="text"
                placeholder="Artist Name"
                className="profile-form-control"
                id="profileName"
                name="profileName"
                value={this.state.profileName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="genre">
                <h4>Genre:</h4>
              </label>
              <input
                type="text"
                placeholder="ex: Rock"
                className="profile-form-control"
                id="genre"
                name="genre"
                value={this.state.genre}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="website">
                <h4>Website:</h4>
              </label>
              <input
                type="text"
                placeholder="ex: www.myband.com"
                className="profile-form-control"
                id="website"
                name="website"
                value={this.state.website}
                onChange={this.handleChange}
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="city">
                <h4>City:</h4>
              </label>
              <input
                type="text"
                placeholder="ex: Brooklyn"
                className="profile-form-control"
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="state">
                <h4>State:</h4>
              </label>
              <input
                maxlength="2"
                placeholder="ex. NY"
                type="text"
                className="profile-form-control"
                id="state"
                name="state"
                value={this.state.state}
                onChange={this.handleChange}
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="about">
                <h4>About:</h4>
              </label>
              <textarea
                type="text"
                placeholder="We collect rocks..."
                className="form-control form-about-control"
                id="about"
                name="about"
                value={this.state.about}
                onChange={this.handleChange}
              />
            </div>
            <div className="profile-form-group">
              <label htmlFor="soundCloud">
                <h4>Embed a song from SoundCloud:</h4>
              </label>
              <input
                type="text"
                placeholder="<iframe...<iframe/>"
                className="form-control"
                id="soundCloud"
                name="soundCloud"
                value={this.state.soundCloud}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-btns">
              <Link to={`/profile/${id}`} className="submit-btn ">
                Cancel
              </Link>

              <button type="submit" className="submit-btn ">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default EditProfile;
