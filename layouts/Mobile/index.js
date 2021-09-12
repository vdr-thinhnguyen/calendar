import React from "react";
import Calendar from "@widgets/Calendar";
import styled from "styled-components";
import { CALENDAR_SIZE } from "@configs/constants";
import colors from "@configs/colors";

const Container = styled.div`
  font-family: DM Sans, sans-serif;
  padding: 1rem;
`;

const Layout = styled.div`
  background: ${colors.lightestBlue};
`;

export default function Mobile() {
  return (
    <Layout>
      <Container>
        <Calendar size={CALENDAR_SIZE.SMALL} />
        <Calendar size={CALENDAR_SIZE.NORMAL} />
      </Container>
    </Layout>
  );
}
