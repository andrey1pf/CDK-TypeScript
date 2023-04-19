FROM node:12 AS builder

COPY . /app
WORKDIR /app

RUN npm install
RUN npm install typescript
RUN npx tsc

FROM nginx:alpine

COPY --from=builder /app /usr/share/nginx/html
