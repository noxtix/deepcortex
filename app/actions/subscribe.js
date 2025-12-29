'use server';

// actions/subscribe.js - Fixed Race Condition & Force Send
import { Resend } from 'resend';
import WelcomeEmail from '@/components/emails/WelcomeEmail';
import { render } from '@react-email/components';
import * as React from 'react';

export async function subscribeUser(prevState, formData) {
    try {
        const email = formData.get('email');
        const apiKey = process.env.RESEND_API_KEY;
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        // 0. Configuration Check
        if (!apiKey || !audienceId) {
            console.error('Server Configuration Error: Missing Credentials');
            return { success: false, message: 'System configuration error.' };
        }

        const resend = new Resend(apiKey);

        // 1. Validate Email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { success: false, message: 'Please enter a valid email address.' };
        }

        // 2. Add to Resend Audience (Await strictly)
        const { data: contactData, error: contactError } = await resend.contacts.create({
            email: email,
            audienceId: audienceId,
        });

        let shouldSendEmail = false;

        if (contactError) {
            console.error('Resend Contact Error:', contactError);
            // If already subscribed, we still want to force send the email for debugging/user request
            if (contactError.message && contactError.message.toLowerCase().includes('already')) {
                console.log('User already in audience. Proceeding to send email (Force Send).');
                shouldSendEmail = true;
            } else {
                return { success: false, message: 'Could not subscribe. Please try again.' };
            }
        } else {
            console.log('User successfully added to audience.');
            shouldSendEmail = true;
        }

        // 3. Send Welcome Email (Strictly await this too)
        if (shouldSendEmail) {
            console.log('Attempting to send email...');

            const emailHtml = await render(<WelcomeEmail />);

            const { data: emailData, error: emailError } = await resend.emails.send({
                from: 'DeepCortex <hello@deepcortex.tech>',
                to: email,
                subject: 'Welcome to the Hive Mind 🧠',
                html: emailHtml,
            });

            if (emailError) {
                console.error('Welcome Email FAILED:', emailError);
                // We return true because the subscription part might have worked (or they were already there)
                // But we warn the user/logs.
                return { success: true, message: 'Subscribed, but welcome email failed to send.' };
            } else {
                console.log('Email sent:', emailData);
            }
        }

        return { success: true, message: 'You are in! 🚀' };

    } catch (error) {
        console.error('CRITICAL SERVER ACTION ERROR:', error);
        return { success: false, message: `Server Error: ${error.message}` };
    }
}
