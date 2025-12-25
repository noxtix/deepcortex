'use server';

// actions/subscribe.js - v2 (Safe Mode)
import { Resend } from 'resend';

export async function subscribeUser(formData) {
    try {
        const email = formData.get('email');
        const apiKey = process.env.RESEND_API_KEY;
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        console.log('Subscribe Action Triggered', {
            hasKey: !!apiKey,
            hasAudience: !!audienceId,
            keyLength: apiKey ? apiKey.length : 0
        });

        // 0. Server-Side Configuration Check
        if (!apiKey || !audienceId) {
            console.error('Server Configuration Error: Missing Credentials');
            return { success: false, message: 'System configuration error. Please try again later.' };
        }

        const resend = new Resend(apiKey);

        // 1. Validate Email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { success: false, message: 'Please enter a valid email address.' };
        }

        // 2. Add to Resend Audience
        const { data, error } = await resend.contacts.create({
            email: email,
            audienceId: audienceId,
        });

        if (error) {
            console.error('Resend API Error:', error);
            // Handle "Already Subscribed"
            if (error.message && error.message.toLowerCase().includes('already')) {
                return { success: true, message: "You're already on the list! 🚀" };
            }
            return { success: false, message: 'Something went wrong. Please try again.' };
        }

        return { success: true, message: 'You are in! 🚀' };

    } catch (error) {
        console.error('CRITICAL SERVER ACTION ERROR:', error);
        return { success: false, message: 'Internal server exception. Checking logs.' };
    }
}
