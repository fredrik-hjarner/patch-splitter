import * as React from "react";
import { CSSProperties } from "react";
import { InputForm } from "./input-form";
import { Output } from "./output";

type StyleMap = {
  [key in "header" | "page" | "columns" ]: CSSProperties
};

const styles: StyleMap = {

  header: {
    padding: "50px 0 10px 0",
    textAlign: "center",
  },

  page: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    height: "100vh",
    position: "relative",
  },

  columns: {
    display: "grid",
    gridGap: "30px",
    gridTemplateColumns: "repeat(2, 1fr)",
    height: "100%",
    padding: "30px",
  },

};

interface State {
  output: string[];
}

export class Home extends React.Component<{}, State> {
  public state = {
    output: [],
  };

  public render() {
    return (
      <div style={styles.page}>
        <h1 style={styles.header}>Patch/Diff Splitter</h1>
        <div style={styles.columns}>
          <InputForm onDone={this.handleDone}/>
          <Output output={this.state.output}/>
        </div>
      </div>
    );
  }

  private handleDone = (files: string[]) => this.setState({ output: files });
}
