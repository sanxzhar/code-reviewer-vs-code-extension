"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const memory_1 = require("langchain/memory");
const chains_1 = require("langchain/chains");
async function ErrorChecker(LogicalParticle) {
    const memory = new memory_1.BufferMemory();
    const chain = new chains_1.ConversationChain({ llm: config_1.model, memory: memory });
    const initRecommendation = await chain.call({ input: `Review your provided code ${LogicalParticle} for any logical or security concerns and provide a list of recommendations.` });
    const finalRecommendation = await chain.call({ input: `Review your above recommendations. Tell me why you were wrong and if any recommendations were overlooked or incorrectly added?` });
    const finalCode = await chain.call({ input: `Re-write the ${LogicalParticle} based off your review and recommendations. Return only code` });
    console.log(finalCode.response);
}
exports.default = ErrorChecker;
//# sourceMappingURL=error-checker.js.map