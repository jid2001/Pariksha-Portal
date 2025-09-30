# Start with a base image that includes a Java runtime
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the executable JAR file from your local target directory into the container's app directory
# The JAR file is typically generated after running "mvn clean package" or "gradle build"
COPY target/demo-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port that your Spring Boot application runs on (default is 8080)
EXPOSE 8080

# Define the command to run your application when the container starts
ENTRYPOINT ["java", "-jar", "/app/app.jar"]