import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const book = {
    'name': 'Ansible for DevOps' ,
    'shortDescription': 'Server and configuration management for humans',
    'pagesNum': '443',
    'language': 'eng',
    'progress': '100%',
    'urlPic': 'https://d2sofvawe08yqg.cloudfront.net/ansible-for-devops/hero?1589381387',
    'authors': {
        'authorName': 'Jeff Geerling' ,
        'eMail': 'jeff@geerling.com' ,
        'avatarUrl': 'https://d39qdlcrvnra4b.cloudfront.net/avatars/209668/original/Social_Media_800px.jpg?1539382677' ,
        'about': 'Jeff Geerling is a developer who has worked in programming and DevOps-related positions for companies with thousands of servers. He also manages infrastructure for services offered by Midwestern Mac, LLC, and has been using Ansible to manage infrastructure since early 2013, and Kubernetes since 2017.'
    },
    'minPrice': '$9.99' ,
    'expectPrice': '$9.99',
    'takenBill': '$9.99',
    'WaitingBill': '$7.99'
};

ReactDOM.render(
    <App book={book} />,
    document.getElementById('root')
);