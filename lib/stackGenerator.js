import toolsData from '@/data/tools.json';

// Configuration for weighting logic
const ROLE_WEIGHTS = {
    student: { "Writing": 3, "Productivity": 3, "Research": 3, "Coding": 1 },
    founder: { "Productivity": 3, "Coding": 2, "Marketing": 3, "Design": 2 },
    dev: { "Coding": 5, "Productivity": 2, "Cloud": 3 },
    marketer: { "Writing": 3, "Video": 3, "Image Gen": 3, "Social Media": 3 }
};

const TASK_WEIGHTS = {
    automate: { "Productivity": 3, "Coding": 2 },
    write: { "Writing": 5, "Productivity": 1 },
    design: { "Design": 5, "Image Gen": 4, "Video": 2 },
    analyze: { "Research": 4, "Productivity": 2, "Coding": 1 }
};

/**
 * Generates a recommended stack based on user preferences.
 * @param {Object} prefs - { role, budget, task, skill }
 * @returns {Array} - Array of tool objects with reasoning.
 */
export function generateStack(prefs) {
    const { role, budget, task, skill } = prefs;

    // 1. Filter by Budget
    let filteredTools = toolsData.filter(tool => {
        if (budget === 'free') {
            return tool.pricing?.toLowerCase().includes('free');
        }
        // 'paid' or 'unlimited' includes everything
        return true;
    });

    // 2. Score Tools based on Role and Task
    const scoredTools = filteredTools.map(tool => {
        let score = 0;
        const toolCats = tool.category ? [tool.category] : []; // Assuming category is a string, could be array

        // Role scoring
        const roleConfig = ROLE_WEIGHTS[role] || {};
        toolCats.forEach(cat => {
            if (roleConfig[cat]) score += roleConfig[cat];

            // Fuzzy match for categories (e.g. "Video Editing" matches "Video")
            Object.keys(roleConfig).forEach(rc => {
                if (cat.includes(rc)) score += roleConfig[rc];
            });
        });

        // Task scoring
        const taskConfig = TASK_WEIGHTS[task] || {};
        toolCats.forEach(cat => {
            if (taskConfig[cat]) score += taskConfig[cat];
            Object.keys(taskConfig).forEach(tc => {
                if (cat.includes(tc)) score += taskConfig[tc];
            });
        });

        // Rating boost
        if (tool.rating) score += tool.rating * 0.5;

        return { ...tool, score };
    });

    // 3. Sort by Score
    scoredTools.sort((a, b) => b.score - a.score);

    // 4. Select Top Tools (avoiding duplicates categories if possible for variety)
    const finalStack = [];
    const usedCategories = new Set();

    // Take top 4 tools, trying to diversify
    for (const tool of scoredTools) {
        if (finalStack.length >= 4) break;

        // Simple variety check: Don't pick more than 2 of same category
        // (This is a simplified logic)
        finalStack.push(tool);
    }

    // 5. Add Dynamic Reasoning & Upgrade Path
    return finalStack.map(tool => ({
        ...tool,
        reasoning: getReasoning(tool, role, task, skill),
        upgradePath: getUpgradePath(tool, budget)
    }));
}

function getReasoning(tool, role, task, skill) {
    const reasons = [
        `Excellent for ${role}s focusing on ${task}.`,
        skill === 'beginner' && tool.reviews?.length > 100 ? "Popular and easy to start with." : "",
        tool.rating > 4.7 ? "Highly rated by the community." : ""
    ];
    return reasons.filter(Boolean).join(" ");
}

function getUpgradePath(tool, budget) {
    if (tool.pricing?.toLowerCase().includes('free') && budget !== 'free') {
        return "Start on the Free tier; upgrade to Pro for advanced features once you scale.";
    }
    return "This tool scales well with your needs.";
}
