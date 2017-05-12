export default class Score {
  id?: number;
  name: string;
  score: number;
  constructor(name: string, score: number, id?: number) {
    this.name = name;
    this.score = score;
  }
}