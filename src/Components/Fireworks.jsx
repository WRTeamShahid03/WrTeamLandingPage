import React, { useEffect } from 'react'

const Fireworks = () => {
    useEffect(() => {
        const canvas = document.getElementById('fireworks');
        const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fireworks = [];
    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.targetX = Math.random() * canvas.width;
        this.targetY = Math.random() * canvas.height / 2;
        this.speed = 2;
        this.gravity = 0.2;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.radius = 2;
      }
      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const accelerationX = (dx / distance) * this.speed;
        const accelerationY = (dy / distance) * this.speed;
        this.x += accelerationX;
        this.y += accelerationY;
        this.speed += this.gravity;
        if (distance < 10) {
          fireworks.splice(fireworks.indexOf(this), 1);
          createParticles(this.x, this.y, this.color);
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 2;
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = Math.random() * -2;
        this.alpha = 1;
      }
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= 0.01;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    function createParticles(x, y, color) {
      for (let i = 0; i < 30; i++) {
        const particle = new Particle(x, y, color);
        fireworks.push(particle);
      }
    }
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.05) {
        fireworks.push(new Firework());
      }
      fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
      });
      fireworks.forEach((firework, index) => {
        if (firework.alpha <= 0) {
          fireworks.splice(index, 1);
        }
      });
      requestAnimationFrame(animate);
    }
    animate();
}, []);
  return (
    <div>
      <canvas id="fireworks"></canvas>
    </div>
  )
}

export default Fireworks
