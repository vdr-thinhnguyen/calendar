import React, { useState, useEffect } from "react";
import fnsFormat from "date-fns/format";
import { ChevronLeft, ChevronRight } from "react-feather";
import styled from "styled-components";
import colors from "@configs/colors";
import { CALENDAR_SIZE } from "@configs/constants";

const CalendarHeaderContainer = styled.div`
  display: flex;
  width: ${({ size }) => (size === CALENDAR_SIZE.NORMAL ? "unset" : "300px")};
  justify-content: ${({ size }) =>
    size === CALENDAR_SIZE.NORMAL ? "flex-start" : "space-between"};
  align-items: center;
  font-family: "Nunito", sans-serif;
  margin: 0 auto;
  ${({ isMobile }) => !isMobile && `padding: 1rem;`}
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

const StyledButton = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${colors.darkBlue};
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  color: ${colors.darkBlue};
`;

const CalendarHeader = ({
  size,
  currentMonth,
  nextMonth = () => {},
  prevMonth = () => {},
}) => {
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" && window.innerWidth < 840
  );

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth < 840);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth < 840);
      window.addEventListener("resize", updateMedia);
    }
    return () =>
      typeof window !== "undefined"
        ? window.removeEventListener("resize", updateMedia)
        : null;
  }, []);
  return (
    <CalendarHeaderContainer size={size} isMobile={isMobileView}>
      {size === CALENDAR_SIZE.NORMAL && !isMobileView && (
        <StyledButton>Today</StyledButton>
      )}
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
