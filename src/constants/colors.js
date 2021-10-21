const coldWarmGradient = {};
for (let i = 0; i <= 20; i++) {
  coldWarmGradient[i] = {
    x: (255 / 20) * i,
    y: 255 - ((8 / 20) * i),
    z: 255 - ((255 / 20) * i)
  }
}

const warmHotGradient = {};
for (let i = 0; i <= 20; i++) {
  warmHotGradient[i] = {
    x: 255,
    y: 247 - ((107 / 20) * i),
    z: 0
  }
}

export default {coldWarmGradient, warmHotGradient};
