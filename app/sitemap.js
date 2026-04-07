import toolsData from '@/data/tools.json';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap() {
    const baseUrl = 'https://deepcortex.tech';

    const toolUrls = toolsData.map((tool) => ({
        url: `${baseUrl}/tool/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const posts = getAllPosts(['slug', 'date']);
    const postUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
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
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...toolUrls,
        ...postUrls,
    ];
}
