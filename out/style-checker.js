"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("langchain/prompts");
const config_1 = require("./config");
const error_checker_1 = require("./error-checker");
async function StyleChecker(logicalParticles) {
    const template = "Review the following code and re-write it to Google Style Guides standards and formatting: {LogicalParticle}. Remove unnessesary spacing and add comments on section on which you made changes. If there are no changes and '#no changes' comment to the line";
    const propmt = new prompts_1.PromptTemplate({
        template: template,
        inputVariables: ["LogicalParticle"]
    });
    for (let i = 0; i < Object.keys(logicalParticles).length; i++) {
        const formatprompt = await propmt.format({ LogicalParticle: `${logicalParticles[i]}` });
        const res = await config_1.model.call(formatprompt);
        (0, error_checker_1.default)(res);
    }
    Object.keys(logicalParticles).length;
}
exports.default = StyleChecker;
//# sourceMappingURL=style-checker.js.map