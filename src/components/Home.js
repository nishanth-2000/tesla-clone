import React from "react";
import { Container } from "../styled-components";
import { carsData } from "../utils";
import Body from "./Body";

export default function Home() {
  return (
    <>
      <Container>
        {carsData.map((data) => (
          <Body
            title={data.title}
            description={data.description}
            backgroundImage={data.image}
            leftBtnText={data.leftBtnText}
            rightBtnText={data.rightBtnText}
          />
        ))}
      </Container>
    </>
  );
}
