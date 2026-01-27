# Admin Dashboard Setup Guide

To access the secure admin dashboard at `/admin`, you must configure the following Environment Variables in your hosting provider (e.g., Vercel, Netlify).

## 1. Security (Required)

-   **`ADMIN_SECRET`**: A strong password string. This is the only key required to log in.
    -   *Example:* `super_secret_password_123!`

## 2. Functionality (Required for Features)

-   **`RESEND_API_KEY`**: API Key from [Resend](https://resend.com) to fetch subscribers and send emails.
    -   *Example:* `re_123456789...`
-   **`RESEND_AUDIENCE_ID`**: The Audience (Contact List) ID from Resend where new leads are stored.
    -   *Example:* `aud_987654321...`

## Troubleshooting

-   **"Access Denied" or Redirect Loops:** Ensure `ADMIN_SECRET` is set correctly.
-   **"Subscriber List Error":** Ensure `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` are valid.
-   **Tools/Blog Changes Not Saving:** If hosted on Vercel/Serverless, file system writes are **ephemeral**. The admin dashboard works best for local development or VPS hosting (e.g., DigitalOcean, Railway) where the filesystem is persistent. For Vercel, you would need to refactor the storage layer to use a database (e.g., Supabase, MongoDB) instead of JSON/MDX files.
