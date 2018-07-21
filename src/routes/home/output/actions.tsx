import * as React from 'react';
import { Icon, Menu, SemanticICONS, SemanticCOLORS } from 'semantic-ui-react';

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
        {this.renderIcon('add')}
        {this.renderIcon('alarm')}
        {this.renderIcon('anchor')}
      </Menu>
    );
  }

  private renderIcon = (name: SemanticICONS, color?: SemanticCOLORS) => (
    <Menu.Item name={name} color={color} link>
      <Icon name={name} size="large"/>
    </Menu.Item>
  )
}
