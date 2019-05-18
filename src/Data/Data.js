import ic_home from './../Assets/images/ic_home.svg'
import ic_money from './../Assets/images/ic_money.svg'
import ic_wee from './../Assets/images/ic_wee.svg'
import ic_payment from './../Assets/images/ic_payment.svg'
import ic_product from './../Assets/images/ic_product.svg'
import ic_chat from './../Assets/images/ic_chat.svg'

import ava_user1 from './../Assets/images/img5.jpg'
import ava_user2 from './../Assets/images/img3.jpg'
import ava_user3 from './../Assets/images/img2.jpg'
import ava_user4 from './../Assets/images/img4.png'
import ava_user5 from './../Assets/images/img1.jpg'


export const listContact = [
    {
        name: 'Justin Nguyen',
        userName: '@justin',
        id: 2016518484521,
        content: 'Wait for minutes',
        time: '3 mins',
        timeActive: 'Last seen 3 hours ago',
        isOnline: true,
        img: ava_user1,
        listChat: [{
                content: 'Hey, how do you feel today ?',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Lorem ipsum dolor sit amet consectetur',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Aliquam nesciunt amet consequatur',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Captain America',
        userName: '@alex',
        id: 6478441515151,
        content: 'Oke ',
        time: '47 mins',
        timeActive: 'Last seen 12 minutes ago',
        isOnline: false,
        img: ava_user2,
        listChat: [{
                content: 'Hey man, are you free time in this affternoon ?',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'consectetur optio',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Hello, are you there',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Chris Hemsworth',
        userName: '@carton',
        id: 411984873181,
        content: 'Thank you for dinner last night',
        time: '5 hr',
        timeActive: 'Last seen 3 hours ago',
        isOnline: true,
        img: ava_user3,
        listChat: [{
                content: 'Lorem ipsum dolor sit amet consectetur',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'bla bla bla',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Lucy Nguyen',
        userName: '@lucynguyen',
        id: 15491031648,
        time: '18 mins',
        content: 'I like that',
        timeActive: 'Last active 1 hourse',
        isOnline: false,
        img: ava_user4,
        listChat: [{
                content: 'You so beautiful',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'So cute!',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Iron Man',
        userName: '@khangle',
        id: 102648498415,
        time: '3 hr',
        content: 'Hey man',
        timeActive: 'Online',
        isOnline: true,
        img: ava_user5,
        listChat: [{
                content: 'What the fuck',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Are you kiding me ?',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Iron Man',
        userName: '@khangle',
        id: 102648498415,
        time: '3 hr',
        content: 'Hey man',
        timeActive: 'Online',
        isOnline: true,
        img: ava_user5,
        listChat: [{
                content: 'What the fuck',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Are you kiding me ?',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Iron Man',
        userName: '@khangle',
        id: 102648498415,
        time: '3 hr',
        content: 'Hey man',
        timeActive: 'Online',
        isOnline: true,
        img: ava_user5,
        listChat: [{
                content: 'What the fuck',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Are you kiding me ?',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Iron Man',
        userName: '@khangle',
        id: 102648498415,
        time: '3 hr',
        content: 'Hey man',
        timeActive: 'Online',
        isOnline: true,
        img: ava_user5,
        listChat: [{
                content: 'What the fuck',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Are you kiding me ?',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
    {
        name: 'Iron Man',
        userName: '@khangle',
        id: 102648498415,
        time: '3 hr',
        content: 'Hey man',
        timeActive: 'Online',
        isOnline: true,
        img: ava_user5,
        listChat: [{
                content: 'What the fuck',
                timeSend: '14:26 PM',
                type: 1
            },
            {
                content: 'Are you kiding me ?',
                timeSend: '14:26 PM',
                type: 1
            },
        ]
    },
]



export const dataMenu = [{
        title: 'Home',
        ic: ic_home,
        url: '/home'
    },
    {
        title: 'Money Tranfers',
        ic: ic_money,
        url: '/transfer'
    },
    {
        title: 'Send or Request Money with',
        ic: ic_wee,

    },
    {
        title: 'Payment',
        ic: ic_payment,
        url: '/payment'

    },
    {
        title: 'Products Services',
        ic: ic_product,
        url: '/product'
    },
    {
        title: 'Chat',
        ic: ic_chat,
        url: '/chat'

    },
]