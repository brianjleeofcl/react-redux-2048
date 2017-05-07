

export default class Board {
  public array: number[];
  public scale: number;

  constructor(n: number) {
    this.array = Array(n * n).fill(0);
    this.scale = n;
  }

  get matrix() {
    const len = this.array.length ** 0.5;
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(this.array.slice(i * len, (i + 1) * len));
    }
    return arr;
  }

  set matrix(mtx: number[][]) {
    const arr = Array(0);
    this.array = arr.concat(...mtx);
  }

  get score(): number {
    return this.array.reduce((a, b) => a + b, 0);
  }

  get spaces(): number {
    return this.array.filter(num => num === 0).length;
  }

  get status(): boolean {
    const arr = [
      movements.down(this),
      movements.left(this),
      movements.up(this),
      movements.right(this)
    ].map(board => eql(board.array, this.array))
    return !arr.every(bool => bool)
  }

  init(): void {
    const index1 = Math.floor(Math.random() * this.array.length);
    let index2 = Math.floor(Math.random() * this.array.length);
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * this.array.length);
    }

    this.newSquare(index1);
    this.newSquare(index2);
  }

  newSquare(index: number): void {
    this.array[index] = Math.random() > .8 ? 4 : 2
  }
}

function eql(arr1: number[], arr2: number[]): boolean {
  return arr2.every((_, i) => arr1[i] === arr2[i]);
}

const movements = {
  left(board: Board): Board {
    const matrix: number[][] = Array.from(board.matrix);
    const n: number = board.scale;

    for (const row of matrix) {
      let done = 0
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i];
          row[i] = 0;
          done++;
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++;
        }
        if (row[i] && !row[done]) {
          row[done] = row[i];
          row[i] = 0;
        }
      }
    }

    const output: Board = new Board(n);
    output.matrix = matrix;

    if(eql(board.array, output.array)) {
      return board
    } else {
      const emptySpots = []
      for (let i = 0; i < n; i++) {
        if (!output.array[(n - 1) + i * n]) {
          emptySpots.push((n - 1) + i * n)
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)];
      output.newSquare(newIndex);
      return output;
    }
  },

  right(board: Board): Board {
    const matrix: number[][] = Array.from(board.matrix);
    const n: number = board.scale;

    for (const row of matrix) {
      row.reverse();
      let done = 0;
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i];
          row[i] = 0;
          done++;
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++;
        }
        if (row[i] && !row[done]) {
          row[done] = row[i];
          row[i] = 0;
        }
      }
      row.reverse();
    }

    const output: Board = new Board(n);
    output.matrix = matrix;

    if(eql(board.array, output.array)) {
      return board;
    } else {
      const emptySpots = []
      for (let i = 0; i < n; i++) {
        if (!output.array[i * n]) {
          emptySpots.push(i * n);
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)];
      output.newSquare(newIndex);
      return output;
    }
  },

  up(board: Board): Board {
    const array: number[] = Array.from(board.array);
    const n: number = board.scale;
    const matrix: number[][] = Array(n).fill([]);

    for (let i = 0; i < array.length; i++) {
      matrix[i % n].push(array[i]);
    }

    for (const row of matrix) {
      let done = 0;
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i];
          row[i] = 0;
          done++;
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++
        }
        if (row[i] && !row[done]) {
          row[done] = row[i]
          row[i] = 0
        }
      }
    }

    const outputArr: number[] = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        outputArr[j * n + i] = matrix[i][j]
      }
    }

    const output: Board = new Board(n);
    output.array = outputArr;

    if(eql(board.array, output.array)) {
      return board;
    } else {
      const emptySpots = [];
      for (let i = n ** 2 - n; i < n ** 2; i++) {
        if (!output.array[i]) {
          emptySpots.push(i);
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)];
      output.newSquare(newIndex);
      return output;
    }
  },

  down(board: Board): Board {
    const array: number[] = Array.from(board.array);
    const n: number = board.scale;
    const matrix: number[][] = Array(n).fill([]);

    for (let i = 0; i < array.length; i++) {
      matrix[i % n].push(array[i]);
    }

    for (const row of matrix) {
      row.reverse();
      let done = 0;
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i];
          row[i] = 0;
          done++;
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++;
        }
        if (row[i] && !row[done]) {
          row[done] = row[i];
          row[i] = 0;
        }
      }
      row.reverse();
    }

    const outputArr = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        outputArr[j * n + i] = matrix[i][j];
      }
    }

    const output: Board = new Board(n);
    output.array = outputArr;

    if(eql(board.array, output.array)) {
      return board
    } else {
      const emptySpots = [];
      for (let i = 0; i < n; i++) {
        if (!output.array[i]) {
          emptySpots.push(i);
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)]
      output.newSquare(newIndex);
      return output;
    }
  }
}