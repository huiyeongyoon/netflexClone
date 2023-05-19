export const func = {
  generateRandomNumber() {
    const data = []

    for (let i = 0; i < 10; i++) {
      data.push({ x: "Jan", net: Math.random() * 100, cogs: Math.random() * 10, gm: Math.random() * 10 })
    }
    return data
  },
}
