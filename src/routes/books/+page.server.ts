import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

interface Book {
    title: string;
    category: string;
    subtitle: string;
    rating: number; // Make rating a required field
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
            currentBook = { title: line.slice(3).trim(), category: 'Uncategorized', subtitle: '', rating: 0 };
        } else if (line.startsWith('Category: ')) {
            currentBook!.category = line.slice(10).trim();
        } else if (line.startsWith('Subtitle: ')) {
            currentBook!.subtitle = line.slice(9).trim();
        } else if (line.startsWith('Rating: ')) {
            const ratingMatch = line.match(/(\d+(\.\d+)?)\/10/);
            if (ratingMatch) {
                currentBook!.rating = parseFloat(ratingMatch[1]);
            }
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
        const numberOfBooks = yearGroups.reduce((acc, yearGroup) => acc + yearGroup.books.length, 0);
        return {
            title,
            yearGroups,
            numberOfBooks
        };
    } catch (e) {
        console.error("Error loading books:", e);
        throw error(500, "Error loading books");
    }
};