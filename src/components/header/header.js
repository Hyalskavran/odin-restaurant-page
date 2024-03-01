import './header.css'

import Home from './home.svg'
import Pizza from './pizza.svg'
import Fastfood from './fastfood.svg'
import Drinks from './drinks.svg'
import Contact from './contact.svg'

export default function header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const liList = [['Home', Home], ['Pizza', Pizza], ['Fastfood', Fastfood], ['Drinks', Drinks], ['Contact', Contact]];

    header.appendChild(nav);
    nav.appendChild(ul);

    for (let element of liList) {
        const li = document.createElement('li');

        const button = document.createElement('button');
        button.innerHTML = element[0];

        const image = new Image();
        image.src = element[1];
        image.alt = element[0];

        button.appendChild(image);
        li.appendChild(button);
        ul.appendChild(li);
    }

    return header
};