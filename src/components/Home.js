import React, { useEffect } from "react";
import { Container } from "../styled-components";
import { carsData } from "../utils";
import Body from "./Body";
import createScrollSnap from "scroll-snap";

export default function Home() {
  useEffect(() => {
    const element = document.getElementById("container");
    if (element) {
      createScrollSnap(element, {
        snapDestinationY: "100%",
        // timeout: 400,
        // duration: 300,
        // threshold: 0.2,
      });
    }
  }, []);

  return (
    <Container id="container">
      {carsData.map((data, index) => (
        <Body
          key={data.id}
          index={index}
          title={data.title}
          description={data.description}
          backgroundImage={data.image}
          leftBtnText={data.leftBtnText}
          rightBtnText={data.rightBtnText}
        />
      ))}
    </Container>
  );
}
