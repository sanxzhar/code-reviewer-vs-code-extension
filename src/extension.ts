
import * as vscode from 'vscode';
import * as fs from 'fs';
import LogicalDivider from './logical-devider';

function copyAllFilesContent(folderPath: string) {
	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(err);
			return;
		}

		files.forEach((file) => {
			const filePath = `${folderPath}/${file}`;
			fs.readFile(filePath, 'utf8', (err, data) => {
				if (err) {
					console.error(err);
					return;
				}
					LogicalDivider(data)
			});
		});
	});
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('codereviewxpert.helloWorld', () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;

        if (workspaceFolders) {
            for (const workspaceFolder of workspaceFolders) {
                const folderPath = workspaceFolder.uri.fsPath;
                copyAllFilesContent(folderPath);
            }
        }

		vscode.window.showInformationMessage('Done!');
	});
	

	context.subscriptions.push(disposable);
}
export function deactivate() {}
