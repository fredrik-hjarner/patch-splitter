import * as React from 'react';
import { File } from './file';

type Props = {
  output: string[],
};

export class Output extends React.Component<Props> {
  public render() {

    return (
      <div>
        <h2>Output</h2>
        <div>
          {this.props.output.map((o, i) => (
            <File key={i} file={o}/>
          ))}
        </div>
      </div>
    );
  }
}
