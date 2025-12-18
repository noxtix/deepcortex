import toolsData from '@/data/tools.json';

export default function sitemap() {
    const baseUrl = 'https://deepcortex.tech';

    const toolUrls = toolsData.map((tool) => ({
        url: `${baseUrl}/tool/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...toolUrls,
    ];
}
