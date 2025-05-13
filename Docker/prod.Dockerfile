FROM node:20

# Create app directory and set permissions
RUN mkdir -p /app/public && \
    chown -R node:node /app

WORKDIR /app

# Copy package files first for better caching
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy application code
COPY --chown=node:node . .

# Build application (with explicit public directory creation)
RUN mkdir -p public && \
    npm run build

# Verify build artifacts exist
RUN ls -la .next && \
    [ -f ".next/BUILD_ID" ] || (echo "Missing build artifacts!" && exit 1)

# Runtime configuration
USER node
EXPOSE 3000
CMD ["npm", "start"]