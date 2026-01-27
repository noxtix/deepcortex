'use server';

import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { getTools, TOOLS_PATH } from '@/lib/adminUtils';

// Helper to write tools
async function saveTools(tools) {
    try {
        await fs.writeFile(TOOLS_PATH, JSON.stringify(tools, null, 4), 'utf-8');
        revalidatePath('/tools');
        revalidatePath('/tool/[slug]', 'page');
        revalidatePath('/admin/tools');
        return { success: true };
    } catch (error) {
        console.error('Error saving tools:', error);
        return { success: false, message: 'Failed to save to filesystem.' };
    }
}

export async function createTool(prevState, formData) {
    const rawData = Object.fromEntries(formData.entries());

    // Basic Validation
    if (!rawData.name || !rawData.id) {
        return { success: false, message: 'Name and ID are required.' };
    }

    const tools = await getTools();

    // Check duplicate ID
    if (tools.some(t => t.id === rawData.id)) {
        return { success: false, message: 'Tool ID already exists.' };
    }

    // Transform data
    const newTool = {
        id: rawData.id,
        name: rawData.name,
        tagline: rawData.tagline,
        category: rawData.category,
        pricing: rawData.pricing,
        rating: parseFloat(rawData.rating) || 0,
        affiliateLink: rawData.affiliateLink,
        shortDescription: rawData.shortDescription,
        // Handle array fields which might come as comma-separated strings
        pros: rawData.pros ? rawData.pros.split('\n').filter(Boolean) : [],
        cons: rawData.cons ? rawData.cons.split('\n').filter(Boolean) : [],
        // Simple trust object construction
        trust: {
            problem: rawData.trust_problem,
            notFor: rawData.trust_notFor,
            pricingReality: rawData.trust_pricingReality,
            failureModes: rawData.trust_failureModes ? rawData.trust_failureModes.split('\n').filter(Boolean) : [],
            bestAlternatives: rawData.trust_bestAlternatives ? rawData.trust_bestAlternatives.split(',').map(s => s.trim()).filter(Boolean) : []
        },
        // We skip complex objects like 'playbook' for this simple MVP editor
        isFeatured: rawData.isFeatured === 'on'
    };

    tools.push(newTool);

    const result = await saveTools(tools);
    if (!result.success) return result;

    return { success: true, message: 'Tool created successfully.' };
}

export async function updateTool(prevState, formData) {
    const rawData = Object.fromEntries(formData.entries());
    const id = rawData.originalId; // Hidden field

    const tools = await getTools();
    const index = tools.findIndex(t => t.id === id);

    if (index === -1) {
        return { success: false, message: 'Tool not found.' };
    }

    // Merge updates
    const updatedTool = {
        ...tools[index],
        name: rawData.name,
        tagline: rawData.tagline,
        category: rawData.category,
        pricing: rawData.pricing,
        rating: parseFloat(rawData.rating) || 0,
        affiliateLink: rawData.affiliateLink,
        shortDescription: rawData.shortDescription,
        pros: rawData.pros ? rawData.pros.split('\n').filter(Boolean) : [],
        cons: rawData.cons ? rawData.cons.split('\n').filter(Boolean) : [],
        trust: {
            ...tools[index].trust,
            problem: rawData.trust_problem,
            notFor: rawData.trust_notFor,
            pricingReality: rawData.trust_pricingReality,
            failureModes: rawData.trust_failureModes ? rawData.trust_failureModes.split('\n').filter(Boolean) : [],
            bestAlternatives: rawData.trust_bestAlternatives ? rawData.trust_bestAlternatives.split(',').map(s => s.trim()).filter(Boolean) : []
        },
        isFeatured: rawData.isFeatured === 'on'
    };

    tools[index] = updatedTool;

    const result = await saveTools(tools);
    if (!result.success) return result;

    return { success: true, message: 'Tool updated successfully.' };
}

export async function deleteTool(id) {
    let tools = await getTools();
    tools = tools.filter(t => t.id !== id);

    const result = await saveTools(tools);
    if (!result.success) return result;

    revalidatePath('/admin/tools');
    return { success: true };
}
