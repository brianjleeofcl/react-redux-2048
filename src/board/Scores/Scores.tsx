import * as React from 'react';
import Modal from '../../modal/Modal';
import Button from '../../button/Button';

interface Prop {
  closeModal: () => void;
  
}

export default function Scores({closeModal}: Prop): JSX.Element {
  const content: JSX.Element = <div>
    <table className="High-scores-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Score</th>
          <th>Player</th>
        </tr>
      </thead>
      <tbody>
        {/*{this.state.scores.map((obj, i) => <tr key={obj.id}>
          <td>#{i + 1}</td>
          <td>{obj.score}</td>
          <td>{obj.name}</td>
        </tr>)}*/}

        <tr>
          <td>1</td>
          <td>100</td>
          <td>blabar</td>
        </tr>
      </tbody>
    </table>
    <Button click={closeModal}>Close</Button>
  </div>

  return <Modal children={content} title="High Scores"/>
}