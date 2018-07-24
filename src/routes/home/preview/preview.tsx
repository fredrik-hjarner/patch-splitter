import * as React from 'react';
import { Context, FileType } from 'routes/home/home';
import { Form, Icon } from 'semantic-ui-react';
import { downloadZip } from 'utils';

type Props = {
	data: string,
};

export class Preview extends React.Component<Props> {
	public render() {
		const { data } = this.props;

		return (
			<Context.Consumer>
				{({ workInProgress }) => (
					<div>
						<h2>Preview result</h2>
						<Form>
							<Form.Button disabled primary><Icon name="download"/> as one file</Form.Button>
							<Form.Button primary onClick={() => this.downloadZip(workInProgress)}>
								<Icon name="download"/> as separate files (in zip)
							</Form.Button>
							<Form.Button disabled color="green">Validate</Form.Button>
						</Form>
						{this.renderText(data)}
					</div>
				)}
			</Context.Consumer>
		);
	}

	private renderText = (text: string) => <pre style={this.createStyle()}>{text}</pre>;

	private createStyle = () => ({
		margin: 0,
		padding: 0,
	})

	private downloadZip = (workInProgress: FileType[]) => {
		const files = workInProgress
			.filter(file => file.enabled)
			.map(file => file.text)
			.filter(text => { // Well... stupid way to remove the patch header
				if (text.startsWith('diff')) { return true; }
				console.log('Warning: File did not start with "diff".'); // tslint:disable-line
				return false;
			});

		// TODO: this is duplicated in output/actions.tsx
		const data = files.map(text => {
			const firstLine = text.split('\n', 1)[0];
			const path = firstLine.split(' ')[2];
			const filename = path.substring(2).replace(/\//g, '_');
			return { filename, text };
		});

		downloadZip(data, 'patch-files');
	}
}
