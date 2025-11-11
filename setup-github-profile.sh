#!/bin/bash

# GitHub Profile Setup Script
# This script will help you set up your GitHub profile README

set -e

echo "🚀 GitHub Profile README Setup"
echo "================================"
echo ""

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ You're not authenticated with GitHub CLI."
    echo "Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI is ready!"
echo ""

# Get current username
GITHUB_USER=$(gh api user -q .login)
echo "📝 Your GitHub username: $GITHUB_USER"
echo ""

# Create temporary directory
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"

echo "📂 Creating repository structure..."
cp "/workspace/GITHUB_PROFILE_README.md" "./README.md"

# Initialize git
git init -b main
git add README.md
git commit -m "Add GitHub profile README"

echo ""
echo "🌟 Creating GitHub repository: $GITHUB_USER/$GITHUB_USER"

# Try to create repo
if gh repo create "$GITHUB_USER" --public --source=. --remote=origin --push; then
    echo ""
    echo "✅ SUCCESS! Your GitHub profile is live!"
    echo "🎉 Visit: https://github.com/$GITHUB_USER"
else
    echo ""
    echo "⚠️  Automated creation failed. Manual steps:"
    echo "1. Go to: https://github.com/new"
    echo "2. Name the repo exactly: $GITHUB_USER"
    echo "3. Make it public and initialize with a README"
    echo "4. Edit the README and paste content from: GITHUB_PROFILE_README.md"
    echo ""
    echo "Or try: gh repo create $GITHUB_USER --public"
    echo "Then: git remote add origin https://github.com/$GITHUB_USER/$GITHUB_USER.git"
    echo "And: git push -u origin main"
fi

# Cleanup
cd -
rm -rf "$TEMP_DIR"
