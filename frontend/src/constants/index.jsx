import {
    heroPic1,
    heroPic2,
    heroPic3,
    heroPic4,
    teamRelax1,
    langi,
    joshua,
    jason,
    musoga,
    teamTrain1,
} from '../assets'

export const heroimages = [
    {
        title: "Fist image",
        icon: heroPic1,
        
    },
    {
        title: 'Image-2',
        icon: heroPic2,
    },
    {
        title: 'image-3',
        icon: heroPic3,
    },
    {
        title: 'image-4',
        icon: heroPic4,
    },
    
];

export const commitee = [
    // {
    //     title: '',
    //     name: 'Atemi Sensei',
    //     photo: teamRelax1,
    //     rank: 'Chairman',
    //     description: 'Mr. Atemi is a fitness enthusiast who has a passion for Karate. He has \
    //     practiced Boxing and Karate for many years. Atemi is the former President \
    //     of the Kenya Karate Federation.',
    // },
    {
        title: '',
        name: 'Joshua Oude Sensei',
        photo: joshua,
        rank: '4th Dan HDKI',
        description: 'Joshua Sensei has steered the group and developed the technical skillset in each and everyone \
        of Shotokan united Kenya karate Family. With over 40 years of active Karate training Joshua sensei has \
        developed in-depth understanding of the way of the hand. He has a rich comprehension of Kihon and Kata',
    },
    {
        title: '',
        name: 'Jason Kibe Sensei',
        photo: jason,
        rank: '3rd Dan HDKI',
        description: 'Kibe Sensei is an experienced Karate instructor who has trained several Karatekas, \
        especially under the kids wing. Kibe is a charismatic teacher with more than 7 years experience in \
        karatekas'
    },
    {
        title: '',
        name: 'Musoga Goodric Sensei',
        photo: musoga,
        rank: '3rd Dan HDKI',
        description: 'Musoga started practicing martial arts while in primary school in Nakuru. \
        He joined Taekwondo classes at the Christ the King Church. However, \
        while in high school he switched to Karate which has remained his \
        passion.',
    },
    {
        title: '',
        name: 'Cleven Langi',
        photo: langi,
        rank: '2nd Dan HDKI',
        description: 'An experienced instructor in both Shotokan Karate and Kapap Krav Maga. \
        Sensei Langi has demonstrated astitue commitment to the growth of Karate both as a player for the National team \
        and as a coach.'
    },
    // {
    //     title: '',
    //     name: 'Caleb Owich',
    //     photo: teamTrain1,
    //     rank: 'Shodan',
    //     description: 'A seasoned karate practisioner one of the earliest students of Joshua Sensei. \
    //     An instrumental in the organization and management of the club activities and planning. Over the years \
    //     Caleb has gained experience and developed karate skill sets both as a player and a scholar',
    // },
        
];

export const Excommitee = [
    {
        name: 'Caleb Atemi',
        photo: teamRelax1,
        role: 'Chairman of association',
        email: 'chairman@hdki-kenya.org',
        description: 'Mr. Atemi is a fitness enthusiast who has a passion for Karate. He has \
        practiced Boxing and Karate for many years. Atemi is the former President \
        of the Kenya Karate Federation.',
    },
    {
        name: 'Joshua Oude',
        photo: joshua,
        role: 'Chief Instructor',
        email: 'head@hdki-kenya.org',
        description: 'Joshua Sensei has steered the group and developed the technical skillset in each and everyone \
        of Shotokan united Kenya karate Family. With over 40 years of active Karate training Joshua sensei has \
        developed in-depth understanding of the way of the hand. He has a rich comprehension of Kihon and Kata',
    },
    {
        name: 'Musoga Goodric',
        photo: musoga,
        role: 'Technical Director',
        email: 'sec-gen@hdki-kenya.org',
        description: 'Musoga started practicing martial arts while in primary school in Nakuru. \
        He joined Taekwondo classes at the Christ the King Church. However, \
        while in high school he switched to Karate which has remained his \
        passion.',
    },
    {
        name: 'Flora Chandler',
        photo: musoga,
        role: 'Finance officer',
        email: 'Flora@hdki-kenya.org',
        description: 'Flora started practicing shotokan under Joshua oude Sensei while in Strathmoe University. \
        With sheer commitment, she excelled in Karate representing her school in both local and regional competitions. \
        She has travelled and trained under JKA instructors including Mori, Okuma. She has also attended internship \
        training program at HDKI HQ in Dublin',
    },
    {
        name: 'Caleb Owich',
        photo: teamTrain1,
        role: 'Membership/Event Officer',
        email: 'events@hdki-kenya.org',
        description: 'A seasoned karate practisioner one of the earliest students of Joshua Sensei. \
        An instrumental in the organization and management of the club activities and planning. Over the years \
        Caleb has gained experience and developed karate skill sets both as a player and a scholar',
    },
]

