# App Build Step
FROM node:10-alpine AS build-env
##
RUN apk add util-linux tar
RUN npm install -g gatsby-cli
##
ARG ENVIRONMENT=Development
ARG BINDING_IP="0.0.0.0"
ARG BINDING_PORT="9000"
##  
ENV ENVIRONMENT=${ENVIRONMENT}
ENV BINDING_IP=${BINDING_IP}
ENV BINDING_PORT=${BINDING_PORT}
ENV NO_COLOR=1
##
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
RUN gatsby clean
RUN gatsby build
EXPOSE 9000
ENTRYPOINT [ "/bin/sh"]
CMD ["-c","gatsby serve --no-color --host ${BINDING_IP} --port ${BINDING_PORT}"]
##
