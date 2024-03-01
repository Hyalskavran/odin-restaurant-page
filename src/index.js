import './style.css'

import header from './components/header/header'
import home from './components/home/home'
import pizza from './components/pizza/pizza'
import fastfood from './components/fastfood/fastfood'
import drinks from './components/drinks/drinks'
import contact from './components/contact/contact'
import footer from './components/footer/footer'

const componentMap = {
    Home: home,
    Pizza: pizza,
    Fastfood: fastfood,
    Drinks: drinks,
    Contact: contact
}

function body() {
    // Header
    const headerDiv = document.querySelector('header')
    headerDiv.appendChild(header());

    // Main
    const mainDiv = document.querySelector('main')
    mainDiv.appendChild(home());

    // Footer
    document.body.appendChild(footer());

    const links = document.querySelectorAll('.link');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (mainDiv) {
                mainDiv.removeChild(mainDiv.firstChild);

                mainDiv.appendChild(componentMap[link.classList[1]]())
            }
        })
    })
}

body();