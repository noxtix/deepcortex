const fs = require('fs');
const path = require('path');

// Helper to generate a random ID
const generateId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const TOOLS_FILE = path.join(__dirname, '../data/tools.json');
const POSTS_DIR = path.join(__dirname, '../content/posts');

// Helper to get today's date in YYYY-MM-DD format
const getFormattedDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

function generateTool() {
    const randomSuffix = Math.floor(Math.random() * 10000);
    const toolName = `Automated Tool ${randomSuffix}`;
    const toolId = generateId(toolName);

    return {
        id: toolId,
        name: toolName,
        shortDescription: `A dynamically added placeholder tool generated on ${getFormattedDate()}.`,
        description: `This is an automatically generated tool placeholder. In the future, this can be replaced by an AI API call to generate real tool descriptions.`,
        url: "https://example.com",
        category: "Productivity",
        pricing: "Free",
        rating: 4.5,
        reviewCount: 10,
        logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        features: ["Automated", "Placeholder", "Weekly Generation"],
        playbook: {
            timeBreakdown: [
                {
                    time: "0-5m",
                    title: "Setup",
                    step: "Understand this is a generated tool."
                }
            ],
            heroPrompt: {
                title: "Example Prompt",
                prompt: "Tell me about this tool.",
                explanation: "Just an example."
            },
            commonMistakes: [
                "Thinking this is a real tool."
            ],
            shortcuts: [
                {
                    keys: "Cmd+Z",
                    desc: "Undo expectations"
                }
            ]
        }
    };
}

function generateBlogPost(toolName) {
    const date = getFormattedDate();
    const slug = `tool-of-the-week-${date}`;
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

    const content = `---
title: "Tool of the Week: ${toolName}"
date: "${date}"
excerpt: "We explore the newly added ${toolName} and how it can improve your workflow."
author: "Automated Bot"
category: "Tools"
tags: ["automation", "tools", "weekly"]
---

# Introducing ${toolName}

This post was automatically generated as part of our weekly content automation.

## What is ${toolName}?

It's a placeholder for an awesome tool we discovered this week.

Stay tuned for real AI-generated or curated content in the future!
`;

    return { filePath, content };
}

function main() {
    try {
        console.log('Starting content generation...');

        // 1. Generate and append a tool
        const newTool = generateTool();
        let toolsData = [];
        if (fs.existsSync(TOOLS_FILE)) {
            const rawData = fs.readFileSync(TOOLS_FILE, 'utf-8');
            toolsData = JSON.parse(rawData);
        }

        toolsData.push(newTool);

        fs.writeFileSync(TOOLS_FILE, JSON.stringify(toolsData, null, 4), 'utf-8');
        console.log(`Added new tool: ${newTool.name} to data/tools.json`);

        // 2. Generate and save a blog post
        const newPost = generateBlogPost(newTool.name);

        // Ensure posts directory exists
        if (!fs.existsSync(POSTS_DIR)) {
            fs.mkdirSync(POSTS_DIR, { recursive: true });
        }

        fs.writeFileSync(newPost.filePath, newPost.content, 'utf-8');
        console.log(`Created new blog post: ${newPost.filePath}`);

        console.log('Content generation completed successfully.');

    } catch (error) {
        console.error('Error during content generation:', error);
        process.exit(1);
    }
}

main();
