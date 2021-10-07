import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../style/HomePage.css'
import momentTimezonePlugin from '@fullcalendar/moment-timezone'

const CalendarView = () => {
  const [date, setDate] = useState("")
  const { logOutUser, fetchUserData, user , events, fetchEventsData, updateUserEvetns} = useContext(AuthContext);
  useEffect(() => {
    fetchUserData();
    fetchEventsData();
  }, []);
  //(event) => updateUserEvetns(event.event._def.extendedProps._id, {start : e.event._instance.range.end.toDateString()})
  // event.event._def.extendedProps._id
  // event.event._instance.range.end

  
  return (
    <div>
      <p>{user.name}'s calendar</p>
      <div  className="demo-app">
        <div className="demo-app-main">
          <FullCalendar 
            plugins={[momentTimezonePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            timeZone={'UTC'}
            height={720}
            initialView="dayGridMonth"
            editable={true}
            eventBorderColor={"#d48d13"}
            eventBackgroundColor={"#F59E0B"}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={events} // alternatively, use the `events` setting to fetch from a feed
            select={""}
          // custom render function
            eventClick={""}
            eventsSet={""} 
            allDayMaintainDuration={true}
            eventChange={(event) => updateUserEvetns(event.event._def.extendedProps._id, {start : event.event._instance.range.start})}
           
          />
        </div>
      </div>
      <button onClick={logOutUser}>Log out</button>
    </div>
  );
};

export default CalendarView;
