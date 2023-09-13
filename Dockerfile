FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine as run
WORKDIR /app
COPY --from=build /app/package*.json /app/index.js /app/note_validator.js /app/core.js ./
COPY --from=build /app/dist/ ./dist/
RUN npm install --omit=dev
CMD npm run start
EXPOSE 80
