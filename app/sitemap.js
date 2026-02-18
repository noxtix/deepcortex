import sitemap from '@/app/sitemap';
import { getTools } from '@/lib/adminUtils';

export default async function sitemapGenerator() {
    const baseUrl = 'https://deepcortex.tech';
    const toolsData = await getTools();

    const toolUrls = toolsData.map((tool) => ({
        url: `${baseUrl}/tool/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Re-use logic from previous sitemap but with dynamic tools
    // Note: We can't import the default export function easily to mix logic, so we redefine
    const blogPosts = ['cursor-vs-copilot', 'top-student-ai-tools'];
    const stacks = [
        { id: "student-success" }, { id: "solo-founder" }, { id: "viral-creator" },
        { id: "academic-researcher" }, { id: "ui-ux-wizard" }, { id: "job-hunter" },
        { id: "faceless-youtube" }, { id: "startup-mvp" }, { id: "newsletter-empire" },
        { id: "deep-work" }
    ];

    const stackUrls = stacks.map((stack) => ({
        url: `${baseUrl}/stacks/${stack.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    const blogUrls = blogPosts.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/stacks`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...toolUrls,
        ...stackUrls,
        ...blogUrls,
    ];
}
