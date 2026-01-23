'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createTool, updateTool } from '@/app/actions/toolActions';
import { Save, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton({ isEdit }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2 disabled:opacity-70"
        >
            {pending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            {isEdit ? 'Update Tool' : 'Create Tool'}
        </button>
    );
}

export default function ToolForm({ tool = null }) {
    const isEdit = !!tool;
    const action = isEdit ? updateTool : createTool;
    const [state, formAction] = useFormState(action, initialState);
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push('/admin/tools');
            router.refresh();
        }
    }, [state.success, router]);

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/tools" className="p-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                </Link>
                <h1 className="text-3xl font-bold text-white">
                    {isEdit ? `Edit: ${tool.name}` : 'New Tool Listing'}
                </h1>
            </div>

            <form action={formAction} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                        <h2 className="text-xl font-bold text-slate-200 mb-4">Core Info</h2>

                        {isEdit && <input type="hidden" name="originalId" value={tool.id} />}

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-1">Tool Name</label>
                                <input type="text" name="name" defaultValue={tool?.name} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-400 mb-1">Slug ID (URL)</label>
                                <input type="text" name="id" defaultValue={tool?.id} readOnly={isEdit} className={`w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 ${isEdit ? 'opacity-50 cursor-not-allowed' : ''}`} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Tagline</label>
                            <input type="text" name="tagline" defaultValue={tool?.tagline} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Short Description</label>
                            <textarea name="shortDescription" defaultValue={tool?.shortDescription} rows={2} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label className="block text-sm font-bold text-slate-400 mb-1">Affiliate Link</label>
                                <input type="url" name="affiliateLink" defaultValue={tool?.affiliateLink} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                            </div>
                             <div className="flex items-center gap-2 pt-6">
                                <input type="checkbox" name="isFeatured" defaultChecked={tool?.isFeatured} id="feat" className="w-5 h-5 rounded bg-slate-950 border-slate-800 text-emerald-500 focus:ring-emerald-500" />
                                <label htmlFor="feat" className="text-sm font-bold text-white">Mark as Featured</label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                        <h2 className="text-xl font-bold text-slate-200 mb-4">Deep Dive (Trust)</h2>

                         <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Problem it Solves</label>
                            <textarea name="trust_problem" defaultValue={tool?.trust?.problem} rows={2} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Who it&apos;s NOT For</label>
                            <textarea name="trust_notFor" defaultValue={tool?.trust?.notFor} rows={2} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Pricing Reality</label>
                            <textarea name="trust_pricingReality" defaultValue={tool?.trust?.pricingReality} rows={2} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                        <h2 className="text-xl font-bold text-slate-200 mb-4">Metadata</h2>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Category</label>
                            <select name="category" defaultValue={tool?.category || "Coding"} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2">
                                <option value="Coding">Coding</option>
                                <option value="Writing">Writing</option>
                                <option value="Productivity">Productivity</option>
                                <option value="Video">Video</option>
                                <option value="Audio">Audio</option>
                                <option value="Image Gen">Image Gen</option>
                                <option value="Design">Design</option>
                                <option value="Fun">Fun</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Pricing Model</label>
                            <select name="pricing" defaultValue={tool?.pricing || "Freemium"} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2">
                                <option value="Free">Free</option>
                                <option value="Freemium">Freemium</option>
                                <option value="Paid">Paid</option>
                                <option value="Waitlist">Waitlist</option>
                            </select>
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-400 mb-1">Rating (0-5)</label>
                            <input type="number" name="rating" step="0.1" max="5" defaultValue={tool?.rating} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2" />
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                        <h2 className="text-xl font-bold text-slate-200 mb-4">Lists (One per line)</h2>
                         <div>
                            <label className="block text-sm font-bold text-emerald-400 mb-1">Pros</label>
                            <textarea name="pros" defaultValue={tool?.pros?.join('\n')} rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-red-400 mb-1">Cons</label>
                            <textarea name="cons" defaultValue={tool?.cons?.join('\n')} rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm" />
                        </div>
                    </div>

                    <div className="pt-4">
                         {state.message && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold text-center">
                                {state.message}
                            </div>
                        )}
                        <SubmitButton isEdit={isEdit} />
                    </div>
                </div>
            </form>
        </div>
    );
}
