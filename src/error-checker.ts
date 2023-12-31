import { model } from "./config";
import { PromptTemplate } from "langchain/prompts";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { HumanChatMessage, AIChatMessage } from "langchain/schema";
import { ConversationChain } from "langchain/chains";

async function ErrorChecker(LogicalParticle:any) {

    const memory = new BufferMemory();
    const chain = new ConversationChain({ llm: model, memory: memory})

    const initRecommendation = await chain.call({ input: `Review your provided code ${LogicalParticle} for any logical or security concerns and provide a list of recommendations.` })
    const finalRecommendation = await chain.call({ input: `Review your above recommendations. Tell me why you were wrong and if any recommendations were overlooked or incorrectly added?` })
    const finalCode = await chain.call({ input: `Re-write the ${LogicalParticle} based off your review and recommendations. Return only code`})

    console.log(finalCode.response)
}

export default ErrorChecker;
