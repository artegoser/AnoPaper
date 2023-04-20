# AnoPaper - Notes service

AnoPaper is a notes service that allows you to save notes locally, complete notes using OpenAI API, collaborate on notes with other users and more. The notes supports markdown, MathJax, and GFM syntax.

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

- Create a .env file in the root directory of the project with the following environment variables:

  - PORT: The port on which the server will listen.
  - KEY: Secret key to encrypt notes on the server

## Contributing

Contributions are welcome! If you would like to contribute to this project, please create a pull request.

## License

This project is licensed under the GNU General Public License v3.0. See the LICENSE file for more information.
