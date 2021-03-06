import React from "react";
import "./EventLink.css";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function EventLink(props) {
  return (
    <div id={props.id} className="event">
      <Link to={`/event/${props.id}`} className="event-link">
        <img
          className="event-thumbnail"
          src={props.eventImg}
          alt={`photo of ${props.eventName}`}
        />
        <Moment className="event-link-items" format="ddd, MMM DD YYYY">
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
      </Link>
    </div>
  );
}
