import React from 'react';
import Header from './Header';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Home() {
  return(
    <div>
      <Header/>
      <div>
        <Parallax pages={3} style={{  backgroundColor:"#000" }}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#0f8' }}>
            <h1 className="tracking-in-expand-fwd">Shashank Singh</h1>
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
            <h1 >Projects</h1>
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
            <h1>Sup?</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default Home;