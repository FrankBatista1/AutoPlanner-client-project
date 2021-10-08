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

const CalendarView = () => {
  const [date, setDate] = useState("");
  const {
    logOutUser,
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
    })
    if (result.isConfirmed){
      window.open(object.event.url)
    } 
    if(result.isDenied){
      const id = object.event._def.extendedProps._id
      const filtered = events
          .filter((event) => event._id !== id)
      await axios.delete(`${baseURL}/events/event/${id}`)
      setEvents(filtered)
    }
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{ backgroundColor: "#F59E0B", borderColor: "#d48d13" }}
          className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          onClick={logOutUser}
        >
          Log out
        </button>
        <Link
          to="/newexercise"
          style={{ backgroundColor: "#F59E0B", borderColor: "#d48d13" }}
          className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          New exercise
        </Link>
      </div>
      <div>
        <div>
          <FullCalendar
            plugins={[
              momentTimezonePlugin,
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            timeZone={"UTC"}
            height={720}
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
              handleClick(e)
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
        <h2>{user.name}'s planner</h2>
      </div>
    </div>
  );
};

export default CalendarView;
