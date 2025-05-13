# Use a specific Node.js version as the base image
FROM node:20

# Install Corepack and enable it
RUN corepack enable

# Create a non-root user and set appropriate permissions
RUN groupadd -g 1001 sorakobra && \
    useradd -u 1001 -g sorakobra -m sorakobra && \
    mkdir -p /app && \
    chown -R sorakobra:sorakobra /app

# Set the working directory
WORKDIR /app

# Copy package files first to leverage caching
COPY --chown=sorakobra:sorakobra package*.json ./

# Install production dependencies first (without husky)
RUN npm install --omit=dev --legacy-peer-deps --ignore-scripts

# Install dev dependencies (for build tools)
RUN npm install --legacy-peer-deps && \
    npm run prepare

# Copy the entire application code
COPY --chown=sorakobra:sorakobra . .

# Build the application
RUN mkdir -p .next && \
    chown -R sorakobra:sorakobra .next && \
    chmod -R 775 .next && \
    npm run build