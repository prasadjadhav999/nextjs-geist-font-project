#!/bin/bash

# Create app directory in root if it doesn't exist
mkdir -p app

# Copy contents from src/app to root app directory
cp -r src/app/* app/

# Copy other necessary directories
cp -r src/components .
cp -r src/hooks .
cp -r src/lib .
cp -r src/models .
cp -r src/middleware.ts .

echo "Project structure prepared for build"
