import React from "react";
import EventCard from "../components/EventCard";
import { useState } from "react";
import RegPopup from "../components/RegPopup";

function EventsPage() {
    const [regPopup, setRegpopup] = useState(false);
    const [eventName, setEventName] = useState("");
    const callPopup = (eventName) => {
        setRegpopup(true);
        setEventName(eventName);

        // document.body.style.overflow = 'hidden';
    }
    const closePopup = () => {
        setRegpopup(false);
        document.body.style.overflow = 'visible';
    }
    return (
        <>
            <div>
                <RegPopup eventName={eventName} trigger={regPopup} closePopup={closePopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />
                <EventCard callPopup={callPopup} />

            </div>
        </>
    );
}

export default EventsPage;