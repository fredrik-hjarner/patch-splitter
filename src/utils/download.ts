import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';

type File = {
	filename: string,
	text: string,
};

export const downloadText = (text: string, asFilename: string) => {
	const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
	saveAs(blob, asFilename);
};

export const downloadZip = (textfiles: File[], filename: string) => {
	const zip = new JSZip();

	textfiles.forEach(f => zip.file(f.filename, f.text));

	zip.generateAsync({type: 'blob'})
		.then((content: any) => saveAs(content, filename));
};
