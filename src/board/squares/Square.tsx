import * as React from 'react';
import './Square.css';

interface prop {
  children?: any
}

export default class Square extends React.Component<prop,null> {
  render() {
    const colorMap = {
      '2': '#1588ff',
      '4': '#00b1ff',
      '8': '#00d8ff',
      '16': '#66e7ff',
      '32': '#b2f3ff',
      '64': '#ffffff',
      '128': '#f6e7b8',
      '256': '#edcf72',
      '512': '#edcc61',
      '1024': '#edc53f',
      '2048': '#edc22e'
    }
    const { children } = this.props;

    return <div style={{backgroundColor: `${colorMap[children]}`}}>
      {children}
    </div>
  }
}