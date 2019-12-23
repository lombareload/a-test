FROM node:erbium-alpine as build
ADD front-end /app
WORKDIR /app
CMD yarn && yarn build

FROM nginx:1.17.6-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
