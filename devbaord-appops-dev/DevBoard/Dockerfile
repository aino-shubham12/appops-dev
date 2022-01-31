FROM openjdk:8u252-slim

EXPOSE 52150

COPY env-config /app/env-config

COPY DevBoard.jar /app

COPY Dockerfile /app/Dockerfile

COPY webapp /app/webapp

WORKDIR /app/

CMD ["java","-Xdebug","-Xrunjdwp:transport=dt_socket,address=52150,server=y,suspend=n", "-jar", "DevBoard.jar", "--deployment.mode=STANDALONE"]