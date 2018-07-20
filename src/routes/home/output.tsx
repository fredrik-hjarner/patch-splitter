import { random } from "lodash";
import * as React from "react";

type Props = {
  output: string[],
};

export class Output extends React.Component<Props> {
  public render() {

    return (
      <div>
        <h2>Output</h2>
        <div>
          {this.props.output.map((o) => (
            <pre style={this.createStyle()}>{o}</pre>
          ))}
        </div>
      </div>
    );
  }

  private rand = () => random(40, 255);

  private createStyle = () => ({
    backgroundColor: `rgb(${this.rand()},${this.rand()},${this.rand()})`,
  })
}
