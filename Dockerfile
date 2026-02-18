# Use Node LTS
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of backend code
COPY backend ./backend

# Expose backend port (change if needed)
EXPOSE 5000

# Start the backend
CMD ["npm", "start", "--", "--host"]