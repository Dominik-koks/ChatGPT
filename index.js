const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-JH7LeXcTY9TeAZyca2wwjkcq",
    apiKey: 
    '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',
});
const openai = new OpenAIApi(configuration);

async function callApi() {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0, 
      });
      console.log(response.data.choices[0].text)
}

callApi()
