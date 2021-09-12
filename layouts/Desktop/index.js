import React from "react";
import Calendar from "@widgets/Calendar";
import styled from "styled-components";
import { CALENDAR_SIZE } from "@configs/constants";
import colors from "@configs/colors";

const Container = styled.div`
  font-family: DM Sans, sans-serif;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
`;

const Layout = styled.div`
  background: ${colors.lightestBlue};
  min-height: 100vh;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
  background: ${colors.white};
  border-radius: 4px;
  ${({ direction }) =>
    direction === "right" ? `margin-left: 1rem; width: 70%;` : `width: 30%;`}
`;

export default function Desktop() {
  return (
    <Layout>
      <Container>
        <Wrapper direction="left">
          <Calendar size={CALENDAR_SIZE.SMALL} />
        </Wrapper>
        <Wrapper direction="right">
          <Calendar size={CALENDAR_SIZE.NORMAL} />
        </Wrapper>
      </Container>
    </Layout>
  );
}
