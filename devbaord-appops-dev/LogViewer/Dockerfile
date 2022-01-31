FROM openjdk:8u252-slim

EXPOSE 52151

COPY env-config /app/env-config

COPY LogViewer.jar /app

COPY Dockerfile /app/Dockerfile

COPY webapp /app/webapp

WORKDIR /app/

CMD ["java","-Xdebug","-Xrunjdwp:transport=dt_socket,address=52151,server=y,suspend=n", "-jar", "LogViewer.jar", "--deployment.mode=STANDALONE"]