#!/bin/bash

# Abhishek ekka's Portfolio - Vercel Deployment Script
# This script helps you deploy your portfolio to Vercel

echo "🚀 Abhishek ekka's Portfolio - Vercel Deployment"
echo "=================================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Initializing now..."
    git init
    git config user.email "originalredheir@gmail.com"
    git config user.name "Abhishek ekka"
    git add .
    git commit -m "Initial portfolio commit"
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "📋 Deployment Options:"
echo "1. Deploy via GitHub (Recommended)"
echo "2. Deploy via Vercel CLI"
echo ""
read -p "Choose an option (1 or 2): " choice

if [ "$choice" = "1" ]; then
    echo ""
    echo "🔗 Setting up GitHub..."
    read -p "Enter your GitHub username: " github_user
    read -p "Enter your repository name: " repo_name

    echo ""
    echo "📤 Pushing to GitHub..."
    git remote remove origin 2>/dev/null || true
    git remote add origin "https://github.com/$github_user/$repo_name.git"
    git branch -M main
    git push -u origin main

    echo ""
    echo "✅ GitHub push complete!"
    echo "🌐 Next steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository: $github_user/$repo_name"
    echo "5. Click 'Deploy' and enjoy your live portfolio!"
    echo ""
    echo "📚 Your portfolio will be live at: https://$repo_name.vercel.app"

elif [ "$choice" = "2" ]; then
    echo ""
    echo "🚀 Deploying with Vercel CLI..."
    vercel

else
    echo "❌ Invalid option. Please choose 1 or 2."
    exit 1
fi

echo ""
echo "✨ Deployment initiated!"
echo "📖 For more details, check GET_STARTED.md"
