# Use Node.js official image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]

