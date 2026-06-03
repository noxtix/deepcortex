import { notFound } from 'next/navigation';
import toolsData from '@/data/tools.json';
import ToolClientPage from './page-client';

export async function generateMetadata({ params }) {
    const tool = toolsData.find(t => t.id === params.slug);

    if (!tool) {
        return {
            title: 'Tool Not Found',
        };
    }

    const title = `${tool.name} | DeepCortex`;
    const description = tool.shortDescription || `Learn about ${tool.name} on DeepCortex.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://deepcortex.tech/tool/${tool.id}`,
            images: [
                {
                    url: tool.logoUrl || `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(tool.affiliateLink)}&size=128`,
                    width: 800,
                    height: 600,
                    alt: `${tool.name} Logo`,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [tool.logoUrl || `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(tool.affiliateLink)}&size=128`],
        },
        alternates: {
            canonical: `https://deepcortex.tech/tool/${tool.id}`,
        },
    };
}

export default function ToolPage({ params }) {
    const tool = toolsData.find(t => t.id === params.slug);

    if (!tool) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: tool.name,
        description: tool.shortDescription,
        applicationCategory: tool.category,
        url: `https://deepcortex.tech/tool/${tool.id}`,
        offers: {
            '@type': 'Offer',
            price: tool.pricing === 'Free' ? '0' : undefined,
            priceCurrency: 'USD',
        },
        aggregateRating: tool.rating ? {
            '@type': 'AggregateRating',
            ratingValue: tool.rating,
            bestRating: '5',
            worstRating: '1',
            ratingCount: 1 // Fallback or retrieve actual count if available
        } : undefined,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolClientPage tool={tool} />
        </>
    );
}
