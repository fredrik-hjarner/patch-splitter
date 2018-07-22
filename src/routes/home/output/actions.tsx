import * as React from 'react';
import { ChangeWorkInProgressType, Context, ContextType, FileType } from 'routes/home/home';
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
        <Context.Consumer children={this.renderConsumer}/>
      </Menu>
    );
  }

  private renderConsumer = ({ changeWorkInProgress }: ContextType) => {
    const { index, enabled } = this.props.file;
    return (
      <>
        {this.renderToggle(enabled, () => changeWorkInProgress(index, !enabled))}
        {this.renderIcon('download', 'blue')}
        {this.renderIcon('hide')}
      </>
    );
  }

  // tslint:disable-next-line ban-types
  private renderIcon = (name: SemanticICONS, color?: SemanticCOLORS, callback?: Function) => (
    <Menu.Item name={name} link>
      <Icon name={name} size="large" color={color} onClick={callback}/>
    </Menu.Item>
  )

  private renderToggle = (enabled: boolean, callback: ChangeWorkInProgressType) =>
    enabled ?
      this.renderIcon('toggle on', 'green', callback) :
      this.renderIcon('toggle off', 'red', callback)
}
