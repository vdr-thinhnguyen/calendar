import React from "react";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import isSameMonth from "date-fns/isSameMonth";
import isSameDay from "date-fns/isSameDay";
import addDays from "date-fns/addDays";
import styled from "styled-components";
import colors from "@configs/colors";
import { CALENDAR_SIZE } from "@configs/constants";
import EventTag from "@components/EventTag";

const Wrapper = styled.div`
  display: block;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-auto-flow: column;
  grid-auto-columns: calc(100% / 7);
`;

const DayWrapper = styled.div`
  text-align: center;
  color: ${({ isSameMonth }) =>
    isSameMonth ? colors.grey : colors.lightestGrey};
  padding: 0.5rem 0;
  ${({ size, isHasEvents }) =>
    size === CALENDAR_SIZE.NORMAL &&
    `
    background-color: ${isHasEvents ? colors.dayBackground : "unset"};
    height: 6.5rem;
    border: 1px solid ${colors.grey};
    border-collapse: collapse; 
    margin-top: -1px;
    &:nth-child(n+2) {
      margin-left: -1px;
    }
  `};
  ${({ size, isHasEvents }) =>
    size === CALENDAR_SIZE.NORMAL &&
    isHasEvents &&
    `background: ${colors.dayBackground}`}
`;

const Day = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
  border-radius: 50%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  background-color: ${({ isSameDay }) =>
    isSameDay ? colors.darkBlue : "unset"};
  color: ${({ isSameDay }) => (isSameDay ? colors.white : "#666")};
  cursor: pointer;
  font-size: 0.875rem;
`;

const Text = styled.div`
  color: ${colors.darkBlue};
  font-size: 0.75rem;
  text-align: left;
  padding-left: 0.25rem;
  cursor: pointer;
`;

const CalendarCell = ({
  currentMonth = new Date(),
  dateSelected = new Date(),
  onDateClick = () => {},
  size,
  events = [],
}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const tempDay = day;
      const eventsOfDay =
        events?.length > 0
          ? events.filter((event) => isSameDay(day, new Date(event.date)))
          : [];
      days.push(
        <DayWrapper
          isSameMonth={isSameMonth(day, monthStart)}
          isHasEvents={eventsOfDay.length > 0}
          key={day}
          onClick={() => {
            size === CALENDAR_SIZE.SMALL && onDateClick(tempDay);
          }}
          size={size}
        >
          <Day isSameDay={isSameDay(day, dateSelected)}>{formattedDate}</Day>
          {eventsOfDay?.length > 0 &&
            size === CALENDAR_SIZE.NORMAL &&
            eventsOfDay.map((event, i) => (
              <EventTag key={i} title={event.title} type={event.type} />
            ))}
        </DayWrapper>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <Row key={day} size={size}>
        {days}
      </Row>
    );
    days = [];
  }
  return <Wrapper>{rows}</Wrapper>;
};

export default CalendarCell;
