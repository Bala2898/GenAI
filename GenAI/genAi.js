const { GoogleGenerativeAI } = require("@google/generative-ai");
const envVariable = require("dotenv").config();
const ai = new GoogleGenerativeAI(envVariable.parsed.GOOGLE_API_KEY);
const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
async function generate(text) {
    try {

        const result = await model.generateContent(text);
        const response = result.response.candidates[0].content.parts[0].text
        console.log(`Result: ${response}`);
        return response;

    } catch (error) {
        console.log(`generate function ${error}`)
        return error;
    }
}
const prompt="Hi Hello";
generate(prompt);