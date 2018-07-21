import * as React from 'react';
import { File } from 'routes/home/output/file';

type Props = {
  output: string[],
};

export class Output extends React.Component<Props> {
  public render() {

    return (
      <div>
        <h2>Work in progress</h2>
        <div>
          {this.props.output.map((o, i) => (
            <File key={i} index={i} file={o}/>
          ))}
        </div>
      </div>
    );
  }
}
