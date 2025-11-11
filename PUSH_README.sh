#!/bin/bash

# Script to push your GitHub profile README
# Run this script to complete the upload

echo "🚀 Pushing GitHub Profile README"
echo "================================="
echo ""

# Navigate to the repository
cd /tmp/manmohan659 || {
    echo "Repository not found. Let me set it up again..."
    cd /tmp
    rm -rf manmohan659
    git clone https://github.com/manmohan659/manmohan659.git
    cd manmohan659
    
    # Copy the README
    cp /workspace/GITHUB_PROFILE_README.md ./README.md
    
    # Commit
    git add README.md
    git commit -m "Update GitHub profile README with professional layout

- Added AI/ML expertise highlights
- Featured current work at Lender Toolkit
- Showcased projects: ChatDB, Drone AI, DALL Concept
- Added tech stack and experience summary
- Included research publication link
- Added social badges and profile counter"
}

echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your GitHub profile README is live!"
    echo "🎉 Visit: https://github.com/manmohan659"
else
    echo ""
    echo "❌ Push failed. You may need to authenticate."
    echo ""
    echo "Try one of these methods:"
    echo ""
    echo "1. Using GitHub CLI:"
    echo "   gh auth login"
    echo "   Then run this script again"
    echo ""
    echo "2. Using Personal Access Token:"
    echo "   git remote set-url origin https://YOUR_TOKEN@github.com/manmohan659/manmohan659.git"
    echo "   git push origin main"
    echo ""
    echo "3. Using SSH:"
    echo "   git remote set-url origin git@github.com:manmohan659/manmohan659.git"
    echo "   git push origin main"
fi
