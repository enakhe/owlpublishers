export const pages = [
    {
        name: 'Home',
        route: '/',
    },

    {
        name: 'Memebership',
        route: '/memebership',
    },

    {
        name: 'Write',
        route: '/write',
    },

    {
        name: 'Pricing',
        route: '/pricing',
    },
];

export const tags = [
    "For you",
    "Entertainment",
    "News",
    "Book",
    "Technology",
    "Sport",
    "Business",
    "Science",
    "Health"
]

export const popular = [
    {
        img: 'https://media.istockphoto.com/id/1359497811/photo/ecclesiastes-holy-bible-old-testament-open-book-close-up.jpg?s=612x612&w=0&k=20&c=34pOcWKDf8kcvII7x8AfISCUZ3Ygjq8OEnWo90JzaL4=',
        title: 'Ecclesiastes: Everything is Vanity',
    },

    {
        img: 'https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=612x612&w=0&k=20&c=AYbLDdBrLrV7qgPWuVIFBh6-dyP6kzmJWFTDlJSDeeI=',
        title: "Romans: God's Righteousness"
    },

    {
        img: 'https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=612x612&w=0&k=20&c=AYbLDdBrLrV7qgPWuVIFBh6-dyP6kzmJWFTDlJSDeeI=',
        title: 'Your Beliefs Shape Your Identity'
    }
];

export const trending = [
    {
        img: 'https://media.istockphoto.com/id/1359497811/photo/ecclesiastes-holy-bible-old-testament-open-book-close-up.jpg?s=612x612&w=0&k=20&c=34pOcWKDf8kcvII7x8AfISCUZ3Ygjq8OEnWo90JzaL4=',
        title: 'Marvin: Everything is Vanity',
    },

    {
        img: 'https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=612x612&w=0&k=20&c=AYbLDdBrLrV7qgPWuVIFBh6-dyP6kzmJWFTDlJSDeeI=',
        title: "Romans: God's Righteousness"
    },

    {
        img: 'https://media.istockphoto.com/id/1322913815/photo/young-bearded-businessman-sitting-on-desk-and-posing.jpg?s=612x612&w=0&k=20&c=AYbLDdBrLrV7qgPWuVIFBh6-dyP6kzmJWFTDlJSDeeI=',
        title: 'Your Beliefs Shape Your Identity'
    }
];

export const articles = [
    {
        topic: 'Mount Everest Is The Tallest Mountain In The World',
        description: 'Mount Everest is the tallest mountain in the world, with a peak that stands at 8,848 meters (29,031 feet) above sea level. It is located in the Himalayas, on the border between Nepal and China.',
        imgPath:
            'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        topic: 'The Solar System',
        description: 'The solar system is a vast collection of objects that orbit the Sun. It includes the Sun, eight planets, dwarf planets, moons, asteroids, comets, and dust.',
        imgPath:
            'https://media.istockphoto.com/id/1295851454/photo/earth-and-solar-system-planets.jpg?s=612x612&w=0&k=20&c=OKx3C55qBrlC7LISNSnUngKyaNrzLOOE2btTcITVaLs=',
    },
    {
        topic: 'Bali, Indonesia',
        description: 'Bali is an island in Indonesia that is known for its beautiful beaches, lush rice paddies, and vibrant culture. The island is home to a mix of Hindu and Muslim influences, and this is reflected in the architecture, art, and music of Bali.',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        topic: 'The Amazon Rainforest',
        description: 'The Amazon rainforest is the largest rainforest in the world. It is home to a vast array of life, including trees, plants, animals, and insects. It is home to a vast array of life, including trees, plants, animals, and insects',
        imgPath:
            'https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

export const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],
        ['link', 'image'],                                 // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']
    ],
}

export const styles = {
    borderColor: 'red'
}

export const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'align',
]