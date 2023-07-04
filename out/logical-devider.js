"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("langchain/prompts");
const config_1 = require("./config");
const style_checker_1 = require("./style-checker");
function FileContentDivider(fileName, res) {
    let fileNameArray = fileName;
    fileNameArray = res.split("new part");
    (0, style_checker_1.default)(fileNameArray);
}
async function LogicalDivider(fileName, fileContent) {
    const template = "Divide following code into functions according to programming language features by placing 'new part' phrase between them: {fileContent}. Do not place 'new part' phrase before first particle. \n If there is no code, just responce: {fileName} is clear.";
    const propmt = new prompts_1.PromptTemplate({
        template: template,
        inputVariables: ["fileContent", "fileName"]
    });
    const formatprompt = await propmt.format({ fileContent: `${fileContent}`, fileName: `${fileName}` });
    const res = await config_1.model.call(formatprompt);
    FileContentDivider(fileName, res);
}
exports.default = LogicalDivider;
//# sourceMappingURL=logical-devider.js.map