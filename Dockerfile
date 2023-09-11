FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine as run
WORKDIR /app
COPY --from=build /app/package*.json /app/index.js /app/note_validator.js /app/core.js /usr/src/app/
COPY --from=build /app/dist/ /usr/src/app/dist/
RUN npm install --omit=dev
CMD npm run start
EXPOSE 80
