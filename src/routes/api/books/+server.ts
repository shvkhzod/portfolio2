import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

interface Book {
    title: string;
    category: string;
    subtitle: string;
    date: string;
}

function parseMarkdown(content: string): Book[] {
    const lines = content.split('\n');
    const books: Book[] = [];
    let currentBook: Partial<Book> | null = null;
    let currentYear = '';

    for (const line of lines) {
        if (line.startsWith('## ')) {
            currentYear = line.slice(2).trim();
        } else if (line.startsWith('### ')) {
            if (currentBook) books.push(currentBook as Book);
            currentBook = { title: line.slice(3).trim(), date: currentYear };
        } else if (line.startsWith('Category: ')) {
            currentBook!.category = line.slice(10).trim();
        } else if (line.startsWith('Subtitle: ')) {
            currentBook!.subtitle = line.slice(9).trim();
        }
    }
    if (currentBook) books.push(currentBook as Book);

    return books;
}

export const GET: RequestHandler = async () => {
    const files = import.meta.glob('/src/lib/books/*.md', { as: 'raw', eager: true });
    const content = Object.values(files)[0] as string;
    const books = parseMarkdown(content);

    return json(books.sort((a, b) => parseInt(b.date) - parseInt(a.date)));
}