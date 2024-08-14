# Base image for Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install only the production dependencies
RUN npm ci --only=production

# Copy the application file to the container
COPY . .

# Expose the port that your application will run on
EXPOSE 4000

# Define the command to start your application
CMD ["node", "app.js"]
