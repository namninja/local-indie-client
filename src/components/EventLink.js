import React from "react";
import "./EventLink.css";
import Moment from "react-moment";

export default function Contact(props) {
  return (
    <div id={props.id} className="event">
      <a href="#" className="event-link">
        <img
          className="event-thumbnail"
          src={props.eventImg}
          alt={`photo of ${props.eventName}`}
        />
        <Moment format="ddd, MMM DD YYYY">
          <p className="event-link-items">{props.eventDate}</p>
        </Moment>
        <p className="event-link-items">{props.eventName}</p>
        <p className="event-link-items">{props.eventVenue}</p>
        <p className="event-link-items">
          {props.eventCity}, {props.eventState}
        </p>

        <p className="event-link-items">{props.eventCost}</p>
        <p className="event-link-items">
          {props.eventStart}-{props.eventEnd}
        </p>
      </a>
    </div>
  );
}
