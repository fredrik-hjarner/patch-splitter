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

export type ChangeWorkInProgressType = (index: number, enabled: boolean) => void;

export type ContextType = {
  changeInput: (text: string) => void,
  changeWorkInProgress: ChangeWorkInProgressType,
  input: string,
  result: string,
  workInProgress: FileType[],
};

// I actually dont't really use the default values.
export const Context = createContext({
  changeInput: null as any,
  changeWorkInProgress: null as any,
  input: null as any,
  result: null as any,
  workInProgress: [] as FileType[],
});

type StyleMap = {
  [key in 'header' | 'columns' ]: CSSProperties
};

const styles: StyleMap = {

  header: {
    padding: '50px 0 10px 0',
    textAlign: 'center',
  },

  columns: {
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: 'repeat(3, 33.33%)',
    // height: '100%',
    padding: '30px',
  },

};

type State = {
  input: string,
  workInProgress: FileType[],
  result: string,
};

export class Home extends React.Component<{}, State> {
  public state = {
    input: '',
    result: '',
    workInProgress: [],
  };

  public render() {
    return (
      <div>
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

  private changeWorkInProgress = (index: number, enabled: boolean) => {
    this.setState(
      state => ({
        ...state,
        workInProgress: state.workInProgress.map(x => x.index === index ? { ...x, enabled } : x),
      }),
      this.updateResult,
    );
  }

  private handlers = { // tslint:disable-line
    changeInput: this.changeInput,
    changeWorkInProgress: this.changeWorkInProgress,
  };

  // updates `result` from `workInProgress`
  private updateResult = () => this.setState(state => ({
    result: state.workInProgress
      .filter(({ enabled }) => enabled)
      .map(({ text }) => text)
      .join(''),
  }))
}
