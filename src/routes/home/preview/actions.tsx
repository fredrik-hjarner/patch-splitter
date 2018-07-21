import * as React from 'react';
import { Icon, Menu, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';

type Props = {
  file: string,
};

const menuStyle = {
  borderTopRightRadius: 0,
};

export class Actions extends React.Component<Props> {
  public render() {
    return (
      <Menu icon vertical borderless compact style={menuStyle}>
        {this.renderIcon('hide')}
        {this.renderIcon('save', 'olive')}
        {this.renderIcon('remove', 'red')}
      </Menu>
    );
  }

  private renderIcon = (name: SemanticICONS, color?: SemanticCOLORS) => (
    <Menu.Item name={name} link>
      <Icon name={name} size="large" color={color}/>
    </Menu.Item>
  )
}
