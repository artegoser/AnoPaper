<!--
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
 -->

![Anopaper logo with text](docs/imgs/Logo%20With%20Name.png)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fartegoser%2FAnoPaper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fartegoser%2FAnoPaper?ref=badge_shield)

**AnoPaper is a notes service** that allows you to save notes locally, complete notes using OpenAI API, collaborate on notes with other users and more. The notes supports markdown, MathJax, and GFM syntax.

Running on: <https://anopaper.artegoser.ru/>

## Features

- Save notes locally
- Publish one-time notes (when read, the note is deleted from the server and saved locally)
- Use OpenAI API to complete notes (with your own api key)
- Collaborate with other users on notes
- Synchronize data across devices
- Support markdown, MathJax, and GFM syntax

See [changelog](/changelog.md) for more information

## Local installation

- Setup repository

```bash
git clone https://github.com/artegoser/AnoPaper.git
npm install
npm run build
```

- Look at .env.example and create your .env file

- Start server

```bash
npm start
```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please create a pull request.

## License

This project is licensed under the GNU General Public License v3.0. See the LICENSE file for more information.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fartegoser%2FAnoPaper.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fartegoser%2FAnoPaper?ref=badge_large)
