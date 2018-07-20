import * as React from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { lf, splitPerFile } from "utils";

type Props = {
  onDone: (files: string[]) => void,
};

export class InputForm extends React.Component<Props> {
  private input = "";

  public render() {

    return (
      <div>
        <h2>Input</h2>
        <Form onSubmit={this.load}>
          <Form.Field>
            <TextArea onChange={this.handleChange} rows={20}/>
          </Form.Field>
          <Button type="submit">Load</Button>
        </Form>
      </div>
    );
  }

  private load = () => {
    const text = lf(this.input);
    // take out the header (if one exists).
    // take out the footer (if one exists).
    const files = splitPerFile(text);

    this.props.onDone(files);
  }

  private handleChange = (_: any, { value }: { value: string}) => { // TODO: how do I write this type???
    this.input = value;
  }
}
