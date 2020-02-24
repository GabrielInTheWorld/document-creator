import React from 'react';

import './Document.css';
import ToolbarButton from '../toolbar-button/ToolbarButton';

export default class Document extends React.Component {
  componentDidMount() {
    const element = this.getEditor();
    element.contentEditable = true;
    element.focus();
  }

  getEditor = () => {
    return document.getElementById('source');
  };

  execCommand = (command, value) => {
    document.execCommand(command, false, value || '');
  };

  render() {
    const inchCalc = 72 / 2.54;
    const style = {
      width: 21 * inchCalc,
      padding: 2.5 * inchCalc
    };
    return (
      <div id="document">
        <div id="toolbar">
          <ToolbarButton onClick={() => this.execCommand('bold')} label={'B'} />
          <ToolbarButton onClick={() => this.execCommand('italic')} label={'I'} />
          <ToolbarButton onClick={() => this.execCommand('underline')} label={'U'} />
        </div>
        <div id="source" style={style}></div>
        <div id="footer"></div>
      </div>
    );
    // return (
    //   <div id="document">
    //     <div id="toolbar">
    //       <ToolbarButton onClick={() => this.execCommand('bold')} label={'B'} />
    //     </div>
    //     <iframe title="document" id="source" />
    //   </div>
    // );
  }
}
