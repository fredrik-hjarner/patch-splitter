import * as React from 'react';
import { CSSProperties } from 'react';
import { FileType } from 'routes/home/home';
import { Actions } from 'routes/home/output/actions';
import { randomBgColor } from 'utils';

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
	file: FileType,
};

export class File extends React.Component<Props> {
	public render() {
		return (
			<div style={styles.columns}>
				<Actions file={this.props.file}/>
				<div style={{ overflowX: 'auto', overflowY: 'visible', height: '100%', ...randomBgColor() }}>
					{this.renderText()}
				</div>
			</div>
		);
	}

	private renderText = () => <pre style={this.createStyle()}>{this.props.file.text}</pre>;

	private createStyle = () => ({
		margin: 0,
		padding: 0,
	})
}
