import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function About() {
	return(
		<div>
      <div>
        <Parallax pages={3} style={{  backgroundColor:"#000" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0f8' }}>
            <h1 className="tracking-in-expand-fwd">About Me</h1>
          </ParallaxLayer>


          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              backgroundColor: '#ff6d6d' 
            }}>
            <h1 >Who Am I?</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#0f8' 
            }}>
            <h1>Links</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
	);
}

export default About;