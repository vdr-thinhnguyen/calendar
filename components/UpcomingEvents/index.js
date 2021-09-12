import React from "react";
import styled from "styled-components";
import colors from "@configs/colors";
import EventCard from "@components/EventCard";
import isSameDay from "date-fns/isSameDay";
import format from "date-fns/format";

const UpcomingEventContainer = styled.div`
  padding: 1rem;
  @media screen and (max-width: 840px) {
    padding: 1rem 0;
  }
`;

const UpcomingEventWrapper = styled.div`
  margin-top: 1rem;
  border-top: 2px solid ${colors.grey};
`;

const Text = styled.div`
  padding: 0.25rem 0;
  font-weight: 500;
  ${({ color, size }) => `
        color: ${color};
        font-size: ${size};
    `}
`;

const UpcomingEvent = ({ events = [], date = Date.now() }) => {
  return (
    <UpcomingEventContainer>
      <UpcomingEventWrapper>
        <Text color={colors.darkBlue} size="1rem">
          Upcoming Events
        </Text>
        <Text color={colors.grey} size="0.75rem">
          {isSameDay(date, new Date())
            ? `Today, ${format(date, "d MMM")}`
            : format(date, "iii, d MMM")}
        </Text>
        {events.length
          ? events.map((event, i) => <EventCard key={i} data={event} />)
          : "No events added yet"}
      </UpcomingEventWrapper>
    </UpcomingEventContainer>
  );
};

export default UpcomingEvent;
