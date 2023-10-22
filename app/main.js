import p5 from 'p5'
import './style.css'

const countBalls = 20
const x = []
const y = []
const size = []
const r = []
const g = []
const b = []
const ALPHA  = 0.5
const speed = []
const RADIUS = 60
const rotateSpeed = []
const EASE = 0.07

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)

    for (let i = 0; i < countBalls; i++) {
      x[i] = p.windowWidth / 2
      y[i] = p.windowHeight / 2
      size[i] = p.random(8, 16)
      r[i] = Math.floor(p.random(0, 255))
      g[i] = Math.floor(p.random(0, 255))
      b[i] = Math.floor(p.random(0, 255))
      rotateSpeed[i] = p.random(0.03, 0.06)
      speed[i] = p.random(5, 10)
    }
  }
  p.draw = () => {
    p.background(0, 70)
    p.noStroke()

    for (let i = 0; i < countBalls; i++) {
      x[i] = p.lerp(x[i], p.mouseX, EASE)
      y[i] = p.lerp(y[i], p.mouseY, EASE)

      const sin = Math.sin(p.frameCount * rotateSpeed[i])
      const cos = Math.cos(p.frameCount * rotateSpeed[i])
      const posX = x[i] + RADIUS * cos
      const posY = y[i] + RADIUS * sin

      p.ellipse(posX, posY, size[i])
      p.fill(`rgba(${r[i]}, ${g[i]}, ${b[i]}, ${ALPHA})`)
    }
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
}

new p5(sketch)