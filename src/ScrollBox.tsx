import React, { Component } from 'react';

class ScrollBox extends Component {
  box: HTMLDivElement | null = null;

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box as HTMLDivElement;

    (this.box as HTMLDivElement).scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    } as React.CSSProperties;

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    };

    return (
      <div style={style} ref={ref => (this.box = ref)}>
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