export const initialBlogs = [
    // Personal Journey Category
    {
        id: 1,
        title: 'My Journey to Black Belt',
        excerpt: 'After 5 years of dedicated training, countless bruises, and endless kata practice, I finally achieved what seemed impossible at first.',
        photo: "https://unsplash.it/800/700",
        author: 'Sarah Chen',
        authorAvatar: 'https://unsplash.it/600/400',
        date: '5/4/2024',
        views: 1500,
        likes: 234,
        comments: 45,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '5 min read',
        category: 'Personal Journey',
        featured: true,
        dojo: 'Zen Warriors Academy'
    },
    {
        id: 2,
        title: "From White to Green: A Beginner's Tale",
        excerpt: 'Starting karate at 30 seemed daunting, but the journey has been transformative.',
        photo: 'https://unsplash.it/600/400',
        author: 'John Miller',
        authorAvatar: 'https://unsplash.it/300/400',
        date: '5/3/2024',
        views: 890,
        likes: 156,
        comments: 28,
        isLiked: false,
        belt: 'Green Belt',
        readTime: '4 min read',
        category: 'Personal Journey',
        dojo: 'Traditional Karate Center'
    },
    
    // Technique Category
    {
        id: 3,
        title: 'Mastering the Perfect Roundhouse Kick',
        excerpt: "Breaking down the mechanics of one of karate's most iconic techniques.",
        photo: 'https://unsplash.it/800/730',
        author: 'David Kim',
        authorAvatar: 'https://unsplash.it/300/300',
        date: '5/2/2024',
        views: 2100,
        likes: 345,
        comments: 67,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '6 min read',
        category: 'Technique',
        dojo: 'Elite Martial Arts'
    },
    {
        id: 4,
        title: 'The Secret of Effective Blocks',
        excerpt: 'Understanding the principles behind defensive techniques in karate.',
        photo: 'https://unsplash.it/800/700',
        author: 'Maria Rodriguez',
        authorAvatar: 'https://unsplash.it/300/400',
        date: '5/1/2024',
        views: 1800,
        likes: 289,
        comments: 45,
        isLiked: false,
        belt: 'Brown Belt',
        readTime: '5 min read',
        category: 'Technique',
        dojo: 'Warriors Path Dojo'
    },

    // Training Category
    {
        id: 5,
        title: 'Effective Conditioning for Karate',
        excerpt: 'Build the strength and endurance needed for advanced karate training.',
        photo: 'https://unsplash.it/800/800',
        author: 'James Wilson',
        authorAvatar: 'https://unsplash.it/300/400',
        date: '4/30/2024',
        views: 1650,
        likes: 278,
        comments: 52,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '7 min read',
        category: 'Training',
        dojo: 'Power Karate Academy'
    },
    {
        id: 6,
        title: 'Mental Preparation Techniques',
        excerpt: 'Developing the mindset of a true martial artist through focused training.',
        photo: 'https://unsplash.it/800/790',
        author: 'Ana Patel',
        authorAvatar: 'https://unsplash.it/300/400',
        date: '4/29/2024',
        views: 1420,
        likes: 245,
        comments: 38,
        isLiked: false,
        belt: 'Brown Belt',
        readTime: '5 min read',
        category: 'Training',
        dojo: 'Mind Body Spirit Karate'
    },

    // Philosophy Category
    {
        id: 7,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/800/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/300/400',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 8,
        title: 'Karate-Do: Beyond the Dojo',
        excerpt: 'Applying martial arts wisdom to everyday life challenges.',
        photo: 'https://unsplash.it/800/750',
        author: 'Sophie Chen',
        authorAvatar: 'https://unsplash.it/300/400',
        date: '4/27/2024',
        views: 1890,
        likes: 356,
        comments: 64,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '6 min read',
        category: 'Philosophy',
        dojo: 'Wisdom Path Karate'
    },
    {
        id: 9,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/800/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/300/460',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 10,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/850/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/300/408',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 11,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/840/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/300/410',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 12,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/830/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/308/400',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 13,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/820/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/300/422',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 1,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/810/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/309/400',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 15,
        title: 'The Way of the Empty Hand',
        excerpt: 'Exploring the deeper meaning behind traditional karate principles.',
        photo: 'https://unsplash.it/860/740',
        author: 'Master Tanaka',
        authorAvatar: 'https://unsplash.it/304/400',
        date: '4/28/2024',
        views: 2300,
        likes: 467,
        comments: 89,
        isLiked: false,
        belt: 'Black Belt',
        readTime: '8 min read',
        category: 'Philosophy',
        dojo: 'Ancient Ways Dojo'
    },
    {
        id: 16,
        title: 'Advanced Kicks and Footwork',
        excerpt: 'Mastering dynamic kicks and footwork patterns in karate.',
        photo: 'https://unsplash.it/860/600',
        author: 'Sensei Ito',
        authorAvatar: 'https://unsplash.it/300/300',
        date: '4/28/2024',
        views: 1900,
        likes: 400,
        comments: 70,
        isLiked: true,
        belt: 'Black Belt',
        readTime: '10 min read',
        category: 'Technique',
        dojo: 'Strong Fist Academy',
        content: [
              {
                type: 'text',
                value: 'Advanced kicking techniques require a combination of strength, flexibility, and precision. In this article, we will explore a few dynamic kicks such as the spinning hook kick and the axe kick.'
              },
              {
                  type: 'image',
                  value: 'https://unsplash.it/860/650'
              },
              {
                 type: 'text',
                 value: 'Footwork is also key to landing a powerful kick. Proper stance and weight distribution will ensure the maximum force is applied.'
              }
          ]
   },
];

