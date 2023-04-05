import { Configuration, OpenAIApi } from "openai";

async function Complete(setText, textUpdate) {
  document.body.style.cursor = "wait";

  let initText = localStorage.getItem("NoteText");

  const configuration = new Configuration({
    apiKey: settings.openAiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: initText,
    max_tokens: 1000,
    temperature: 1,
    top_p: 1,
    n: 1,
    stream: false,
    logprobs: null,
  });

  let totalText = initText + response.data.choices[0].text;

  localStorage.setItem("NoteText", totalText);
  setText(totalText);

  if (settings.CollabEdit === true) {
    textUpdate(totalText, true);
  }

  document.body.style.cursor = "default";
}

export { Complete };
