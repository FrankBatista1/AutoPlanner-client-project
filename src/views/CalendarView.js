import { useContext, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarView = () => {
  const { logOutUser, fetchUserData, user } = useContext(AuthContext);

  let todayStr = new Date().toISOString().replace(/T.*$/, '')


  useEffect(() => {
    fetchUserData();
    
  }, []);

  const INITIAL_EVENTS = [
    {
      id: 3,
      title: 'All-day event',
      start: todayStr
    }
  ]
  return (
    <div>
      <p>Welcome {user.name}</p>
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            eventBackgroundColor={"#F59E0B"}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
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
