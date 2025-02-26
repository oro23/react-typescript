# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies (including npm)
RUN npm install

# Copy the rest of your app’s code
COPY . .

# Expose the app's port (if you're running a web server)
EXPOSE 8085

# Set the command to run your tests (if that's the purpose)
CMD ["npm", "run", "test"]
