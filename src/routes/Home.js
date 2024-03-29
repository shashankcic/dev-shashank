import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Home() {
  return (
    <div>
      <div>
        <Parallax pages={3} style={{ backgroundColor: "#000" }}>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#0f8",
              overflow: "hidden",
            }}
          >
            <h1 className="heading tracking-in-expand-fwd">Shashank Singh</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              backgroundColor: "#ff6d6d",
              overflow: "hidden",
            }}
          >
            <h1 className="heading">Projects</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#0f8",
              overflow: "hidden",
            }}
          >
            <h1 className="heading">Sup?</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default Home;
