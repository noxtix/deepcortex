'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveBlogPost } from '@/app/actions/postActions';
import { Save, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2 px-6 rounded-xl transition-all flex items-center gap-2 disabled:opacity-70"
        >
            {pending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            Save Post
        </button>
    );
}

export default function PostEditor({ post, content, isNew }) {
    const [state, formAction] = useFormState(saveBlogPost, initialState);
    const router = useRouter();
    const [body, setBody] = useState(content || '');

    useEffect(() => {
        if (state.success) {
            router.push('/admin/posts');
            router.refresh();
        }
    }, [state.success, router]);

    return (
        <form action={formAction} className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <Link href="/admin/posts" className="p-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-slate-400" />
                    </Link>
                    <h1 className="text-2xl font-bold text-white">
                        {isNew ? 'New Post' : `Editing: ${post.title}`}
                    </h1>
                </div>

                {state.message && (
                     <span className="text-red-400 text-sm font-bold">{state.message}</span>
                )}

                <SubmitButton />
            </div>

            <input type="hidden" name="isNew" value={isNew} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 {/* Meta Data */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Title</label>
                            <input type="text" name="title" defaultValue={post?.title} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Slug (URL)</label>
                            <input type="text" name="slug" defaultValue={post?.slug} readOnly={!isNew} className={`w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 ${!isNew ? 'opacity-50' : ''}`} />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Date (YYYY-MM-DD)</label>
                            <input type="date" name="date" defaultValue={post?.date} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Excerpt</label>
                            <textarea name="excerpt" defaultValue={post?.excerpt} rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Image URL</label>
                            <input type="text" name="image" defaultValue={post?.image} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                    </div>
                </div>

                {/* Editor */}
                <div className="lg:col-span-2">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden h-full min-h-[500px] flex flex-col">
                        <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 text-xs font-bold text-slate-500 uppercase">
                            MDX Content
                        </div>
                        <textarea
                            name="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="flex-1 w-full bg-slate-900 p-6 focus:outline-none font-mono text-sm text-slate-300 resize-none"
                            placeholder="# Write your post here..."
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
