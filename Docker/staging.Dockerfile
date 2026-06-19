FROM node:20 as builder
# Install Corepack
RUN corepack enable

# Create non-root user
RUN groupadd -g 1001 sorakobra && \
    useradd -u 1001 -g sorakobra -m sorakobra && \
    mkdir -p /app && \
    chown -R sorakobra:sorakobra /app

WORKDIR /app

# Copy package.json and install dependencies
COPY --chown=sorakobra:sorakobra package*.json ./
USER sorakobra
RUN npm install react@19.2.3 react-dom@19.2.3 next@15.1.11 --legacy-peer-deps

# Run prepare scripts if needed
RUN npm run prepare

# Copy source code and build the app
COPY --chown=sorakobra:sorakobra . .
RUN mkdir -p .next public && \
    chown -R sorakobra:sorakobra .next public && \
    chmod -R 775 .next public && \
    npm run build

FROM node:20-slim

# Create non-root user
RUN groupadd -g 1001 sorakobra && \
    useradd -u 1001 -g sorakobra -m sorakobra && \
    mkdir -p /app && \
    chown -R sorakobra:sorakobra /app

WORKDIR /app

# copy only package*.json files
COPY --chown=sorakobra:sorakobra package*.json ./
#COPY --from=builder --chown=sorakobra:sorakobra /app ./

# Reinstall both prod and dev dependencies (for staging)
USER sorakobra
RUN npm install react@19.2.3 react-dom@19.2.3 next@15.1.11 --legacy-peer-deps