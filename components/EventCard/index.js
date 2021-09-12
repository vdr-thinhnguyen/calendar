import React from "react";
import styled from "styled-components";
import { EVENT_TYPE } from "@configs/constants";
import colors from "@configs/colors";
import Link from "next/link";
import Image from "next/image";
import format from "date-fns/format";

const EventCardContainer = styled.div`
  width: 100%;
  text-align: left;
  cursor: pointer;
  margin: 0.5rem 0;
`;

const EventCardWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ type }) =>
    type === EVENT_TYPE.APPOINTMENT ? colors.lightOrange : colors.darkBlue};

  border-left: 6px solid
    ${({ type }) =>
      type === EVENT_TYPE.APPOINTMENT ? colors.darkBlue : colors.darkOrange};
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ type }) =>
    type === EVENT_TYPE.APPOINTMENT ? colors.darkBlue : colors.darkOrange};
`;

const Time = styled.div`
  font-size: 0.875rem;
  color: ${colors.lightGrey};
  padding: 0.5rem 0;
`;

const WrapperClientProfile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;
const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${colors.white};
  display: flex;
  align-item: center;
  justify-content: center;
`;

const TextLink = styled.a`
  color: ${colors.darkBlue};
  padding-left: 0.5rem;
  font-size: 0.875rem;
  text-decoration: underline;
`;

const EventCard = ({ url = "/event", data }) => {
  return (
    <EventCardContainer type={data.type}>
      <EventCardWrapper type={data.type}>
        <Link href={url} passHref>
          <Title type={data.type}>
            {data.type === EVENT_TYPE.WEBINAR
              ? `Webinar: ${data.title}`
              : data.title}
          </Title>
        </Link>

        <Time>{`${format(new Date(data.start), "hh:mm aa")} - ${format(
          new Date(data.end),
          "hh:mm aa -	OO"
        )} `}</Time>

        {data.type === EVENT_TYPE.APPOINTMENT && (
          <WrapperClientProfile>
            <Avatar>
              <Image src="/user.svg" width={20} height={20} alt="" />
            </Avatar>
            <TextLink>View client profile</TextLink>
          </WrapperClientProfile>
        )}
      </EventCardWrapper>
    </EventCardContainer>
  );
};

export default EventCard;
