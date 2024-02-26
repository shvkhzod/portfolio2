import type { Block } from "../blogs/blogsData";


export interface ProjectData {
    title: string,
    subtitle: string,
    url: string,
    date: string,
    content: Block[],
}

export const projectsData: ProjectData[] = [{
    //Project Digitaluzb

    title: "Digitaluzb",
    url: "digitaluzb",
    subtitle: "I formed a community of programmers and designers on Instagram. Right now we are more than 2000 and growing",
    date: "02 May 2023",
    content: [
        {   image: "digitalThumb",     
        },
        {
            paragraph: "I created very nice community consisting of 2000 people on Instagram",

   
        },
        {
            headline: "The reason",
            paragraph: "I wanted to create a community where people can share their knowledge, experience and ideas. I wanted to create a platform where people can learn from each other and grow together. And I am very happy that I achieved it."

        },
        {
            headline: "The future",
            paragraph: "I am planning to create a website and a youtube channel where I will share my knowledge and experience. I am also planning to create a platform where people can share their ideas and knowledge and grow together."
        },
        {
            headline: "What I learnt",
            paragraph: "I discovered new people, became more confident about my communication skills"
        }
    ],
},

    //Everbest Academy
    {
        title: "Everbest",
        url: "everbest",
        subtitle: "A digitilaztion of educational brand to make it more accessible and visible to the public",
        date: "July 2022",
        content: [
            {
                image: "everPreview"
            },
            {
                headline: "Problem",
                paragraph:"Academy did not have strong online presence, interested people could not find information about the academy. So it blocked the growth."
            },
            {
                headline: "Solution",
                paragraph: "I proposed a website that would have all the information about the academy, courses, teachers and etc. I included a blog section as well, where academy could share their knowledge and experience, and attract more people by creating content"
            },
            {
                headline: "Typeface",
                paragraph: "After discussion with the client, I chose a typeface that would represent the academy's values and mission. I chose a typeface that would be easy to read and would look professional, so primary typeface is Space Grotesk and secondary typeface is Poppins. ",
                image: 'ever1',
            },
            {
                headline: "Colors",
                paragraph: "So we went with blue as primary color, as it gives a sense of technology and trust. For secondary color we chose white, to emphasize the primary color. And for accent colors, the different hues of blue and green were chosen to give a sense of calmness and growth. "
            },
        ]
    }
]

