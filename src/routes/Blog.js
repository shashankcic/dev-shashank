import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const layerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const layers = [
  { offset: 0, speed: 0.5, color: "#0f8", text: "I write" },
  { offset: 1, speed: 0.5, color: "white", backgroundColor: "#ff6d6d", text: "Technical stuff" },
  { offset: 2, speed: 0.5, color: "#0f8", text: "Medium Widget" },
];

function Blog() {
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

export default Blog;