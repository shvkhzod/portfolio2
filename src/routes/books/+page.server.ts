import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

interface Book {
    title: string;
    category: string;
    subtitle: string;
}

interface YearGroup {
    year: number;
    books: Book[];
}

function parseMarkdown(content: string): { title: string; yearGroups: YearGroup[] } {
    const lines = content.split('\n');
    const yearGroups: YearGroup[] = [];
    let currentYear: YearGroup | null = null;
    let currentBook: Partial<Book> | null = null;
    let title = '';

    for (const line of lines) {
        if (line.startsWith('# ')) {
            title = line.slice(2).trim();
        } else if (line.startsWith('## ')) {
            if (currentYear) yearGroups.push(currentYear);
            currentYear = { year: parseInt(line.slice(2)), books: [] };
        } else if (line.startsWith('### ')) {
            if (currentBook) currentYear?.books.push(currentBook as Book);
            currentBook = { title: line.slice(3).trim() };
        } else if (line.startsWith('Category: ')) {
            currentBook!.category = line.slice(10).trim();
        } else if (line.startsWith('Subtitle: ')) {
            currentBook!.subtitle = line.slice(9).trim();
        }
    }
    if (currentBook) currentYear?.books.push(currentBook as Book);
    if (currentYear) yearGroups.push(currentYear);

    return { title, yearGroups };
}

export const load: PageServerLoad = async () => {
    try {
        const files = import.meta.glob('/src/lib/books/*.md', { as: 'raw', eager: true });
        console.log("Found files:", Object.keys(files));

        if (Object.keys(files).length === 0) {
            throw new Error("No Markdown files found in /src/lib/books/");
        }

        const content = Object.values(files)[0];

        if (typeof content !== 'string') {
            throw new Error("File content is not a string");
        }

        const { title, yearGroups } = parseMarkdown(content);

        return {
            title,
            yearGroups
        };
    } catch (e) {
        console.error("Error loading books:", e);
        throw error(500, "Error loading books");
    }
};