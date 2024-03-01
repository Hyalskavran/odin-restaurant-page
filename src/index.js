import './style.css'

import header from './components/header/header'
import home from './components/home/home'
import footer from './components/footer/footer'

function body() {
    document.body.appendChild(header());
    document.body.appendChild(home());
    document.body.appendChild(footer())
}

body();