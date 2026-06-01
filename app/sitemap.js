import toolsData from '@/data/tools.json';
import { stacks } from '@/data/stacks';
import { getPostSlugs } from '@/lib/mdx';

export default function sitemap() {
    const baseUrl = 'https://deepcortex.tech';

    const toolUrls = toolsData.map((tool) => ({
        url: `${baseUrl}/tool/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const stackUrls = stacks.map((stack) => ({
        url: `${baseUrl}/stacks/${stack.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    const blogSlugs = getPostSlugs();
    const blogUrls = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
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
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/stacks`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...toolUrls,
        ...stackUrls,
        ...blogUrls,
    ];
}
