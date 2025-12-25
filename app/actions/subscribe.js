'use server';

// actions/subscribe.js - v2 (Safe Mode)
import { Resend } from 'resend';
import WelcomeEmail from '@/components/emails/WelcomeEmail';
import * as React from 'react';

export async function subscribeUser(prevState, formData) {
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
        const { data: contactData, error: contactError } = await resend.contacts.create({
            email: email,
            audienceId: audienceId,
        });

        if (contactError) {
            console.error('Resend API Error (Contact):', contactError);
            // Handle "Already Subscribed"
            if (contactError.message && contactError.message.toLowerCase().includes('already')) {
                return { success: true, message: "You're already on the list! 🚀" };
            }
            return { success: false, message: 'Something went wrong. Please try again.' };
        }

        // 3. Send Welcome Email
        try {
            const { data: emailData, error: emailError } = await resend.emails.send({
                from: 'DeepCortex <hello@deepcortex.tech>',
                to: email,
                subject: 'Welcome to the Hive Mind 🧠',
                react: <WelcomeEmail />,
            });

            if (emailError) {
                console.error('Welcome Email Error:', emailError);
            } else {
                console.log('Welcome Email Sent:', emailData);
            }
        } catch (emailErr) {
            console.error('Welcome Email Exception:', emailErr);
        }

        return { success: true, message: 'You are in! 🚀' };

    } catch (error) {
        console.error('CRITICAL SERVER ACTION ERROR:', error);
        return { success: false, message: `Server Error: ${error.message}` };
    }
}
