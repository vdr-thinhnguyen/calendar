import React from "react";
import styled from "styled-components";
import colors from "@configs/colors";
import { EVENT_TYPE } from "@configs/constants";
import Link from "next/link";

const EventContainer = styled.div`
  width: 100%;
  text-align: left;
  cursor: pointer;
  margin: 2px 0;
`;

const Title = styled.div`
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px;
  white-space: nowrap;
  font-size: 0.75rem;
  color: ${({ type }) =>
    type === EVENT_TYPE.WEBINAR ? colors.white : colors.darkBlue};

  background-color: ${({ type }) =>
    type === EVENT_TYPE.WEBINAR ? colors.darkBlue : colors.lightOrange};
  border-left: 3px solid
    ${({ type }) =>
      type === EVENT_TYPE.WEBINAR ? colors.darkOrange : colors.darkBlue};
`;

const Event = ({ type = EVENT_TYPE.WEBINAR, title, url = "/event" }) => {
  return (
    <Link href={url} passHref>
      <EventContainer type={type}>
        <Title type={type}>{title}</Title>
      </EventContainer>
    </Link>
  );
};

export default Event;
