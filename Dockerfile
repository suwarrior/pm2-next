# Start from the official Node.js 20 base image
FROM node:20-alpine

# Install PM2 globally
RUN npm install -g pm2

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Next.js application
RUN npm run build

# Install curl for debugging
RUN apk --no-cache add curl

# Expose the listening port
EXPOSE 3000

# Run PM2 command from package.json
CMD ["npm", "run", "pm2"]