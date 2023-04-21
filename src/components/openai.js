/*
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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
