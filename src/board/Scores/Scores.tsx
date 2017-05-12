import * as React from 'react';

import Modal from '../../modal/Modal';
import Button from '../../button/Button';

import Score from '../../classes/score.class';

const loading = require('../../loading.svg');

interface Prop {
  closeModal: () => void;
  scores: Score[];
}

export default function Scores({closeModal, scores}: Prop): JSX.Element {
  const content: JSX.Element = <div className="Scores">
    {scores.length > 0 ? '' : <img src={loading} className="Scores-loading"/>}
    <table className="High-scores-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Score</th>
          <th>Player</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((obj: Score, i) => <tr key={obj.id}>
          <td>#{i + 1}</td>
          <td>{obj.score}</td>
          <td>{obj.name}</td>
        </tr>)}
      </tbody>
    </table>
    <Button click={closeModal}>Close</Button>
  </div>

  return <Modal children={content} title="High Scores"/>
}