FROM alpine:latest
RUN apk add --update nodejs npm
RUN npm install -g serve
ENV NODE_ENV=production
COPY ./public ./public
COPY ./.next/standalone ./
COPY ./.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]