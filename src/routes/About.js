import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const layerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const layers = [
  { offset: 0, speed: 0.5, color: "#0f8", text: "About Me" },
  { offset: 1, speed: 0.5, color: "white", backgroundColor: "#ff6d6d", text: "Who Am I?" },
  { offset: 2, speed: 0.5, color: "#0f8", text: "Links" },
];

function About() {
  return (
    <div>
      <div>
        <Parallax pages={3} style={{ backgroundColor: "#000" }}>
          {layers.map((layer, index) => (
            <ParallaxLayer
              key={index}
              offset={layer.offset}
              speed={layer.speed}
              style={{ ...layerStyles, color: layer.color, backgroundColor: layer.backgroundColor }}
            >
              <h1 className="tracking-in-expand-fwd heading">{layer.text}</h1>
            </ParallaxLayer>
          ))}
        </Parallax>
      </div>
    </div>
  );
}

export default About;