# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (ensure clean install)
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Expose port 5173 (Vite default)
EXPOSE 5173

# Build the Vite app
RUN npm run build

# Use a lightweight server to serve the built files
CMD ["npm", "run", "serve"]