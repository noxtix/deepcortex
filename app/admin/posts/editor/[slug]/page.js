import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import PostEditor from '@/components/admin/PostEditor';

export default async function EditorPage({ params }) {
    const slug = params.slug;
    let post = null;
    let content = '';

    if (slug !== 'new') {
        try {
            const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`);
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const { data, content: mdxContent } = matter(fileContent);
            post = { ...data, slug };
            content = mdxContent;
        } catch (e) {
            // New post or error
        }
    }

    return <PostEditor post={post} content={content} isNew={slug === 'new'} />;
}
