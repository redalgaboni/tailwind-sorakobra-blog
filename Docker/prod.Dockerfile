# Use a specific Node.js version as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Build the application
RUN npm run build

# Expose the port on which your app will run
#EXPOSE 3000

# Command to run the application
#CMD ["npm", "start"]
