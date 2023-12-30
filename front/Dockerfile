FROM node:18-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN yarn global add ionic
RUN yarn
COPY ./ /app/
RUN yarn build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build/ /usr/share/nginx/html/
EXPOSE 80