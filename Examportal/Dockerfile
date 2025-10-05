# Stage 1: Build the Angular Application
# Using a Node 16-compatible image (e.g., node:16-alpine) 
# as your local Node.js version is 16.20.2.
FROM node:16-alpine as build
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and run the production build
COPY . .

# Replace 'YOUR-APP-NAME' with the actual folder name inside your 'dist/' directory
# Check your angular.json file if you are unsure of the output path.
RUN npm run build -- --configuration=production

# Stage 2: Serve the application with NGINX (Minimal and Secure)
FROM nginx:alpine
# Cloud Run listens on $PORT, which is often 8080
ENV PORT 8080
EXPOSE 8080

# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular files from the 'build' stage into the NGINX serving directory
# IMPORTANT: Use the same 'YOUR-APP-NAME' as above
COPY --from=build /app/dist/examportal /usr/share/nginx/html 

# Default command to start NGINX
CMD ["nginx", "-g", "daemon off;"]