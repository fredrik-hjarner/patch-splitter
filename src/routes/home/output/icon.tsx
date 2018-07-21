import { block } from 'components';
import * as React from 'react';
import { Component } from 'react';
import { Icon as SemIcon } from 'semantic-ui-react';
import { randomBgColor } from 'utils';

@block
export class Icon extends Component {
  public render() {
    return <SemIcon size="big" style={randomBgColor()} {...this.props} />;
  }
}
