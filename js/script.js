function doSomething() {
    return 'truc';
}

// console.log(window.screenX);
// console.log(window.scrollY);



// console.log(document.documentElement.childNodes[2].childNodes[1].childNodes[1]);

// const title = document.getElementById('main-title');
// console.log(title);

// const button = document.getElementById('nav-cta');
// console.log(button);

// const items = document.getElementsByClassName('nav__itm');
// console.log(items[2]);

// const lis = document.getElementsByTagName('li');
// console.log(lis);

// const element = document.querySelectorAll('#header nav li.nav__itm > a');
// console.log(element);

const input = document.querySelector('#contact-form .js-input-machin');
// console.log(input.closest('[data-src]'));

const div = document.createElement('div');
// console.log(div);

const header = document.querySelector('#header');
header.appendChild(div);

// document.querySelector('#header nav li:last-child').remove();

const newLi = document.createElement('li');
const li = document.querySelector('#header nav li:nth-child(2)');
// console.log(newLi, li);

li.parentElement.insertBefore(newLi, li);

newLi.innerHTML = "<ul><li>une sous liste</li></ul>";
newLi.innerText = "ceci est le contenu du li";
// newLi.textContent = "ceci est le contenu du li";

newLi.id = 'my-new-li';
// newLi.style.color = "blue";

// newLi.className = 'nav__itm';
// console.log(newLi.className);


// newLi.className += ' nav__itm--blue';

// newLi.classList.add('nav__itm');
li.classList.add('nav__itm--blue');

// console.log(
//     li.classList.contains('nav__itm')
// );

li.firstElementChild.setAttribute('href', 'page.html');
// console.log(
//     li.firstElementChild.hasAttribute('href')
// );

li.firstElementChild.addEventListener('click', function (event) {
    event.preventDefault();
    const url = event.target.getAttribute('href');
    // console.log(url);

});


let button = document.querySelector('#nav-cta');

console.log(button);

button.id = 'new-cta';
button.setAttribute('type', 'submit');

console.log(button.getAttribute('type'));

const texts = [
    button.innerText,
    button.dataset.textOnclick
];

console.log(texts);

let i = 1;


button.addEventListener('click', function (event) {
    // console.log('BUTTON', event);
    // console.log(this, event.target);
    // event.target.classList.add('green');
    // this.classList.toggle('green');
    this.innerText = texts[i % 2];
    i++;
    event.stopPropagation();
});

button = 42;

document.body.addEventListener('click', function (event) {
    // console.log('BODY', event);
    // console.log(this, event.target);

    // this.classList.add('blue');
});


const btnForm = document.querySelector('[data-open-id]');

btnForm.addEventListener('click', function (e) {
    document.getElementById(this.dataset.openId).classList.toggle('hidden');
});

function addProduct(productData) {
    // const liP = document.createElement('li');
    // liP.classList.add('product__itm');
    // const h3P = document.createElement('h3');
    // h3P.innerText = title;
    // h3P.classList.add('product__ttl');
    // liP.appendChild(h3P);
    // const imgP = document.createElement('img');
    // imgP.classList.add('product__img');
    // imgP.src = imageUrl;
    // imgP.setAttribute('alt', imageAlt);
    // liP.appendChild(imgP);

    // const productHTML = '<li class="product__itm">'
    //     + '<h3 class="product__ttl">' + title + '</h3>'
    //     + '<img class="product__img" src="' + imageUrl + '" alt="' + imageAlt + '">'
    // + '</li>';
    // document.querySelector('#product-list').innerHTML += productHTML;

    const template = document.querySelector('#productTemplate');

    const productElement = document.importNode(template.content, true);

    productElement.querySelector('.js-ttl').innerText = productData.name;
    productElement.querySelector('.js-img').src = productData.imageUrl;
    productElement.querySelector('.js-img').setAttribute('alt', productData.imageAlt);
    
    productElement.querySelector('.js-remove').remove();
    
    document.querySelector('#product-list').appendChild(productElement);
}

const products = [
    {
        name: 'Pommes',
        imageUrl: 'pommes.jpg',
        imageAlt: 'ceci est une pomme',
    },
    {
        name: 'Poires',
        imageUrl: 'poires.jpg',
        imageAlt: 'ceci est une poire',
    },
    {
        name: 'Banane',
        imageUrl: 'banane.jpg',
        imageAlt: 'ceci est une banane',
    }
];

console.table(products);


document.querySelector("#add-product")
    .addEventListener('click', () => addProduct(products.shift()));