import * as React from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { lf } from "utils";

export class Home extends React.Component {
  private input = "";

  public render() {

    return (
      <div style={{ width: "400px" }}>
        <h2>Patch/diff splitter</h2>
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
    console.log(text);
  }

  private handleChange = (_: any, { value }: { value: string}) => { // TODO: how do I write this type???
    this.input = value;
  }
}
