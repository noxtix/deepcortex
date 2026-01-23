import fs from 'fs/promises';
import path from 'path';

export const TOOLS_PATH = path.join(process.cwd(), 'data', 'tools.json');

export async function getTools() {
    try {
        const data = await fs.readFile(TOOLS_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tools:', error);
        return [];
    }
}