// Mock Data
export const mockNews = {
    featured: {
      id: 1,
      title: "World Karate Championship 2025: Team Selection Announced",
      description: "In a highly anticipated announcement, the national team roster has been finalized for the upcoming World Karate Championship. The selection includes both veteran champions and promising newcomers, representing various dojos across the country.",
      date: "March 15, 2025",
      category: "Championships",
      imageUrl: "https://source.unsplash.com/random/1200x600",
      readTime: "5 min read"
    },
    trending: [
      {
        id: 2,
        title: "New Training Methodology Revolutionizes Kata Practice",
        description: "Revolutionary approach combines traditional techniques with modern sports science.",
        date: "March 14, 2025",
        category: "Training",
        imageUrl: "https://source.unsplash.com/random/800x600/?martial-arts",
        readTime: "4 min read"
      },
      {
        id: 3,
        title: "Youth Development Program Launches Nationwide",
        description: "Initiative aims to introduce karate to schools across the country.",
        date: "March 13, 2025",
        category: "Community",
        imageUrl: "https://source.unsplash.com/random/800x600/?dojo",
        readTime: "3 min read"
      }
    ],
    latest: [
      {
        id: 4,
        title: "International Seminar: Masters Share Ancient Techniques",
        description: "Leading senseis from Japan conduct exclusive workshops on traditional karate forms.",
        date: "March 12, 2025",
        category: "Events",
        imageUrl: "https://source.unsplash.com/random/800x600/?japanese-martial-arts",
        readTime: "6 min read"
      },
      {
        id: 5,
        title: "Digital Dojo: Virtual Training Platform Launch",
        description: "New online platform brings expert instruction to practitioners worldwide.",
        date: "March 11, 2025",
        category: "Technology",
        imageUrl: "https://source.unsplash.com/random/800x600/?training",
        readTime: "4 min read"
      },
      {
        id: 6,
        title: "Championship Series Dates Announced for 2025",
        description: "Major tournaments scheduled across multiple cities with increased prize pools.",
        date: "March 10, 2025",
        category: "Tournaments",
        imageUrl: "https://source.unsplash.com/random/800x600/?competition",
        readTime: "5 min read"
      }
    ]
  };
  
