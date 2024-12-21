// src/EventDetails.js
import React from 'react';
import Events from './component/Events';

function EventDetails() {
  const eventDetails = {
    eventName: 'IPL 2024 - Match 1',
    Owner: 'Royal Challengers Bangalore',
    Coach: 'Sanjay Bangar',
    Captain: 'Faf du Plessis',
    Venue: 'M. Chinnaswamy Stadium, Bangalore'
  };

  return (
    <div className="EventDetails">
      <h1>IPL Cricket Events</h1>
      <Events
        eventName={eventDetails.eventName}
        Owner={eventDetails.Owner}
        Coach={eventDetails.Coach}
        Captain={eventDetails.Captain}
        Venue={eventDetails.Venue}
      />
    </div>
  );
}

export default EventDetails;
