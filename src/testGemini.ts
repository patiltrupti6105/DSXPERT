import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCV_BSx8TbiA3TWG-o3rml6tvoSgfhCXpI"; // Replace with your actual key
const genAI = new GoogleGenerativeAI(API_KEY);

async function testGemini() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        // More relevant prompt
        const result = await model.generateContent("Explain the time complexity of QuickSort.");
        
        console.log("Gemini's Response:", result.response.text());
    } catch (error) {
        console.error("Error:", error);
    }
}

testGemini();
