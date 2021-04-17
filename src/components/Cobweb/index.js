import React from 'react';
import ParticlesBg from 'particles-bg';

const config = {
  num: [20, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: 'center',
  cross: 'dead',
  random: 15,
  type: 'cobweb',
  g: 5,
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * 2,
      particle.radius * 2
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

const Cobweb = () => (
  <>
    <ParticlesBg num={40} color="#233240" config={config} type="cobweb" bg />
  </>
);

export default Cobweb;
