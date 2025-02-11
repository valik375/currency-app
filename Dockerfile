# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Fix permissions issue (sometimes necessary for Vue builds)
RUN chmod -R 777 /app/node_modules

# Set environment variable for production
ENV NODE_ENV=production

# Build the Vue.js app
RUN npm run build

# Expose port 8080 (default Vue.js port)
EXPOSE 8080

# Start the application
CMD ["npm", "run", "serve"]