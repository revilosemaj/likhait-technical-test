FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies — delete the lockfile so npm resolves platform-specific
# optional deps (e.g. @rollup/rollup-linux-arm64-musl) for the build platform
RUN rm -f package-lock.json && npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]