import {callAPI} from './fetchAPI.js';

const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b";
const options  = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}

// const request = callAPI(url, options);

// request.then(renderNEWS);

// const dummyData = {
//     "status": "ok",
//     "totalResults": 38,
//     "articles": [
//         {
//             "source": {
//                 "id": null,
//                 "name": "BusinessLine"
//             },
//             "author": "Anjana P V",
//             "title": "Manjummel Boys Movie: How a new Malayalam movie has made an old Tamil song go viral - BusinessLine",
//             "description": "'Manjummel Boys' Malayalam movie creates box office magic with nostalgic hit song 'Kanmani anbodu kadhalan,' attracting diverse audience.",
//             "url": "https://www.thehindubusinessline.com/news/variety/manjummel-boys-movie-how-a-new-malayalam-movie-has-made-an-old-tamil-song-go-viral/article67913053.ece",
//             "urlToImage": "https://bl-i.thgim.com/public/news/23o04l/article67913110.ece/alternates/LANDSCAPE_1200/Screenshot%202024-03-04%20172642.png",
//             "publishedAt": "2024-03-07T02:35:14Z",
//             "content": "Malayalam movie \r\nManjummel Boys has taken the box office by storm.\r\nA big reason why the survival thriller directed by Chidambaram is on a song not just in Kerala but also in Tamil Nadu and other so… [+2769 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "‘PM, be afraid of God’: Kejriwal on TMC leader under ED scrutiny joining BJP - Hindustan Times",
//             "description": "Former TMC leader Tapas Roy joined the BJP on Wednesday weeks after Enforcement Directorate raided his Kolkata residence. | Latest News India",
//             "url": "https://www.hindustantimes.com/india-news/kejriwal-reacts-to-tmc-leader-under-ed-scrutiny-joining-bjp-pm-modi-be-afraid-of-god-101709774447712.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/Kejriwal-ed_bjp_tapas_roy_1709775987095_1709775987425.jpg",
//             "publishedAt": "2024-03-07T01:53:17Z",
//             "content": "Delhi chief minister Arvind Kejriwal on Wednesday alluded to a connection between the Enforcement Directorate raids at then TMC MLA Tapas Roy in January and his switching to the BJP weeks later. In a… [+1869 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT News Desk",
//             "title": "Modi in Kashmir: Venue draped in tricolour; Omar Abdullah's big claim. 10 points - Hindustan Times",
//             "description": "PM Modi to visit Srinagar for the first time post Article 370 abrogation, to launch projects worth over ₹6,400 crore in agriculture and tourism sectors. | Latest News India",
//             "url": "https://www.hindustantimes.com/india-news/modi-in-kashmir-srinagar-stadium-draped-in-tricolour-omar-abdullahs-big-claim-10-points-101709769433196.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/INDIA-KASHMIR-MODI_1709771668888_1709771669405.JPG",
//             "publishedAt": "2024-03-07T00:54:31Z",
//             "content": "Prime Minister Narendra Modi will be in Srinagar today for the first time since the abrogation of Article 370 that gave special status to Jammu and Kashmir. He will participate in the Viksit Bharat V… [+860 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "Narendra Banad",
//             "title": "Oscars 2024: From Christopher Nolan to Martin Scorsese, a guide to Best Director - Hindustan Times",
//             "description": "Oscars 2024: There’s no doubt Christopher Nolan will take home the prize. But it’s interesting to see two first-time nominees recognised for foreign films. | Hollywood",
//             "url": "https://www.hindustantimes.com/entertainment/hollywood/oscars-2024-from-christopher-nolan-to-martin-scorsese-and-yorgos-lanthimos-a-guide-to-best-director-101709771809631.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/Oscars_Best_Director_1709772473401_1709772496396.jpg",
//             "publishedAt": "2024-03-07T00:54:28Z",
//             "content": "The Oppenheimer juggernaut has ensured that some of the Oscar races are pretty much sewn up, and Director is one of those. Nolans masterpiece has steamrolled through all of the precursor awards and S… [+4119 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "HT Sports Desk",
//             "title": "Shastri, Gavaskar pour their hearts out as BCCI celebrates Ashwin's 100th Test - Hindustan Times",
//             "description": "Legendary India cricketers Anil Kumble, Sunil Gavaskar and Ravi Shastri poured their hearts out for Ashwin who is playing his 100th Test in Dharamsala. | Cricket",
//             "url": "https://www.hindustantimes.com/cricket/ravi-shastri-sunil-gavaskar-pour-their-hearts-out-as-bcci-celebrates-ashwin-beyond-life-and-cricket-on-his-100th-test-101709742822429.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/R_Ashwin_1709743067520_1709743074717.jpg",
//             "publishedAt": "2024-03-07T00:46:11Z",
//             "content": "Ace-spinner Ravichandran Ashwin is all set to join the elite list of players to play the 100th Test for India. The off-spinner has already been labelled as one of the greats to play red-ball cricket … [+2116 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "YouTube"
//             },
//             "author": null,
//             "title": "Welcome NASA's new class of astronauts! - FOX 26 Houston",
//             "description": "The Johnson Space Center welcomes 10 new astronauts with two astronauts from the United Arab Emirates training alongside their NASA counterparts. FOX's Joy A...",
//             "url": "https://www.youtube.com/watch?v=uDSUn8dc0FI",
//             "urlToImage": "https://i.ytimg.com/vi/uDSUn8dc0FI/maxresdefault.jpg",
//             "publishedAt": "2024-03-06T23:48:51Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "Rahul Singh",
//             "title": "India opens key naval base close to Maldives - Hindustan Times",
//             "description": "The base has immense significance not just for the Indian Navy but for maritime security, and strategic posture in the Indo-Pacific, the navy chief said. | Latest News India",
//             "url": "https://www.hindustantimes.com/india-news/india-opens-key-naval-base-close-to-maldives-101709747793027.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/Indian-Naval-officers-seen-during-the-commissionin_1709747785779.jpg",
//             "publishedAt": "2024-03-06T23:27:05Z",
//             "content": "Extending its military presence and reach in the vast Indian Ocean region, India on Wednesday commissioned a new naval base, INS Jatayu, at Minicoy in Lakshadweep islands, with navy chief Admiral R H… [+7530 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "Neeraj Dhankher",
//             "title": "Career Horoscope Today for Mar 07, 2024: Stars predict office conflicts - Hindustan Times",
//             "description": "Daily Horoscope Today, March 07, 2024: Get daily career astrological predictions that will help you prosper at your workplace. | Horoscope",
//             "url": "https://www.hindustantimes.com/astrology/horoscope/career-horoscope-today-for-mar-07-2024-stars-predict-office-conflicts-101709738183719.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/career_horoscope_today_1692787780622_1709738235966.jpg",
//             "publishedAt": "2024-03-06T21:30:18Z",
//             "content": "Aries: Your ability to understand different workplace dynamics can come in handy in solving complex issues today. By articulating your thoughts lucidly during official meetings, you can achieve the o… [+5218 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Livemint"
//             },
//             "author": "AP",
//             "title": "Ex-Google software engineer charged with stealing AI technology while working with Chinese companies | Mint - Mint",
//             "description": "Ex-Google software engineer charged with stealing AI technology while working with Chinese companies",
//             "url": "https://www.livemint.com/news/exgoogle-software-engineer-charged-with-stealing-ai-technology-while-working-with-chinese-companies-11709758658332.html",
//             "urlToImage": "https://images.livemint.com/img/2018/12/28/1600x900/News_-_world_1545994908237.jpg",
//             "publishedAt": "2024-03-06T20:57:37Z",
//             "content": "WASHINGTON (AP) A former software engineer at Google has been charged with stealing artificial intelligence technology from the company while secretly working with two companies based in China, the J… [+3411 chars]"
//         },
//         {
//             "source": {
//                 "id": "the-times-of-india",
//                 "name": "The Times of India"
//             },
//             "author": "Tamaghna Banerjee",
//             "title": "TMC hits back at Modi, points to Bilkis Bano episode in Gujarat - The Times of India",
//             "description": "Trinamool Congress criticizes PM Modi's claims on hanging rapists and accuses BJP of giving rapists 5-star treatment. Mentions BJP's MPs/MLAs with cri",
//             "url": "https://timesofindia.indiatimes.com/city/kolkata/tmc-hits-back-at-modi-points-to-bilkis-bano-episode-in-gujarat/articleshow/108277426.cms",
//             "urlToImage": "https://static.toiimg.com/thumb/msid-108277454,width-1070,height-580,imgsize-1312204,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//             "publishedAt": "2024-03-06T20:46:00Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Techtarget.com"
//             },
//             "author": "Alexander Culafi",
//             "title": "Apple discloses 2 iOS zero-day vulnerabilities - TechTarget",
//             "description": "CVE-2024-23225 and CVE-2024-23296, which bypass kernel memory protections, mark the second and third zero-day vulnerabilities that Apple has disclosed and patched this year.",
//             "url": "https://www.techtarget.com/searchsecurity/news/366572451/Apple-discloses-2-iOS-zero-day-vulnerabilities",
//             "urlToImage": "https://cdn.ttgtmedia.com/rms/onlineimages/mobile_g1243075077.jpg",
//             "publishedAt": "2024-03-06T20:13:49Z",
//             "content": "Apple on Tuesday disclosed two iOS vulnerabilities that it said \"may have been exploited.\"\r\nAs part of the latest security update for iOS 17.4 and iPadOS 17.4, Apple disclosed and released patches fo… [+2553 chars]"
//         },
//         {
//             "source": {
//                 "id": "the-times-of-india",
//                 "name": "The Times of India"
//             },
//             "author": "TOI Entertainment Desk",
//             "title": "Post Anant Ambani-radhika Merchant's pre-wedding gala, Shah Rukh Khan, Salman Khan, Ranveer Singh and oth - TOI Etimes",
//             "description": "Celebrities including Shah Rukh Khan, Salman Khan, Ranveer Singh, Janhvi Kapoor, Shikhar Pahariya, and Arijit Singh were spotted at Jamnagar airport a",
//             "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/post-anant-ambani-radhika-merchants-pre-wedding-gala-shah-rukh-khan-salman-khan-ranveer-singh-and-others-arrive-in-jamnagar-once-again-for-this-reason-see-photos/articleshow/108276519.cms",
//             "urlToImage": "https://static.toiimg.com/thumb/msid-108276519,width-1070,height-580,imgsize-40612,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//             "publishedAt": "2024-03-06T18:44:00Z",
//             "content": null
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Deccan Herald"
//             },
//             "author": "Reuters",
//             "title": "Houthi attacks turn fatal for first time with at least two killed in Gulf of Aden as Gaza ceasefire impasse continues - Deccan Herald",
//             "description": null,
//             "url": "https://www.deccanherald.com/world/in-first-fatal-assault-two-sailors-dead-in-houthi-attack-in-gulf-of-aden-2925383",
//             "urlToImage": "https://images.deccanherald.com/deccanherald%2F2024-03%2F59e3744e-11fd-403d-9269-ff4aa2db2e4a%2F2024newsmlRC2KR5AXZBQ51256186305.jpeg?rect=0%2C0%2C3189%2C1674&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
//             "publishedAt": "2024-03-06T18:13:31Z",
//             "content": "'We are showing flexibility'\r\nHamas pledged to continue to take part in the Cairo talks, but officials in the militant group said a ceasefire must be in place before hostages are freed, Israeli force… [+1770 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "Sandip Sikdar",
//             "title": "Gujarat Giants secure season's first win in WPL 2024 - Hindustan Times",
//             "description": "Openers Mooney and Wolvaardt put together a stand of 140 runs to beat RCB out of the game. | Cricket",
//             "url": "https://www.hindustantimes.com/cricket/openers-beth-mooney-and-laura-wolvaardt-smash-half-centuries-as-gujarat-giants-secure-seasons-first-win-in-wpl-2024-101709748060216.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/PTI03-06-2024-000326B-0_1709748426782_1709748489629.jpg",
//             "publishedAt": "2024-03-06T18:09:57Z",
//             "content": "Having lost all four matches of the 2024 Womens Premier League yet, skipper Beth Mooney decided to take matters into her own gloves. Together with Laura Wolvaardt, the opening pair took the Royal Cha… [+2449 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "India Today"
//             },
//             "author": "Anagha",
//             "title": "'No water to bathe, long queues': Bengaluru locals recount water woes - India Today",
//             "description": "India Today TV spoke to residents of RR Nagar in Bengaluru who said they have to stand in long queues to get water",
//             "url": "https://www.indiatoday.in/cities/bengaluru/story/bengaluru-water-crisis-shortage-rr-nagar-residents-karnataka-2511529-2024-03-06",
//             "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/bengaluru-water-crisis-065537110-16x9_0.jpg?VersionId=kgngHg.3grkdTL45K7vCfeHzjK3FZ9XB",
//             "publishedAt": "2024-03-06T17:46:15Z",
//             "content": "Bengaluru is facing a steep water crisis as borewells in many areas of the city have dried up. The residents are dependent on water tankers for their daily chores which often charge exorbitant amount… [+1567 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "NDTV News"
//             },
//             "author": null,
//             "title": "Missile From Yemen Hits Bulk Carrier In Gulf Of Aden, 2 Dead, 6 Injured - NDTV",
//             "description": "A missile fired from Yemen hit a bulk carrier in the Gulf of Aden on Wednesday, with the crew reporting at least two dead and six wounded, a US official said.",
//             "url": "https://www.ndtv.com/world-news/missile-from-yemen-hits-bulk-carrier-in-gulf-of-aden-2-dead-6-injured-5189693",
//             "urlToImage": "https://c.ndtvimg.com/2023-05/1j0bi46g_cargo-ship-generic-_625x300_27_May_23.jpg",
//             "publishedAt": "2024-03-06T17:31:35Z",
//             "content": "Two crew members were killed and six were injured. (Representational)\r\nWashington: A missile fired from Yemen hit a bulk carrier in the Gulf of Aden on Wednesday, with the crew reporting at least two… [+1624 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hindustan Times"
//             },
//             "author": "Rajee Jayaswal",
//             "title": "Govt notifies provision to let CCI impose penalty on firm’s global turnover - Hindustan Times",
//             "description": "The amendments empowers CCI to impose a penalty on the global turnover of a company derived from all products and services, and not just on turnover derived from the product under investigation",
//             "url": "https://www.hindustantimes.com/business/govt-notifies-provision-to-let-cci-impose-penalty-on-firm-s-global-turnover-101709745030649.html",
//             "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/FILE-PHOTO--According-to-experts--the-new-rules-wi_1709745023759.jpg",
//             "publishedAt": "2024-03-06T17:10:30Z",
//             "content": "NEW DELHI: The government on Wednesday notified amendments in competition laws allowing the Competition Commission of India (CCI) to impose penalty on the global turnover of a company.\r\nFILE PHOTO: A… [+2844 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Livemint"
//             },
//             "author": "Livemint",
//             "title": "International Women's Day 2024: Theme, history, significance and more | Mint - Mint",
//             "description": "The United Nations has decided this year's theme as ‘Invest in Women: Accelerate Progress’ is aimed at tackling economic disempowerment.",
//             "url": "https://www.livemint.com/news/trends/international-womens-day-2024-theme-history-significance-and-more-11709744639315.html",
//             "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/06/1600x900/Womens_Day_1709744904616_1709744917650.jpeg",
//             "publishedAt": "2024-03-06T17:09:19Z",
//             "content": "International Women's Day (IWD) is all set to be celebrated this year on 8 March globally, focusing on recognizing women's social, economic, cultural, and political achievements. On this day, several… [+1954 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "NDTV News"
//             },
//             "author": null,
//             "title": "Nikki Haley Exits US Presidential Campaign, Has A Message For Trump - NDTV",
//             "description": "Republican former UN ambassador Nikki Haley suspended her White House campaign Wednesday, declining to endorse former president Donald Trump but calling on him to earn the support of moderates and independents who backed her in the primary.",
//             "url": "https://www.ndtv.com/world-news/its-now-up-to-trump-nikki-haley-drops-out-of-presidential-campaign-5189296",
//             "urlToImage": "https://c.ndtvimg.com/2024-03/mejs2e8g_nikki-haley-reuters_625x300_06_March_24.jpeg",
//             "publishedAt": "2024-03-06T16:20:44Z",
//             "content": "The 52-year-old was little known outside her native South Carolina.\r\nWashington: Republican former UN ambassador Nikki Haley suspended her White House campaign Wednesday, declining to endorse former … [+1309 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Cricbuzz"
//             },
//             "author": null,
//             "title": "Shanto stars as Bangladesh level series with comfortable win - Cricbuzz",
//             "description": "Sri Lanka set Bangladesh a target of 166, which was chased down in 18.1 overs",
//             "url": "https://www.cricbuzz.com/cricket-news/129763/shanto-stars-as-bangladesh-level-series-with-comfortable-win",
//             "urlToImage": "http://www.cricbuzz.comhttps://static.cricbuzz.com/a/img/v1/600x400/i1/c384059/najmul-hossain-shanto-struck-a.jpg",
//             "publishedAt": "2024-03-06T16:13:08Z",
//             "content": "Najmul Hossain Shanto struck an unbeaten half-century to help Bangladesh win the second T20I © AFP\r\nBangladesh put in an all-round performance to win the second T20I against Sri Lanka by 8 wickets an… [+3166 chars]"
//         }
//     ]
// }
// renderNEWS(dummyData);

