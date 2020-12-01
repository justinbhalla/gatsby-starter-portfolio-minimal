module.exports = {

    author: "@justinlev",
    siteTitle: "Justin Lev's Portfolio",
    siteShortTitle: "Justin", // Used as logo text in header, footer, and splash screen
    siteDescription: "I work on abything related to software, ecommerece and marketing.",
    siteUrl: "https://Justin-Portfolio.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@realjustinlev",
   // mediumRssFeed: "https://medium.com/feed/@justinbhalla28",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/justin-bhalla/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@justin-lev"
        },
        {
            name: "Github",
            url: "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal"
        },
        {
            name: "Behance",
            url: "https://www.behance.net/konstanmnster"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Features",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}
