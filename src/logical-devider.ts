import { PromptTemplate } from "langchain/prompts";
import { model } from './config';
import StyleChecker from "./style-checker";

function FileContentDivider(fileName:string, res:any){
    let fileNameArray: any = fileName
    fileNameArray = res.split("new part")

    StyleChecker(fileNameArray)
}


async function LogicalDivider(fileName: string, fileContent: any){

    const template = "Divide following code into functions according to programming language features by placing 'new part' phrase between them: {fileContent}. Do not place 'new part' phrase before first particle. \n If there is no code, just responce: {fileName} is clear."
    
    const propmt = new PromptTemplate({
        template: template,
        inputVariables: ["fileContent", "fileName"]
    })
    
    const formatprompt = await propmt.format({fileContent: `${fileContent}`, fileName: `${fileName}`})
    const res = await model.call(formatprompt)

    FileContentDivider(fileName, res)
}

export default LogicalDivider;
