import React, { useState, useEffect } from "react";
import CalendarHeader from "@components/CalendarHeader";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import CalendarCell from "@components/CalendarCell";
import CalendarDays from "@components/CalendarDays";
import styled from "styled-components";
import { CALENDAR_SIZE } from "@configs/constants";
import { eventsData } from "@configs/events";
import UpcomingEvent from "@components/UpcomingEvents";
import isSameDay from "date-fns/isSameDay";
const CalendarContainer = styled.div`
  width: ${({ width }) => width};
`;

const Calendar = ({ width = "100%", size = CALENDAR_SIZE.NORMAL }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(new Date());
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setDateSelected(day);
  };

  useEffect(() => {
    if (dateSelected) {
      const events = eventsData.filter((event) =>
        isSameDay(dateSelected, new Date(event.date))
      );
      setUpcomingEvents(events);
    }
  }, [dateSelected]);

  return (
    <>
      <CalendarHeader
        currentMonth={currentMonth}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        size={size}
      />
      <CalendarContainer width={width}>
        <CalendarDays currentMonth={currentMonth} size={size} />
        <CalendarCell
          currentMonth={currentMonth}
          dateSelected={dateSelected}
          onDateClick={onDateClick}
          size={size}
          events={eventsData}
        />
        {size === CALENDAR_SIZE.SMALL && (
          <UpcomingEvent events={upcomingEvents} date={dateSelected} />
        )}
      </CalendarContainer>
    </>
  );
};

export default Calendar;
