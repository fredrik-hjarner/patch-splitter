import * as React from 'react';
import { CSSProperties } from 'react';
import { randomBgColor } from 'utils';
import { Actions } from './actions';

type StyleMap = {
	[key in 'columns' ]: CSSProperties
};

const styles: StyleMap = {
	columns: {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
	},
};

type Props = {
	file: string,
};

export class File extends React.Component<Props> {
	public render() {
		return (
			<div style={styles.columns}>
				<Actions file={this.props.file}/>
				{this.renderText()}
			</div>
		);
	}

	private renderText = () => <pre style={this.createStyle()}>{this.props.file}</pre>;

	private createStyle = () => ({
		...randomBgColor(),
		height: '100%',
		margin: 0,
		padding: 0,
	})
}
