'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function subscribeUser(formData) {
    const email = formData.get('email');

    // 1. Validate Email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: 'Please enter a valid email address.' };
    }

    try {
        // 2. Add to Resend Audience
        const { data, error } = await resend.contacts.create({
            email: email,
            audienceId: AUDIENCE_ID,
        });

        if (error) {
            console.error('Resend Error:', error);

            // Handle "Already Subscribed" (400 or 422 usually, but strict check is safer)
            // Resend specific error codes or messages might vary slightly, but generally:
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
