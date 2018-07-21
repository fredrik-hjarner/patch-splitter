import * as React from 'react';
import { createContext, CSSProperties } from 'react';
import { InputForm } from 'routes/home/input-form';
import { Output } from 'routes/home/output/output';
import { Preview } from 'routes/home/preview/preview';
import { splitPerFile } from 'utils';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TYPES /////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type FileType = {
  index: number,
  text: string,
  enabled: boolean,
};

export const Context = createContext({
  changeInput: (_: string) => {},
  changeWorkInProgress: () => {},
  input: '',
  result: '',
  workInProgress: [] as FileType[],
});

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
  input: string;
  workInProgress: FileType[];
  result: string;
}

export class Home extends React.Component<{}, State> {
  public state = {
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
            <InputForm/>
            <Output/>
            <Preview data={this.state.result}/>
          </Context.Provider>
        </div>
      </div>
    );
  }

  private changeInput = (text: string) => {
    const files = splitPerFile(text).map((f, i) => ({
      enabled: true,
      index: i,
      text: f,
    }));

    this.setState({
      input: text,
      result: text,
      workInProgress: files,
    });
  }

  private changeWorkInProgress = () => {};

  private handlers = { // tslint:disable-line
    changeInput: this.changeInput,
    changeWorkInProgress: this.changeWorkInProgress,
  };
}
