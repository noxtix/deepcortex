import { notFound } from 'next/navigation';
import { stacks } from '@/data/stacks';
import StackClientPage from './page-client';
import toolsData from '@/data/tools.json';

export async function generateMetadata({ params }) {
    const stack = stacks.find(s => s.id === params.slug);

    if (!stack) {
        return {
            title: 'Stack Not Found',
        };
    }

    const title = `${stack.title} Stack | DeepCortex`;
    const description = stack.description || `Explore the ${stack.title} stack of AI tools on DeepCortex.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://deepcortex.tech/stacks/${stack.id}`,
            images: [
                {
                    url: '/icon.png', // Or a stack-specific image if you have one
                    width: 800,
                    height: 600,
                    alt: `${stack.title} Stack`,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/icon.png'],
        },
        alternates: {
            canonical: `https://deepcortex.tech/stacks/${stack.id}`,
        },
    };
}

export default function StackPage({ params }) {
    const stack = stacks.find(s => s.id === params.slug);

    if (!stack) {
        notFound();
    }

    const tools = stack.toolIds.map(id => toolsData.find(t => t.id === id)).filter(Boolean);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: stack.title,
        description: stack.description,
        url: `https://deepcortex.tech/stacks/${stack.id}`,
        itemListElement: tools.map((tool, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'SoftwareApplication',
                name: tool.name,
                url: `https://deepcortex.tech/tool/${tool.id}`,
                applicationCategory: tool.category,
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <StackClientPage stack={stack} tools={tools} />
        </>
    );
}
