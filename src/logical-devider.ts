import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
require('dotenv').config();

async function LogicalDivider(code: any){
    console.log(process)
    console.log(process.env.OPENAI_API_KEY)

    const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY , temperature: 0 });

    const template = "divide following inputs into logical parts and number them: \n{code}";
    const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["code"],
    });


    const formatprompt = await prompt.format({code: `${code}`})
    const res = await model.call(formatprompt);
    console.log(res)   
}

export default LogicalDivider;
