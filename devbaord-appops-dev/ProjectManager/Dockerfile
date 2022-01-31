FROM openjdk:8u252-slim

EXPOSE 52152

COPY env-config /app/env-config

COPY ProjectManager.jar /app

COPY Dockerfile /app/Dockerfile

COPY webapp /app/webapp

WORKDIR /app/

CMD ["java","-Xdebug","-Xrunjdwp:transport=dt_socket,address=52152,server=y,suspend=n", "-jar", "ProjectManager.jar", "--deployment.mode=STANDALONE"]