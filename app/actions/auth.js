'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE_NAME = 'deepcortex_admin_session';
const MAX_AGE = 60 * 60 * 24 * 7; // 1 week

export async function login(formData) {
    const password = formData.get('password');
    const adminSecret = process.env.ADMIN_SECRET;

    if (!adminSecret) {
        return { success: false, message: 'Server Misconfiguration: ADMIN_SECRET not set.' };
    }

    if (password === adminSecret) {
        cookies().set(COOKIE_NAME, 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: MAX_AGE,
            path: '/',
        });
        return { success: true };
    }

    return { success: false, message: 'Invalid Password' };
}

export async function logout() {
    cookies().delete(COOKIE_NAME);
    redirect('/admin/login');
}

export async function isAuthenticated() {
    const cookieStore = cookies();
    return cookieStore.has(COOKIE_NAME);
}

export async function requireAuth() {
    const isAuth = await isAuthenticated();
    if (!isAuth) {
        redirect('/admin/login');
    }
}
