import './drinks.css'

export default function drinks() {
    const section = document.createElement('section');

    const sectionHeader = document.createElement('h1');
    sectionHeader.innerText = 'Drinks'

    const sectionDiv = document.createElement('div');

    const sectionP = document.createElement('p');
    sectionP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Faucibus nisl tincidunt eget nullam non nisi est sit. Quam vulputate dignissim suspendisse in est ante. Nibh tellus molestie nunc non blandit massa enim nec dui. Ultrices in iaculis nunc sed augue lacus viverra vitae. Velit euismod in pellentesque massa placerat. Nullam non nisi est sit amet facilisis magna etiam tempor. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Vitae congue eu consequat ac felis donec et. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ultrices vitae auctor eu augue. Volutpat diam ut venenatis tellus in. Senectus et netus et malesuada fames ac turpis egestas. Nibh ipsum consequat nisl vel pretium lectus. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Maecenas accumsan lacus vel facilisis volutpat est. Ullamcorper sit amet risus nullam eget. At tellus at urna condimentum mattis pellentesque id nibh.'

    section.appendChild(sectionHeader);
    sectionDiv.appendChild(sectionP);
    section.appendChild(sectionDiv);

    return section
};