function renderNEWS(data){
    const articles = data.articles;
    console.log(articles);

    const parent = document.getElementById('cards');
    articles.forEach((article)=>{
        const card = createCard(article);
        parent.appendChild(card);
    })
}

function createCard(article){
    const card = document.createElement('div');
    const image = createCardImage(article.urlToImage);
    card.appendChild(image);
    const link = createCardTitle(article.title, article.url);
    card.appendChild(link);
    const source = document.createElement('p');
    source.setAttribute('class', 'card-source');
    source.innerText = article.source.name;
    card.appendChild(source);
    card.style=`
        width:230px; 
        padding: 16px; 
        background-color: bisque; 
        border: 1px solid brown;
        border-radius: 8px;
    `;
    return card;
}

function createCardImage(url){
    const image = document.createElement('img');
    image.src = url;
    image.style=`
        max-width:200px;
        max-height: 130px;
        display: block;
        margin: 0 auto;
    `;
    return image;
}

function createCardTitle(txt, url){
    const title = document.createElement('a');
    title.href = url;
    title.innerText = txt;
    title.target = '_blank';
    title.style = `
        display: -webkit-box;
        margin: 12px auto 0;
        overflow: hidden;
        max-width: 220px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
           line-clamp: 2; 
           -webkit-box-orient: vertical;
    `;
    return title;
}