FROM openjdk:8u252-slim

EXPOSE 52148

COPY env-config /app/env-config

COPY AppStore.jar /app

COPY Dockerfile /app/Dockerfile

COPY webapp /app/webapp

WORKDIR /app/

CMD ["java","-Xdebug","-Xrunjdwp:transport=dt_socket,address=52148,server=y,suspend=n", "-jar", "AppStore.jar", "--deployment.mode=STANDALONE"]