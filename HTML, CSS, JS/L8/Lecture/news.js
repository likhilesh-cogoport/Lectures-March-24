import { callAPI } from "./fetchAPI.js";

// const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b";

// const options = {
//     headers:{
//         'Access-Control-Allow-Origin': '*',
//     }
// }
// const request = callAPI(url, options);
// request.then((data)=>{
    // renderUI(data);
// })
const dummyData = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Foo Yun Chee",
            "title": "As Big Tech scrambles to meet EU rules, investigations seen as likely - Reuters",
            "description": "Google, Apple, Amazon, Microsoft, Meta and TikTok owner ByteDance have scrambled over the last six months to comply with landmark EU tech rules that come into force on Thursday, from overhauling online platforms to backroom engineering.",
            "url": "https://www.reuters.com/technology/big-tech-scrambles-meet-eu-rules-investigations-seen-likely-2024-03-07/",
            "urlToImage": "https://www.reuters.com/resizer/WHyte42dJH0D0EeyzWVkjSGbjfg=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DZ4Q5WCSQNLXBIZIAX5GSGAPX4.jpg",
            "publishedAt": "2024-03-07T11:44:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Nitya Thirumalai, Kamalika Sengupta",
            "title": "‘At Ease’ With Bengal Police, ‘On Guard’ With CBI: The 180-Degree Change in Shajahan Sheikh’s Body Language - News18",
            "description": "The body language of suspended TMC leader Shajahan Sheikh has undergone a 180-degree change a week since his first court appearance in the custody of Bengal Police on February 29 to his appearance on Wednesday night for a medical check-up in CBI custody",
            "url": "https://www.news18.com/politics/at-ease-with-bengal-police-on-guard-with-cbi-the-180-degree-change-in-shajahan-sheikhs-body-language-8806349.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/03/shajahan-sheikh-2024-03-fe03efd087d69f64a3beeca1559ac66b-16x9.png?impolicy=website&width=1200&height=675",
            "publishedAt": "2024-03-07T11:38:13Z",
            "content": "February 29 Confident, assured, brazen even. March 6 Tensed, muted, furtive. The body language of Shajahan Sheikh has undergone a 180-degree change a week since his first court appearance in the cust… [+2586 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Kashmir: Modi hails tourism dividend on first visit since imposing direct rule - BBC.com",
            "description": "PM Narendra Modi removed the semi-autonomous status of India's only Muslim-majority state in 2019.",
            "url": "https://www.bbc.com/news/world-asia-india-68487461",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/73F5/production/_132858692_modi1.jpg",
            "publishedAt": "2024-03-07T11:37:30Z",
            "content": "Narendra Modi visited Srinagar for the first time since Jammu and Kashmir was stripped of its special status\r\nIndian-administered Kashmir has been transformed economically since it was stripped of it… [+4818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Wherever You Contest...\": Mamata Banerjee Dares Ex Judge Who Joined BJP - NDTV",
            "description": "Former Calcutta High Court judge Abhijit Gangopadhyay, who joined the BJP today, has come under a ballistic attack by West Bengal Chief Minister and Trinamool Congress chief Mamata Banerjee.",
            "url": "https://www.ndtv.com/india-news/mamata-banerjee-abhijit-gangopadhyay-wherever-you-contest-mamata-banerjee-dares-ex-judge-who-joined-bjp-5194084",
            "urlToImage": "https://c.ndtvimg.com/2024-03/oce4cc58_mamata-abhijit-gangopadhyay_625x300_07_March_24.jpg",
            "publishedAt": "2024-03-07T11:31:41Z",
            "content": "Mamata Banerjee slammed Abhijit Gangopadhyay on the day he joined BJP\r\nKolkata: Former Calcutta High Court judge Abhijit Gangopadhyay, who joined the BJP today, has come under a ballistic attack by W… [+2335 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "India vs England Highlights, 5th Test Day 1: Rohit Sharma, Shubman Gill Put India In Driving Seat At Stumps - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMijAFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pbmRpYS12cy1lbmdsYW5kLTIwMjQvaW5kaWEtdnMtZW5nbGFuZC1saXZlLXNjb3JlLTV0aC10ZXN0LW1hdGNoLWRheS0xLTA3LW1hcmNoLTIwMjQtaW5kLXZzLWVuZy1saXZlLXVwZGF0ZXMtNTE4OTM3NNIBkgFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pbmRpYS12cy1lbmdsYW5kLTIwMjQvaW5kaWEtdnMtZW5nbGFuZC1saXZlLXNjb3JlLTV0aC10ZXN0LW1hdGNoLWRheS0xLTA3LW1hcmNoLTIwMjQtaW5kLXZzLWVuZy1saXZlLXVwZGF0ZXMtNTE4OTM3NC9hbXAvMQ",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-03-07T11:26:56Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Parrot Fever Outbreak In Europe: Know Symptoms, Causes, Treatment And More - NDTV",
            "description": "Parrot fever is caused by bacteria belonging to the Chlamydia family. As the name suggests, the disease is acquired from birds.",
            "url": "https://www.ndtv.com/health/parrot-fever-outbreak-in-europe-know-symptoms-causes-treatment-and-more-5193841",
            "urlToImage": "https://c.ndtvimg.com/2021-01/3gm7dq_fever_625x300_05_January_21.jpg",
            "publishedAt": "2024-03-07T10:55:59Z",
            "content": "Psittacosis is also known as parrot fever\r\nThe World Health Organisation has reported a severe outbreak of psittacosis, also known as parrot fever, in several European countries. CNN has also reporte… [+2241 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "etimes.in",
            "title": "When is the right time to drink water? - The Times of India",
            "description": "​While staying adequately hydrated throughout the day is essential, there are certain times when drinking water can be particularly beneficial.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/experts-say-this-is-the-right-time-to-drink-water/photostory/108297766.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108297978,imgsize-422307,width-900,height-1200,resizemode-6/108297978.jpg",
            "publishedAt": "2024-03-07T10:44:09Z",
            "content": "Opt for clean, filtered water free of contaminants, and aim to drink at least 8-10 glasses (64-80 ounces) of water per day, adjusting based on individual factors such as activity level, climate, and … [+14 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Christin Mathew Philip",
            "title": "Bengaluru water crisis: Karnataka caps tariffs for private water tankers - Moneycontrol",
            "description": "Transport department officials seized 163 private water tankers in Bengaluru since March 2.",
            "url": "https://www.moneycontrol.com/news/technology/bengaluru-water-crisis-karnataka-caps-tariffs-for-private-water-tankers-12419501.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/03/IMG-20240306-WA0048-770x347.jpg",
            "publishedAt": "2024-03-07T10:40:56Z",
            "content": "The Karnataka government has fixed tariffs for water supplied by private tanker operators registered with the civic authorities to prevent them from overcharging residents of Bengaluru who are grappl… [+5018 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Umpire Marais Erasmus to retire after second New Zealand-Australia Test - ESPNcricinfo",
            "description": "He will finish his international career having stood as an on-field umpire in 82 men's Tests, 124 men's ODIs, 43 men's T20Is and 18 women's T20Is",
            "url": "https://www.espncricinfo.com/story/umpire-marais-erasmus-to-retire-after-second-new-zealand-australia-test-1423882",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/292300/292328.6.jpg",
            "publishedAt": "2024-03-07T10:36:23Z",
            "content": "NewsHe will finish his international career having stood as an on-field umpire in 82 men's Tests, 124 men's ODIs, 43 men's T20Is and 18 women's T20Is"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Dreaming of space? NASA now accepting astronaut applications; Know requirements for signing up - HT Tech",
            "description": "NASA has announced the opening of applications for aspiring astronauts, offering the chance to participate in missions to the moon and potentially Mars. Know the requirements for signing up for NASA’s space missions.",
            "url": "https://tech.hindustantimes.com/tech/news/dreaming-of-space-nasa-now-accepting-astronaut-applications-know-requirements-for-signing-up-71709803225872.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2024/03/07/1600x900/6_1708610681378_1709803407582.jpg",
            "publishedAt": "2024-03-07T09:25:26Z",
            "content": "NASA has called for new astronauts, offering the opportunity to journey to the moon and potentially even Mars! With applications due on April 2, U.S. citizens with a passion for space exploration are… [+2564 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Entertainment Desk",
            "title": "Reason behind Karan Johar's absence from Ambani bash in Jamnagar revealed! - TOI Etimes",
            "description": "Karan Johar's absence from the star-studded pre-wedding celebrations of Anant Ambani and Radhika Merchant in Jamnagar raised eyebrows among fans and o",
            "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/reason-behind-karan-johars-absence-from-ambani-bash-in-jamnagar-revealed/articleshow/108295073.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108295073,width-1070,height-580,imgsize-24436,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-07T09:17:00Z",
            "content": "From Trisha's curly locks to Samantha's short hairdo: Stunning hairstyles inspired by South Indian actresses"
        },
        {
            "source": {
                "id": null,
                "name": "WION"
            },
            "author": null,
            "title": "Major breakthrough in elephant stem cell can help in de-extinction of woolly mammoth - WION",
            "description": "Colossal Biosciences, a de-extinction company, has announced a significant stem cell breakthrough in elephants, potentially bringing researchers one step closer to reviving long-extinct woolly mammoths.",
            "url": "https://www.wionews.com/science/major-breakthrough-in-elephant-stem-cell-can-help-in-de-extinction-of-woolly-mammoth-697564",
            "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/03/07/416787-untitled-design-2024-03-07t131204633.png",
            "publishedAt": "2024-03-07T09:00:06Z",
            "content": "Colossal Biosciences, a de-extinction company, has announced a significant stem cell breakthrough in elephants, potentially bringing researchers one step closer to reviving long-extinct woolly mammot… [+3160 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Prabhas and Disha Patani shoot for a song from Kalki 2898 AD in Italy - Hindustan Times",
            "description": "Actors Prabhas and Disha Patani went to Italy with director Nag Ashwin and team to shoot for a peppy number.",
            "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/prabhas-and-disha-patani-shoot-for-a-song-from-kalki-2898-ad-in-italy-101709797065429.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/Prabhas_Disha_Patani_1709801420622_1709801443059.jpg",
            "publishedAt": "2024-03-07T08:52:36Z",
            "content": "Director Nag Ashwins Prabhas, Deepika Padukone-starrer Kalki 2898 AD is nearing completion. The film, which will be released on May 9, will also see Amitabh Bachchan, Kamal Haasan, and Disha Patani i… [+2066 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"It Means He Is...\": Smriti Irani On Buzz Rahul Gandhi To Contest 2 Seats - NDTV",
            "description": "Smriti Irani on Wednesday mocked the Congress for the \"delay\" in announcing its candidate from the constituency, saying it appears that they have realised the power of Amethi and the fear of defeat is haunting that party.",
            "url": "https://www.ndtv.com/india-news/it-means-he-is-smriti-irani-on-buzz-rahul-gandhi-to-contest-2-seats-5188318",
            "urlToImage": "https://c.ndtvimg.com/2023-06/ahfivh88_smriti-irani_625x300_23_June_23.jpg",
            "publishedAt": "2024-03-07T08:43:56Z",
            "content": "\"Their fear of defeat,\" Smriti Irani said on Congress's 'delay' in naming Amethi candidate.\r\nAmethi, Uttar Pradesh: Union Minister and local MP Smriti Irani on Wednesday mocked the Congress for the \"… [+2671 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Scott Kanowsky",
            "title": "Futures lower, Powell testimony, NYCB's cash infusion - what's moving markets By Investing.com - Investing.com",
            "description": "Futures lower, Powell testimony, NYCB's cash infusion - what's moving markets",
            "url": "https://www.investing.com/news/economy/futures-lower-powell-testimony-nycbs-cash-infusion--whats-moving-markets-3327981",
            "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEJ6G0R4_L.jpg",
            "publishedAt": "2024-03-07T08:34:00Z",
            "content": "Investing.com -- U.S. stock futures point to a negative start on Wall Street, as markets prepared for more testimony from Federal Reserve Chair Jerome Powell. Retailers Costco (NASDAQ:COST) and Kroge… [+5579 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Preeti Singh, Anup Roy, Ashutosh Joshi",
            "title": "India Roils Market With New Crackdowns on IPO Financing, Gold - Bloomberg",
            "description": "It’s been another heart-stopping week for financial firms caught up in India’s widening crackdown on the sector.",
            "url": "https://www.bloomberg.com/news/articles/2024-03-07/india-roils-market-with-new-crackdowns-on-ipo-financing-gold",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFJ5Hog0sxRc/v0/1200x845.jpg",
            "publishedAt": "2024-03-07T08:16:07Z",
            "content": "Sign up for the India Edition newsletter by Menaka Doshi an insider's guide to the emerging economic powerhouse, and the billionaires and businesses behind its rise, delivered weekly.\r\nIts been anoth… [+95 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Avishek Banerjee",
            "title": "PV retail sales rise 12% at 3,30,107 units in February 2024: FADA data - Moneycontrol",
            "description": "Passenger Vehicles marked the highest ever February sales driven by new product introductions and enhanced vehicle availability, as per the auto retail body",
            "url": "https://www.moneycontrol.com/news/business/pv-retails-up-by-12-at-330107-units-in-february-2024-says-fada-data-12414691.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/11/cars-770x433.png",
            "publishedAt": "2024-03-07T08:08:16Z",
            "content": "As per the data shared by Federation of Automobile Dealers Associations (FADA), Passenger Vehicle (PV) segment witnessed a 12 percent Year-on-Year (YoY) growth in February 2024 at 3,30,107 units vis-… [+3798 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Tech Desk",
            "title": "Vivo V30, V30 Pro smartphones with 50MP selfie camera, 80W fast charging launched: Price, offers and more - The Times of India",
            "description": "Vivo V30 and Vivo V30 Pro are launched in India with FHD+ display, AMOLED curved screen, and 50MP front camera. HDFC bank and SBI users get an upgrade",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/vivo-v30-v30-pro-smartphones-with-50mp-selfie-camera-80w-fast-charging-launched-price-offers-and-more/articleshow/108292545.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-108292531,width-1070,height-580,imgsize-44192,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-03-07T08:08:00Z",
            "content": "5G smartphones with 10GB or more RAM under Rs 25,000"
        },
        {
            "source": {
                "id": null,
                "name": "Advanced Science News"
            },
            "author": "Becki Robins",
            "title": "Low-cost, portable test detects heavy metals in water - Advanced Science News",
            "description": "Using electrochemical sensors, this new device can be used to combat water pollution by detecting heavy metals, like lead.",
            "url": "https://www.advancedsciencenews.com/low-cost-portable-test-detects-heavy-metals-in-water/",
            "urlToImage": "https://www.advancedsciencenews.com/wp-content/uploads/2024/03/flyd-DaUiD0L0Du8-unsplash.jpg",
            "publishedAt": "2024-03-07T08:00:43Z",
            "content": "Polluted water causes around 1.8 million deaths every year, and contributes to chronic health problems, like skin diseases, reproductive issues, and neurological disorders. People living in disadvant… [+3838 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-aiff.com"
            },
            "author": null,
            "title": "Igor Stimac announces list of probables for FIFA World Cup qualifiers against Afghanistan - AIFF",
            "description": null,
            "url": "https://www.the-aiff.com/article/igor-stimac-announces-list-of-probables-for-fifa-world-cup-qualifiers-against-afghanistan",
            "urlToImage": null,
            "publishedAt": "2024-03-07T07:17:20Z",
            "content": "AIFF Media Team\r\nNEW DELHI: The Indian senior men's team head coach Igor Stimac, on Thursday, March 7, 2024, announced a list of 35 probables for the two matches against Afghanistan in the Round 2 of… [+990 chars]"
        }
    ]
}
renderUI(dummyData);

function renderUI(data){
    const articles = data.articles;
    const parent = document.getElementById('news-cards');
    articles.forEach((article) => {
        const card = createCard(article);
        parent.appendChild(card);
    })
}

function createCard(article){
    console.log(article);
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    // create Image
    const image = document.createElement('img');
    image.src = article.urlToImage;
    image.setAttribute('class', 'card-image');

    // title
    const title = document.createElement('a');
    title.setAttribute('class', 'card-title');
    title.href = article.url;
    title.innerText = article.title;
    title.target = '_blank';

    // source
    const source = document.createElement('p');
    source.innerText = article.source.name;
    source.setAttribute('class', 'card-source');

    card.appendChild(source);
    card.appendChild(image);
    card.appendChild(title);
    return card;
}
