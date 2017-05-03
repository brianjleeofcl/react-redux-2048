export default class Board {
  array: number[];
  scale: number;
  score: number;
  spaces: number;

  constructor(n: number) {
    this.array = Array(n * n).fill(0)
    this.scale = n
    this.score = 0
    this.spaces = this.array.length
  }

  get matrix() {
    const len = this.array.length ** 0.5
    const arr = []
    for (let i = 0; i < len; i++) {
      arr.push(this.array.slice(i * len, (i + 1) * len))
    }
    return arr
  }

  set matrix(mtx: number[][]) {
    const arr = Array(0);
    this.array = arr.concat(...mtx)
  }

  init(): void {
    const index1 = Math.floor(Math.random() * this.array.length)
    let index2 = Math.floor(Math.random() * this.array.length)
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * this.array.length)
    }

    this.newSquare(index1)
    this.newSquare(index2)
    this.calcScore()
    this.updateRemainingSpaces()
  }

  newSquare(index: number): void {
    this.array[index] = Math.random() > .8 ? 4 : 2
  }

  calcScore(): void {
    this.score = this.array.reduce((a,b) => a + b, 0)
  }

  updateRemainingSpaces(): void {
    this.spaces = this.array.filter(num => num === 0).length
  }
}