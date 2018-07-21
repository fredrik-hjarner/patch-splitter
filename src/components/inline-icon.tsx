import * as React from 'react';
import { Icon as SemIcon } from 'semantic-ui-react';

// type Props = {
//   file: string;
//   style?: any;
// } | {
//   [key in string]: any;    // TODO: wtf!? How to solve?
// };

export const InlineIcon = (props: any) => {
  const { style, ...rest } = props;
  const css = {
    display: 'block',
    lineHeight: 1,
    margin: 0,
    ...props.style,
  };
  return (
    <SemIcon style={css} {...rest}/>
  );
};
