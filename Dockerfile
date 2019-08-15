FROM node:alpine AS building-stage
COPY package.json /scout/package.json
WORKDIR /scout
RUN npm install
COPY . /scout
RUN npm run build

FROM nginx:alpine
LABEL maintainer="Björn Franke"
COPY --from=building-stage /scout/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]