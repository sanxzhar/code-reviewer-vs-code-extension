"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("langchain/llms/openai");
const prompts_1 = require("langchain/prompts");
async function ProsChecker(code) {
    const model = new openai_1.OpenAI({ openAIApiKey: "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", temperature: 0 });
    const template = "divide following inputs into logical parts and return them as a json \n{code}";
    const prompt = new prompts_1.PromptTemplate({
        template: template,
        inputVariables: ["code"],
    });
    const formatprompt = await prompt.format({ code: `${code}` });
    const res = await model.call(formatprompt);
    console.log(res);
}
exports.default = ProsChecker;
//# sourceMappingURL=pros-checker.js.map