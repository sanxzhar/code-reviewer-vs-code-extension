import { PromptTemplate } from "langchain/prompts";
import { model } from './config';
import ErrorChecker from "./error-checker";

async function StyleChecker(logicalParticles: any) {

    const template = "Review the following code and re-write it to Google Style Guides standards and formatting: {LogicalParticle}. Remove unnessesary spacing and add comments on section on which you made changes. If there are no changes and '#no changes' comment to the line"

    const propmt = new PromptTemplate({
        template: template,
        inputVariables: ["LogicalParticle"]
    })

    for (let i = 0; i < Object.keys(logicalParticles).length; i++){
        const formatprompt = await propmt.format({LogicalParticle: `${logicalParticles[i]}`})
        const res = await model.call(formatprompt)
        ErrorChecker(res)
    }

    Object.keys(logicalParticles).length
}

export default StyleChecker;