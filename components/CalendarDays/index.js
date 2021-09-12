import React from "react";
import startOfWeek from "date-fns/startOfWeek";
import fnsFormat from "date-fns/format";
import addDays from "date-fns/addDays";
import styled from "styled-components";
import colors from "@configs/colors";

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
  grid-auto-flow: column;
  grid-auto-columns: calc(100% / 7);
`;

const Day = styled.div`
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${colors.grey};
`;

const CalendarDays = ({ currentMonth = Date.now() }) => {
  let days = [];

  let startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i++) {
    days.push(<Day key={i}>{fnsFormat(addDays(startDate, i), "eee")}</Day>);
  }

  return <DaysRow>{days}</DaysRow>;
};

export default CalendarDays;
