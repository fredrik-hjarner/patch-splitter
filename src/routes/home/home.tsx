import * as React from 'react';
import { createContext, CSSProperties } from 'react';
import { InputForm } from 'routes/home/input-form';
import { Output } from 'routes/home/output/output';
import { Preview } from 'routes/home/preview/preview';

export const Context = createContext({}); // TODO: wtf? {}

type StyleMap = {
  [key in 'header' | 'page' | 'columns' ]: CSSProperties
};

const styles: StyleMap = {

  header: {
    padding: '50px 0 10px 0',
    textAlign: 'center',
  },

  page: {
    // display: 'grid',
    // gridTemplateRows: 'auto 1fr',
    // height: '100vh',
    // position: 'relative',
  },

  columns: {
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: 'repeat(3, 33.33%)',
    // height: '100%',
    padding: '30px',
  },

};

interface State {
  output: string[];

  // new state experimenting
  input: string;
  workInProgress: Array<{
    index: number,
    text: string,
    enabled: boolean,
  }>;
  result: string;
}

export class Home extends React.Component<{}, State> {
  public state = {
    output: [],

    // new state experimenting
    input: '',
    result: '',
    workInProgress: [],
  };

  public render() {
    return (
      <div style={styles.page}>
        <h1 style={styles.header}>Patch/Diff Splitter</h1>
        <div style={styles.columns}>
          <Context.Provider value={{ ...this.state, ...this.handlers }}>
            <InputForm onDone={this.handleDone}/>
            <Output output={this.state.output}/>
            <Preview data={this.state.output}/>
          </Context.Provider>
        </div>
      </div>
    );
  }

  private changeInput = (text: string) => this.setState({ input: text });
  private changeWorkInProgress = () => {};

  private handlers = { // tslint:disable-line
    changeInput: this.changeInput,
    changeWorkInProgress: this.changeWorkInProgress,
  };

  private handleDone = (files: string[]) => this.setState({ output: files }); // TODO: remove this
}
