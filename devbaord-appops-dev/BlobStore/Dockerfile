FROM openjdk:8u252-slim

EXPOSE 52149

COPY env-config /app/env-config

COPY BlobStore.jar /app

COPY Dockerfile /app/Dockerfile

COPY webapp /app/webapp

WORKDIR /app/

CMD ["java","-Xdebug","-Xrunjdwp:transport=dt_socket,address=52149,server=y,suspend=n", "-jar", "BlobStore.jar", "--deployment.mode=STANDALONE"]