"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");
const logical_devider_1 = require("./logical-devider");
function splitToFiles(fileName, fileContent) {
    (0, logical_devider_1.default)(fileName, fileContent);
}
function copyAllFilesContent(folderPath) {
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
                splitToFiles(file, data);
            });
        });
    });
}
function activate(context) {
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
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map