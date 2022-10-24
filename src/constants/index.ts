import profile1 from '../assets/svgs/Img-profile-1.svg'
import profile2 from '../assets/svgs/Img-profile-2.svg'
import profile3 from '../assets/svgs/Img-profile-3.svg'
import profile4 from '../assets/svgs/Img-profile-4.svg'
import profile5 from '../assets/svgs/Img-profile-5.svg'
import profile6 from '../assets/svgs/Img-profile-6.svg'

import hotelIcon from '../assets/svgs/Icon-Hotel.svg'
import travelIcon from '../assets/svgs/Icon-Travel.svg'
import schedulingIcon from '../assets/svgs/Icon-Scheduling.svg'

import brazilImg from '../assets/imgs/Img-Brazil.jpg'
import newZealandImg from '../assets/imgs/Img-New-Zealand.jpg'
import turkeyImg from '../assets/imgs/Img-Turkey.jpg'
import israelImg from '../assets/imgs/Img-Israel.jpg'
import nepalImg from '../assets/imgs/Img-Nepal.jpg'

import chinaImg from '../assets/imgs/Img-China.jpg'
import californiaImg from '../assets/imgs/Img-California.jpg'
import greceImg from '../assets/imgs/Img-Grece.jpg'
import italyImg from '../assets/imgs/Img-Italy.jpg'
import portugualImg from '../assets/imgs/Img-Portugual.jpg'
import canadaImg from '../assets/imgs/Img-Canada.jpg'

interface UsersI {
    id: number,
    name: string,
    comment: string,
    profilePicture: string
}

interface IconsI {
    id: number,
    icon: string,
    title: string,
    text: string
}

interface DoubtsI {
    id: number,
    question: string,
    answer: string
}

interface PlansCountryArrayI {
    id: number,
    name: string,
    city: string,
    text: string,
    img: string
}

interface ExpeditionsCountryArrayI {
    id: number,
    title: string,
    text: string,
    img: string
}

export const users: Array<UsersI> = [
    {
        id: 1,
        name: "José souza",
        comment: "Excellent site, very fast service and acceptable values ​​for the quality they provided me",
        profilePicture: profile1
    },
    {
        id: 2,
        name: "Carlos costa",
        comment: "The service is by far one of the best I've received.",
        profilePicture: profile2
    },
    {
        id: 3,
        name: "Katarina",
        comment: "I come to talk to you after the trip, the plane was really comfortable, I didn't even see the time passing.",
        profilePicture: profile3
    },
    {
        id: 4,
        name: "Robsom fraga",
        comment: "For those who like to travel, this site is one of the best, very cheap, good comfort and great service.",
        profilePicture: profile4
    },
    {
        id: 5,
        name: "Ana luiza",
        comment: "Excellent flight, I did not expect such a service for the price I paid, I was surprised.",
        profilePicture: profile5
    },
    {
        id: 6,
        name: "Matheus santos",
        comment: "I made my first trip out of this site, and I intend to use this site again.",
        profilePicture: profile6
    },
]

export const icons: Array<IconsI> = [
    {
        id: 1,
        icon: hotelIcon,
        title: 'Hotel',
        text: 'Hotels already included'
    },
    {
        id: 2,
        icon: travelIcon,
        title: 'Travel',
        text: '+ 100.000 trips'
    },
    {
        id: 3,
        icon: schedulingIcon,
        title: 'Scheduling',
        text: 'Appointment within 24 hours'
    }
]

export const doubts: Array<DoubtsI> = [
    {
        id: 1,
        question: 'What is the minimum amount to travel?',
        answer: 'Currently the cheapest trip we have is to Italy, even though it is cheap it is one of the most visited countries we have.'
    },
    {
        id: 2,
        question: 'Only coffee is free?',
        answer: 'Yes, in all travel options, we only leave breakfast included'
    },
    {
        id: 3,
        question: 'Which month travel is cheapest?',
        answer: 'Trips are more affordable during non-commemorative seasons or with few holidays, such as January, February and March'
    },
    {
        id: 4,
        question: 'Why some trips were unavailable?',
        answer: 'Due to covid, some countries have blocked the entry of immigrants'
    },
    {
        id: 5,
        question: 'Is hosting free?',
        answer: 'Yes, the value is already included in the contracted plan'
    },
    {
        id: 6,
        question: 'The price of the plan is round trip?',
        answer: 'Yes, it is included from breakfast, to round trip and accommodation'
    }
]

export const PlansCountryArray: Array<PlansCountryArrayI> = [
    {
        id: 1,
        name: "China",
        city: "Hong Kong",
        text: "The city with the most skyscrapers on the planet, Hong Kong is a 'must' for tourists. The land of Bruce Lee guarantees many activities for those looking for the best places to travel in the world.",
        img: chinaImg
    },
    {
        id: 2,
        name: "California",
        city: "San francisco",
        text: "San Francisco is increasingly on the world gastronomy scene. In addition, enjoying a day on the city's cable cars and visiting Alcatraz prison are essential tours.",
        img: californiaImg
    },
    {
        id: 3,
        name: 'Grece',
        city: 'Atenas',
        text: 'Natural beauties, history, gastronomy, excellent weather especially in the European summer and the receptivity of the local people are just some of the reasons.',
        img: greceImg
    },
    {
        id: 4,
        name: 'Italy',
        city: 'Roma',
        text: 'The country has a little bit of everything in its extension: mountains, snow, lakes, crystalline beaches, old cities with charming architecture, medieval fortresses, wineries as far as the eye can see.',
        img: italyImg
    },
    {
        id: 5,
        name: 'Portugual',
        city: 'Lisbon',
        text: 'Bring together history, architectural beauty and incredible landscapes, wonderful food and one of the best value for money among European countries.',
        img: portugualImg
    },
    {
        id: 6,
        name: 'Canada',
        city: 'Ottawa',
        text: 'Cutting through the city is the fascinating Rideau Canal. Considered a UNESCO World Heritage Site, it is a famous tourist spot that brings great pride to Canadians.',
        img: canadaImg
    },
]

export const ExpeditionsCountryArray: Array<ExpeditionsCountryArrayI> = [
    
    {
        id: 1,
        title: "New zealand",
        text: "New Zealand becomes even more interesting with each day you spend there. The grandiose landscapes and the mystery that surrounds the place have always piqued the curiosity of travelers from all over the world, who see the country as a destination full of possibilities.",
        img: newZealandImg
    },
    {
        id: 2,
        title: 'Turkey',
        text: 'With paradisiacal beaches, adventure tourism, quality cuisine, among many other reasons that make Turkey one of the most desired countries by travelers from all over the world.',
        img: turkeyImg
    },
    {
        id: 3,
        title: "Brazil",
        text: "The wonderful city never leaves anything to be desired, especially in the year of the Olympics. If you already know Rio de Janeiro and want a different route to enjoy the city, we made a post with several tips   to make the most of it.",
        img: brazilImg
    },
    {
        id: 4,
        title: 'Israel',
        text: 'Beautiful natural landscapes ranging from the Negev Desert to the surreal Dead Sea; cosmopolitan and trendy Tel-Aviv, amazing beaches along the entire coast; in addition to the famous religious tour that involves the country.',
        img: israelImg
    },
    {
        id: 5,
        title: 'Nepal',
        text: 'The highest mountain in the world. In Kathmandu, capital of the country, there are Swayambhunath, a Buddhist temple that houses some monkeys, Boudhanath, a huge Buddhist stupa, and Pashupatinath, with Hindu temples and crematoria.',
        img: nepalImg
    }
]