FROM node:20 as builder

# Create non-root user
RUN groupadd -g 1001 sorakobra && \
    useradd -u 1001 -g sorakobra -m sorakobra && \
    mkdir -p /app && \
    chown -R sorakobra:sorakobra /app

WORKDIR /app

# Copy package.json and install dependencies
COPY --chown=sorakobra:sorakobra package*.json ./
USER sorakobra
RUN npm install

# Run prepare scripts if needed
RUN npm run prepare

# Copy source code and build the app
COPY --chown=sorakobra:sorakobra . .
RUN mkdir -p .next public && \
    chown -R sorakobra:sorakobra .next public && \
    chmod -R 775 .next public && \
    npm run build

FROM node:20-slim

ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user
RUN groupadd -g 1001 sorakobra && \
    useradd -u 1001 -g sorakobra -m sorakobra && \
    mkdir -p /app && \
    chown -R sorakobra:sorakobra /app

WORKDIR /app

# Only copy necessary files
COPY --chown=sorakobra:sorakobra package*.json ./

COPY --from=builder --chown=sorakobra:sorakobra /app/.next ./.next
COPY --from=builder --chown=sorakobra:sorakobra /app/public ./public
COPY --from=builder --chown=sorakobra:sorakobra /app/next.config.js ./
COPY --from=builder --chown=sorakobra:sorakobra /app/node_modules ./node_modules

USER sorakobra
RUN npm install --omit=dev --ignore-scripts
