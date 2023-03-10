let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];

function createCard(cardObj){
    const paints = document.getElementById('paintings')
    const actionFigures = document.getElementById('actionFigures')

    // fazendo as divisoes
    const card = document.createElement('div')
    card.className = "card"
    const figure = document.createElement('figure')
    const article = document.createElement('article')

    // criando conteudo
    const img = document.createElement('img')
    img.src = cardObj.image
    img.alt = `imagem do ${cardObj.name}`

    const h1 = document.createElement('h1')
    h1.innerText = cardObj.name

    const p = document.createElement('p')
    p.innerText = cardObj.price

    // preparando a hierarquia do card
    card.appendChild(figure)
    figure.appendChild(img)

    card.appendChild(article)
    article.appendChild(h1)
    article.appendChild(p)
    
    // colocando no HTML
    if (cardObj.type === 'Painting'){
        return paints.appendChild(card)
    }
    if(cardObj.type === 'Action Figures'){
        return actionFigures.appendChild(card)
    }
}
for(let i = 0; i < itens.length; i++){
    createCard(itens[i])
}