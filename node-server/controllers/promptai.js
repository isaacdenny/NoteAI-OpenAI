import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const autoComplete = async (req, res) => {
  try {
    console.log(req.body.prompt);
    const response = await openai.createCompletion({
      model: "text-davinci-003", 
      prompt: req.body.prompt,
      suffix: "",
      temperature: 0.7,
      max_tokens: 75,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response.data.choices[0].text);
    res.status(201).json({ message: response.data.choices[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
