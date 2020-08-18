import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const book = {
    'name': 'OpenIntro Statistics',
    'shortDescription': 'A complete foundation for Statistics',
    'pagesNum': '422',
    'language': 'eng',
    'progress': '50%',
    'urlPic': 'https://d2sofvawe08yqg.cloudfront.net/openintro-statistics/hero?1560058041',
    'authors': [
        {
            'authorId': '1',
            'authorName': 'Jeff Geerling',
            'eMail': 'jeff@geerling.com',
            'avatarUrl': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/209668/original/Social_Media_800px.jpg?1539382677',
            'about': 'Jeff Geerling is a developer who has worked in programming and DevOps-related positions for companies with thousands of servers. He also manages infrastructure for services offered by Midwestern Mac, LLC, and has been using Ansible to manage infrastructure since early 2013, and Kubernetes since 2017.'
        },
        {
            'authorId': '2',
            'authorName': 'Roberto Vitillo ',
            'eMail': 'Roberto@Vitillo.com',
            'avatarUrl': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/672223/original/profile-pic.jpg?1592138365',
            'about': 'Hi! My name is Roberto Vitillo. I have over 15 years’ experience in the tech industry as a software engineer, tech lead, and manager.\n\nIn 2017 I joined Microsoft to work on an internal data platform as a SaaS product. Since then, I have helped launch two public SaaS products, Product Insights and Playfab. The data pipeline I am responsible for is one of the largest in the world. It processes millions of events per second from billions of devices worldwide.\n\nBefore that, I worked for Mozilla, where I wore different hats, from performance engineer to data platform engineer. What I am most proud of is having set the direction of the data platform from its very early days and built a large part of it, including the team.'
        },
        {
            'authorId': '3',
            'authorName': 'Roger D. Peng ',
            'eMail': 'Roger@Peng.com',
            'avatarUrl': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/252949/original/headshot_square.png?1425585380',
            'about': 'Roger D. Peng is a Professor of Biostatistics at the Johns Hopkins Bloomberg School of Public Health where his research focuses on the development of statistical methods for addressing environmental health problems. He is the author of the popular book R Programming for Data Science and nine other books on data science and statistics. He is also the co-creator of the Johns Hopkins Data Science Specialization, the Simply Statistics blog where he writes about statistics for the public, the Not So Standard Deviations podcast with Hilary Parker, and The Effort Report podcast with Elizabeth Matsui. Roger is a Fellow of the American Statistical Association and is the recipient of the Mortimer Spiegelman Award from the American Public Health Association, which honors a statistician who has made outstanding contributions to public health. He can be found on Twitter and GitHub at @rdpeng.'
        },
        {
            'authorId': '4',
            'authorName': 'Gregor Hohpe ',
            'eMail': 'Gregor@Hohpe.com',
            'avatarUrl': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/341672/original/gregor_hohpe_hires.jpg?1579927914',
            'about': 'Gregor Hohpe advises CTOs and senior IT executives on IT strategy, cloud architecture, and organizational transformation. He served as advisor to the Singapore government, chief architect at Allianz SE, and technical director at Google Cloud’s CTO Office.'
        }
    ],
    'minPrice':'$15.99' ,
    'expectPrice':'$15.99',
    'takenBill':'$200',
    'WaitingBill':'$500',
    'subscribers': '489',
    'hotPngImg': 'http://cdn.onlinewebfonts.com/svg/img_343770.png'
}

ReactDOM.render(
    <App book={book} />,
    document.getElementById('root')
);