import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../style/HomePage.css";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { baseURL } from "../helpers/apiHelper";
import axios from "axios";
import Header from "../components/Header";

const CalendarView = () => {
  const [date, setDate] = useState("");
  const {
    fetchUserData,
    user,
    events,
    setEvents,
    fetchEventsData,
    updateUserEvetns,
  } = useContext(AuthContext);
  useEffect(() => {
    fetchUserData();
    fetchEventsData();
  }, []);

  const handleClick = async (object) => {
    const result = await Swal.fire({
      title: object.event._def.title,
      text: object.event._def.url,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: "#F59E0B",
      denyButtonColor: "#c41019",
      confirmButtonText: "Open exercise link",
      denyButtonText: `Delete exercise`,
    });
    if (result.isConfirmed) {
      window.open(object.event.url);
    }
    if (result.isDenied) {
      const id = object.event._def.extendedProps._id;
      const filtered = events.filter((event) => event._id !== id);
      await axios.delete(`${baseURL}/events/event/${id}`);
      setEvents(filtered);
    }
  };

  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      </div>
      <div>
        <div className="py-3 px-20">
          <FullCalendar
            plugins={[
              momentTimezonePlugin,
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "",
              right: "title",
            }}
            timeZone={"UTC"}
            height={"40em"}
            contentHeight={"40em"}
            initialView="dayGridMonth"
            editable={true}
            eventBorderColor={"#d48d13"}
            eventBackgroundColor={"#F59E0B"}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={events}
            eventClick={function (e) {
              e.jsEvent.preventDefault();
              handleClick(e);
            }}
            defaultAllDay={true}
            eventMouseEnter={""}
            //extracts the new data from the event and updates it in the database
            eventChange={(event) =>
              updateUserEvetns(event.event._def.extendedProps._id, {
                start: event.event._instance.range.start,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
