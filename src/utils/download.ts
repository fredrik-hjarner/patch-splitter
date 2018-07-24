import { saveAs } from 'file-saver';

export const downloadText = (text: string, asFilename: string) => {
	const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
	saveAs(blob, asFilename);
};
