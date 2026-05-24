import { stacks } from '@/data/stacks';
import StackDetailClient from './page-client';

export async function generateMetadata({ params }) {
    const stack = stacks.find(s => s.id === params.slug);

    if (!stack) {
        return {
            title: 'Stack Not Found - DeepCortex',
        };
    }

    return {
        title: `${stack.title} - AI Tool Stack | DeepCortex`,
        description: stack.description || `Discover the best AI tools for ${stack.title} curated by DeepCortex.`,
        openGraph: {
            title: `${stack.title} - Top AI Tool Stack`,
            description: stack.description || `Discover the ultimate AI tool stack for ${stack.title}.`,
            url: `https://deepcortex.tech/stacks/${stack.id}`,
            type: 'website',
            images: [
                {
                    url: 'https://deepcortex.tech/icon.png',
                    width: 512,
                    height: 512,
                    alt: stack.title,
                },
            ],
        },
        twitter: {
            card: 'summary',
            title: `${stack.title} AI Stack`,
            description: stack.description,
        },
    };
}

export default function Page({ params }) {
    const stack = stacks.find(s => s.id === params.slug);

    if (!stack) {
        return <StackDetailClient params={params} />;
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: stack.title,
        description: stack.description,
        url: `https://deepcortex.tech/stacks/${stack.id}`,
        about: {
            '@type': 'ItemList',
            itemListElement: stack.toolIds.map((id, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://deepcortex.tech/tool/${id}`,
            })),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <StackDetailClient params={params} />
        </>
    );
}
