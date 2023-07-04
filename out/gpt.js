"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("langchain/llms/openai");
const prompts_1 = require("langchain/prompts");
// dotenv.config();
async function LogicalDevider(code) {
    // console.log(process.env.OPENAI_API_KEY5)
    const model = new openai_1.OpenAI({ openAIApiKey: "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", temperature: 0 });
    const template = "divide following inputs into logical parts and number them: \n{code}";
    const prompt = new prompts_1.PromptTemplate({
        template: template,
        inputVariables: ["code"],
    });
    const formatprompt = await prompt.format({ code: `${code}` });
    const res = await model.call(formatprompt);
    console.log(res);
}
exports.default = LogicalDevider;
// const res = await prompt.format({ product: "colorful socks" });
// console.log(res);
// const res = await model.call(
//     "What would be a good company name a company that makes colorful socks?"
//   );
//   console.log(res);
//# sourceMappingURL=gpt.js.map