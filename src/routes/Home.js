import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const layerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const layers = [
  { offset: 0, speed: 0.1, color: "#0f8", text: "Shashank Singh" },
  { offset: 1, speed: 0.1, color: "white", backgroundColor: "#ff6d6d", text: "Projects" },
  { offset: 2, speed: 0.1, color: "#0f8", text: "Sup?" },
];

function Home() {
  return (
    <div>
      <Parallax pages={3} style={{ backgroundColor: "#000" }}>
        {layers.map((layer, index) => (
          <ParallaxLayer
            key={index}
            offset={layer.offset}
            speed={layer.speed}
            style={{ ...layerStyles, color: layer.color, backgroundColor: layer.backgroundColor }}
          >
            <h1 className="heading">{layer.text}</h1>
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  );
}

export default Home;