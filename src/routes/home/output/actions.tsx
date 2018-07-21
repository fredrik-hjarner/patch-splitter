import { block } from 'components';
import { compose } from 'ramda';
import * as React from 'react';
import { CSSProperties } from 'react';
import { Icon } from 'semantic-ui-react';
import { randomBgColor } from 'utils';

// OMG. This is awesome!
const MyIcon = compose(block)(Icon);

type StyleMap = {
  [key in 'rows' ]: CSSProperties
};

const styles: StyleMap = {
  rows: {
    border: 'solid 1px black',
  },
};

type Props = {
  file: string,
};

export class Actions extends React.Component<Props> {
  public render() {
    return (
      <div style={styles.rows}>
        <MyIcon name="add" size="big" style={randomBgColor()} {...this.props}/>
        <MyIcon name="alarm" size="big" style={randomBgColor()} {...this.props}/>
        <MyIcon name="anchor" size="big" style={randomBgColor()} {...this.props}/>
      </div>
    );
  }
}
