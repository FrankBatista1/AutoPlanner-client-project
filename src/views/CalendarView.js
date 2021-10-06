import { useContext, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../style/HomePage.css'

const CalendarView = () => {
  const { logOutUser, fetchUserData, user , events, fetchEventsData} = useContext(AuthContext);
  useEffect(() => {
    fetchUserData();
    fetchEventsData();
  }, []);

  return (
    <div>
      <p>{user.name}'s calendar</p>
      <div  className="demo-app">
        <div className="demo-app-main">
          <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            progressiveEventRendering={true}
            height={720}
            initialView="dayGridMonth"
            editable={true}
            eventBorderColor={"#d48d13"}
            eventBackgroundColor={"#F59E0B"}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={events}
            select={""}
          // custom render function
            eventClick={""}
            eventsSet={""} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
      <button onClick={logOutUser}>Log out</button>
    </div>
  );
};

export default CalendarView;
