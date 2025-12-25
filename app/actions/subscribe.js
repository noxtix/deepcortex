'use server';

import { Resend } from 'resend';

export async function subscribeUser(formData) {
    const email = formData.get('email');
    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // 0. Server-Side Configuration Check
    if (!apiKey || !audienceId) {
        console.error('Server Configuration Error: Missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
        // Return a generic error to the user, but log specific missing keys to server console
        return { success: false, message: 'System configuration error. Please try again later.' };
    }

    const resend = new Resend(apiKey);

    // 1. Validate Email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: 'Please enter a valid email address.' };
    }

    try {
        // 2. Add to Resend Audience
        const { data, error } = await resend.contacts.create({
            email: email,
            audienceId: audienceId,
        });

        if (error) {
            console.error('Resend Error:', error);

            // Handle "Already Subscribed"
            if (error.message && error.message.toLowerCase().includes('already')) {
                return { success: true, message: "You're already on the list! 🚀" };
            }

            return { success: false, message: 'Something went wrong. Please try again.' };
        }

        return { success: true, message: 'You are in! 🚀' };

    } catch (error) {
        console.error('Server Error:', error);
        return { success: false, message: 'Internal server error.' };
    }
}
