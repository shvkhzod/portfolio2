    export interface Block {
        headline?: string,
        paragraph?: string,
        image?: string,

    }

    export interface BlogData {
        title: string,
        subtitle: string,
        url: string,
        date: string,
        content: Block[]
    }


    export const blogsData: BlogData[] = [
     // Expression and Identity
     {
        title: 'Expression and Identity',
        subtitle: 'The struggle in having independent thoughts and sharing them',
        url: 'expression-and-identity',
        date: '27 April 2024',
        content: [
            {
                paragraph: `I think that many people respect a person, who has his own opinion and strength to express it, regarless of the fact that others might disagree with them.`
            },
            {
                paragraph: `
                I personally know few individuals with these qualities.
                Frankly, they sound a bit rude, but usually they speak the truth, when everyone else is silent. These type of people - 
                rebels, that are very straightforward and honest, have a good chance to be leaders. 
                `
            },
            {
                paragraph: `As essayist Nassib Taleb said in his book Antifragile, "A new form of courage was born, that of the Socratic Plato, which is the very definition of the modern man:
                the courage to stand up for an idea, simply because the privilege standing up for 
                one's values, had become the highest form of honor"
                `
            },
            {
                paragraph: `
                The reason why people like Elon Musk, Kanye West or Steve Jobs are very “expressive” in authentic way is that they are not afraid of being wrong or sounding silly
                `
            },
            {
                paragraph: `
                When asked about an opinion about particular subject, shy people like me tend to choose the safest path - presenting a thought that doesn't offend anyone(neutral) or just shutting up 
                `
            }, {
                paragraph: `
                Some people give “popular opinion” instead of theirs(they might not have it even) ,because  an idea that has more public following is another safe path
                `
            }, {
                paragraph: `A lot of people fear being judged or even being punished for speaking their minds. They worry about other's feelings and opinions - "their public image". As a result, they choose to stay silent
                or conform popular opinion, even though it doen't align with their own values.`
            },
            {
                paragraph: `
                When we deny our own truth, we lose touch with who we really are. Unfortunately, this denial starts from early age, from primary school, through high school and even in university. We go to school and do the tasks, so that we get good grades. We experience that being different is bad, presenting confronting idea is building argument, which means disrespect. When we go to university, we present the ideas that our professors like, we write things 
                that they want to read. Because we don't want to make any professor mad and fail in the courses we do not like. And this habit follows us to the workplace, where we present the ideas that our bosses like, we do the tasks that they want us to do. 
                `
            },
            {
                paragraph: `
                In today's time,the act of self-expression is extremely rare. I agree that we should be kind and respectful to others, but when we are kind, we are 90% of the time not honest. We are just trying to be nice.
                `
            },
            {
                paragraph: `
                And I don't want to be nice, I want to be honest. I want to be me.
                `
            }
        ]
     },    


         //Numb Brain
    {
        title: 'Numb Brain',
        subtitle: 'How we are becoming zombies',
        url: 'numb-brain',
        date: '12 March 2024',
        content: [
            {
                paragraph: `"What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain, it's almost impossible to eradicate. An idea that is fully formed, fully understood, that sticks. Right in there somewhere" - Cobb, Inception`,
            },
            {
                paragraph: `It is 07:48pm, you are having your dinner on your own, and of course you are staring at your phone, while eating. You are watching Mr.Beast's recent video on YouTube, and as usual, right when you are getting engaged with the content, an ad pops up. These 5 seconds feels like lifetime to you, after clicking the skip button, you wonder why companies spend millions of dollars on these ads, when everyone just skips them.`
            }, {
                paragraph: `According WARC, global advertising spending estimated to surpass $1 trillion in 2024. Ads are effective at planting a seed of information, even though many people think that ads doesn't affect them and it is just waste of money to spend $1 million for an ad in Times Square for a day.`
            }, 
            {
                paragraph: `The brain is like computer and information is a program, that usually runs in the background, without letting you notice it. And if you think about it, your decisions, your thoughts and your actions are heavily driven by the information that you have received by listening to someone, reading a book, watching a movie or seeing an ad`
            },
            {
                paragraph: `Since information has such a big impact on our lives, it can work for us or against us, but it is usually the latter. Human brain is very smart organ, but not smart enough to filter out the received information. You cannot "unthink" or forget information by your own will. `
            },{
                paragraph:`And the problem is that, we are not selecting or even paying attention to the information that we are receiving. We are just consuming. Through TikTok videos and Instagram reels, in a bus, in a bed, in a dinner, non-stop. We are equipped with endless screens, big headphones and now trying to put whole computer on our heads making it easier for the media to control us`
            },{
                paragraph:`Even worse, our brains are used to receive endless amount of information, it craves for it. When we are not receiving information that doesn't require deep processing and thinking we feel bored. So to avoid that feeling, we just keep scrolling, keep watching and keep listening`

            }, {
                paragraph: `Remember that you are not just what you eat. You are what you absorb `
            }
        ]
    },

    {
        //Uncreativity
        title: "Avoiding Uncreativity",
        subtitle: "My approach how to overcome uncreativity in a time where the focus and attention are totally broken and destroyed",
        url: "avoiding-uncreativity",
        date: "15 Jan 2024",
        content: [
            {
                paragraph: "Alright, let's be honest, creativity isn't always our default setting. As a developer and designer, I'm constantly on the hunt for inspiration, and most of the time it's just not there. But I've found some ways that helped me to overcome the creative block"
            },
            {
                headline: "Ditch the scroll",
                paragraph: "We all know that social media is just sucking up all our energy and focus , even with that knowledge, we just let it crush our attention. It is ingrained habit. Quite recently, my screen time(social media and etc) was more than 6 hours. I felt that my brain was rotting. So I just put time limits and started to be in the real world more. And guess what, when I am not scrolling, I am actually thinking. And that's when the ideas come"
            },
            {
                headline: "Be Bored",
                paragraph: "Boredom is the best friend of creativity. When you're bored, your mind wanders, it is interesting, how you will start to recognize things that you haven't noticed before. So whenever you are bored, don't reach your phone to numb your brain."
            },
            {
                headline: "Remixing is the key",
                paragraph: "Originality is unnoticed plagiarism. Everything is a remix. So don't be afraid to take inspiration from others. But it is different from copying. Copying is just taking someone's work and claiming it as yours. But remixing is taking someone idea and adding your own twist to it, shaping it in your style. And you should not take inspiration from one source, take from multiple sources, and combine them to create something new"

            },
            {
                headline: "It is the little details",
                paragraph: "One of coolest Motion Desingners - Eduard Mykhailov said that- 'Creativity is tweaking'. And I couldn't agree more. You make something, you choose one certain detail of it and experiment with it, rotating it 90 degrees, changing the color, moving there and here. And you will be surprised how much you can create from one simple detail.",

            }
        ],
    },

    //University
    {
        title: "Why University?",
        subtitle: "My thoughts on why I chose to study at university, even though I do not need a degree to become a software engineer",
        url: "why-university",
        date: "07 Oct 2023",
        content: [
            {
                paragraph: "I am a student at LSBU, studying BSc Computer Science. Before LSBU, I studied at SNU, South Korea, but I dropped out after 2 years due to corona virus. So in a field, where nobody really asks for a degree, why did I decide to go to university?"
            },
            {
                headline: "I didn't want to grow up fast",
                paragraph: "Even though I was twenty, I felt that I needed some more time explore myself and the world. And university gave good amount of time to do that. My favorite place in my univeristy is library. I can spend hours there, reading books and learning new things in my laptop.Plus, I chose to study in London, which is one of the most diverse cities in the world. Moving here was totally different experience, I felt like as if I had just been unplugged from the matrix. So with university I was able to learn things that I really like and explore the world at the same time, without really worrying about the future for a while"
            },
            {
                headline: "I am Asian bruh",
                paragraph: "I am from Uzbekistan, and in my country, education is very important, especially for parents. It is like a status symbol, Asian mindset. So this played a little role in this decision as well, I didn't want to disappoint my parents as they've done so many things for me"
            },
            {
                headline: "Education is education",
                paragraph: "I am studying different subjects, and I find them interesting, it is not top quality, but expecting a lot from university is waste of time. I get topics and do a lot self study, by doing that I believe I am getting good preparation for my career. It is just different atmosphere here, a lot of people at the same of timeline of their lives with different backgrounds. You feel it, when you enter the campus, when you go inside the library,all these students trying to figure out things, it encourages you to learn ."
            }
        ]
    }
]

