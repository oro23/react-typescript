# Use a node image to build the project
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Use a lighter image to serve the app
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 8085

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
