# Nginx 버전
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx/conf.d/custom.conf /etc/nginx/conf.d/custom.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]