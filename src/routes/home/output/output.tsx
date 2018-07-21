import * as React from 'react';
import { Context } from 'routes/home/home';
import { File } from 'routes/home/output/file';

export class Output extends React.Component {
  public render() {

    return (
      <div>
        <h2>Work in progress</h2>
        <div>
          <Context.Consumer>
            {({ workInProgress }) => (
              workInProgress.map(file => (
                <File key={file.index} file={file}/>
              ))
            )}
          </Context.Consumer>
        </div>
      </div>
    );
  }
}
