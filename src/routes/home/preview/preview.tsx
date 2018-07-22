import * as React from 'react';
import { Form, Icon } from 'semantic-ui-react';

type Props = {
  data: string,
};

export class Preview extends React.Component<Props> {
  public render() {
    const { data } = this.props;

    return (
      <div>
        <h2>Preview result</h2>
        <Form onSubmit={this.download}>
          <Form.Button type="submit" primary><Icon name="download"/> as one file</Form.Button>
          <Form.Button type="submit" primary><Icon name="download"/> as separate files (in zip)</Form.Button>
          <Form.Button type="submit" color="green">Validate</Form.Button>
        </Form>
        {this.renderText(data)}
      </div>
    );
  }

  private renderText = (text: string) => <pre style={this.createStyle()}>{text}</pre>;

  private createStyle = () => ({
    margin: 0,
    padding: 0,
  })

  private download = () => {};
}
