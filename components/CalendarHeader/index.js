import React from "react";
import fnsFormat from "date-fns/format";
import { ChevronLeft, ChevronRight } from "react-feather";
import styled from "styled-components";
import colors from "@configs/colors";
import { CALENDAR_SIZE } from "@configs/constants";

const CalendarHeaderContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  font-family: "Nunito", sans-serif;
  margin: 0 auto;
  padding: 1rem 0;
`;

const HeaderText = styled.div`
  color: ${colors.darkBlue};
  font-size: 1.5rem;
  font-weight: bold;
`;

const WrapperIcon = styled.div`
  > svg > path {
    fill: #999;
  }
`;

const CalendarHeader = ({
  size,
  currentMonth,
  nextMonth = () => {},
  prevMonth = () => {},
}) => {
  return (
    <CalendarHeaderContainer>
      <WrapperIcon onClick={prevMonth}>
        <ChevronLeft />
      </WrapperIcon>
      {size === CALENDAR_SIZE.SMALL && (
        <HeaderText>{fnsFormat(currentMonth, "MMMM yyyy")}</HeaderText>
      )}
      <WrapperIcon onClick={nextMonth}>
        <ChevronRight />
      </WrapperIcon>
      {size === CALENDAR_SIZE.NORMAL && (
        <HeaderText>{fnsFormat(currentMonth, "MMMM yyyy")}</HeaderText>
      )}
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
