import * as React from 'react';
import { Component } from 'react';
import { IconProps } from 'semantic-ui-react';

export const block = (Icon: any): any => {
  return (class extends Component {
    public render() {
      const { style, ...rest } = this.props as IconProps;

      const css = {
        display: 'block',
        lineHeight: 1,
        margin: 0,
        ...style,
      };

      return <Icon style={css} {...rest}/>;
    }
  });
};
