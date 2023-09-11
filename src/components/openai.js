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

import OpenAi from "openai";

async function Complete(text) {
  document.body.style.cursor = "wait";

  let initText = text;

  const configuration = new OpenAi({
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

  document.body.style.cursor = "default";

  return initText + response.data.choices[0].text;
}

export { Complete };
