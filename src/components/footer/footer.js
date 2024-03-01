import './footer.css'
import Avatar from './avatar.png'

export default function footer() {
    const footer = document.createElement('footer');
    footer.innerText = 'Project created by '

    const btn = document.createElement('button');

    const avatar = new Image();
    avatar.src = Avatar;
    avatar.alt = 'Avatar';

    btn.appendChild(avatar);

    const textNode = document.createTextNode('@Hyalskavran');
    btn.appendChild(textNode);

    btn.addEventListener('click', function(){
        window.open('https://github.com/Hyalskavran', '_blank');
    });

    footer.appendChild(btn);

    return footer
};