import * as React from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import { lf } from 'utils';
import { Context } from './home';

// type Props = {
//   onDone: (files: string[]) => void,
// };

export class InputForm extends React.Component {
	// TODO: remove mockup
	private input = `............................
diff --git 111111111
aaaaaaaaaaaaa
bbbbbbbbbbbb
ccccccccccccc
ddddddddddddd
eeeeeeeeeeeee
ffffffffffff
diff --git
gggggggggggggggggggg
hhhhhhhhhhhhhhhhhhh
iiiiiiiiiiiiiiiiiiiiiiiiiiii
gggggggggggggggggggg
hhhhhhhhhhhhhhhhhhh
iiiiiiiiiiiiiiiiiiiiiiiiiiii
gggggggggggggggggggg
hhhhhhhhhhhhhhhhhhh
iiiiiiiiiiiiiiiiiiiiiiiiiiii
jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
kkkkkkkkkkkkkkkkkkkk
diff --git
llllllllllllllllllllllllllllllllllllllll
mmmmmmmmmmmmmmmmmm
nnnnnnnnnnnnnnnnn
ooooooooooooo
ppppppppppppp
diff --git
------------------`;

	public render() {

		return (
			<div>
				<h2>Original input</h2>
				<Context.Consumer>
					{({ changeInput }) => (
						<Form onSubmit={() => this.load(changeInput)}>
							<Form.Field>
								<TextArea onChange={this.handleChange} rows={30}/>
							</Form.Field>
							<Button type="submit">Load</Button>
						</Form>
					)}
				</Context.Consumer>
			</div>
		);
	}

	private load = (changeInput: any) => {
		const text = lf(this.input);
		// take out the header (if one exists).
		// take out the footer (if one exists).
		// const files = splitPerFile(text);

		// this.props.onDone(files);
		changeInput(text);
	}

	private handleChange = (_: any, { value }: { value: string}) => { // TODO: how do I write this type???
		this.input = value;
	}
}
