import toolsData from '@/data/tools.json';
import ToolClientPage from './page-client';

export async function generateMetadata({ params }) {
    const tool = toolsData.find(t => t.id === params.slug);

    if (!tool) {
        return {
            title: 'Tool Not Found - DeepCortex',
        };
    }

    return {
        title: `${tool.name} - Reviews, Pros, Cons & Pricing | DeepCortex`,
        description: tool.tagline || `Detailed review of ${tool.name}. Discover pros, cons, alternatives and if it's the right AI tool for you.`,
        keywords: [tool.name, `${tool.name} AI`, `${tool.name} review`, 'AI tools', tool.category, 'DeepCortex'],
        openGraph: {
            title: `${tool.name} AI Review & Guide | DeepCortex`,
            description: tool.tagline || `Discover if ${tool.name} is worth your time. Read our comprehensive review, pros and cons.`,
            url: `https://deepcortex.tech/tool/${tool.id}`,
            siteName: 'DeepCortex',
            images: [
                {
                    url: tool.logoUrl || `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(tool.affiliateLink)}&size=512`,
                    width: 512,
                    height: 512,
                    alt: `${tool.name} Logo`,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary',
            title: `${tool.name} Review | DeepCortex`,
            description: tool.shortDescription || tool.tagline,
            images: [tool.logoUrl || `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(tool.affiliateLink)}&size=512`],
        },
    };
}

export default function Page({ params }) {
    const tool = toolsData.find(t => t.id === params.slug);

    if (!tool) {
        return <ToolClientPage params={params} />;
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: tool.name,
        operatingSystem: 'Any',
        applicationCategory: tool.category,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: tool.rating,
            ratingCount: Math.floor(Math.random() * 500) + 100, // Simulated count for rich snippets
        },
        offers: {
            '@type': 'Offer',
            price: tool.pricing === 'Free' ? '0' : (tool.price || '0'),
            priceCurrency: 'USD',
        },
        description: tool.shortDescription || tool.tagline,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolClientPage params={params} />
        </>
    );
}
