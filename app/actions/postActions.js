'use server';

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { revalidatePath } from 'next/cache';

const POSTS_PATH = path.join(process.cwd(), 'content', 'posts');

// Helper to get post content
async function getPostContent(slug) {
    try {
        const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    } catch (error) {
        return null;
    }
}

// Helper to save post
async function savePost(slug, content) {
    try {
        const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
        await fs.writeFile(filePath, content, 'utf-8');
        revalidatePath('/blog');
        revalidatePath(`/blog/${slug}`);
        revalidatePath('/admin/posts');
        return { success: true };
    } catch (error) {
        console.error('Error saving post:', error);
        return { success: false, message: 'Failed to write to filesystem.' };
    }
}

export async function saveBlogPost(prevState, formData) {
    const title = formData.get('title');
    const slug = formData.get('slug');
    const date = formData.get('date');
    const excerpt = formData.get('excerpt');
    const image = formData.get('image');
    const body = formData.get('body');
    const isNew = formData.get('isNew') === 'true';

    if (!title || !slug || !body) {
        return { success: false, message: 'Title, Slug, and Content are required.' };
    }

    // Check if file exists if new
    if (isNew) {
        const exists = await getPostContent(slug);
        if (exists) {
            return { success: false, message: 'A post with this slug already exists.' };
        }
    }

    // Construct Frontmatter
    const frontmatter = {
        title,
        date: date || new Date().toISOString().split('T')[0],
        excerpt,
        image,
    };

    const fileContent = matter.stringify(body, frontmatter);

    const result = await savePost(slug, fileContent);
    if (!result.success) return result;

    return { success: true, message: 'Post saved successfully.' };
}

export async function deletePost(slug) {
    try {
        const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
        await fs.unlink(filePath);
        revalidatePath('/admin/posts');
        revalidatePath('/blog');
        return { success: true };
    } catch (error) {
        return { success: false, message: 'Failed to delete post.' };
    }
}
