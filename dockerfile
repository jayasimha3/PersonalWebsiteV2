FROM alpine:latest
RUN apk add --update nodejs npm
RUN npm install -g serve
COPY ./build ./app
EXPOSE 3000
CMD ["serve", "-s", "app"]