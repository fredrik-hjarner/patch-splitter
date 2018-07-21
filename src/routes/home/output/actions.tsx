import * as React from 'react';
import { FileType } from 'routes/home/home';
import { Icon, Menu, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';

type Props = {
  file: FileType,
};

const menuStyle = {
  borderTopRightRadius: 0,
};

export class Actions extends React.Component<Props> {
  public render() {
    return (
      <Menu icon vertical borderless compact style={menuStyle}>
        {this.renderIcon('toggle on', 'green')}
        {this.renderIcon('download', 'blue')}
        {this.renderIcon('hide')}
      </Menu>
    );
  }

  private renderIcon = (name: SemanticICONS, color?: SemanticCOLORS) => (
    <Menu.Item name={name} link>
      <Icon name={name} size="large" color={color}/>
    </Menu.Item>
  )
}
