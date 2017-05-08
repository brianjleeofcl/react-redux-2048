import * as React from 'react';
import Modal from '../../modal/Modal';
import Button from '../../button/Button';

interface Prop {
  score: number;
  resetBoard: () => void;
}

export default function GameOver({score, resetBoard}: Prop): JSX.Element {

  const content: JSX.Element = <div>
    <p>Final Score: {score}</p>
    <Button click={resetBoard}>Reset</Button>
  </div>

  return <Modal children={content} title="Game Over"/>
}
