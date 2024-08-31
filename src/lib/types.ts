

export type Post = {
	title: string
	slug: string
	subtitle: string
	date: string
	category: string,
	keywords: string
	author: "Shakhzod"
	content: string;
	published: boolean
}

export interface Project {
    title: string;
    subtitle: string;
    date: string;
    url: string;
    content: string;
}

export interface Book {
	title: string;
	category: string;
	subtitle: string;
	date: string;
}