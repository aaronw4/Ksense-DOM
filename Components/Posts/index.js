const paramString = window.location.search
const urlParams = new URLSearchParams(paramString)
const id = urlParams.get('id')

let data = axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
let containter = document.querySelector('div')

data.then(result => {
    result.data.forEach(element => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card postCard')

        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')

        let header = document.createElement('h5')
        header.setAttribute('class', 'card-title')
        header.setAttribute('id', 'articleTitle')
        header.textContent = element.title + ' by ' + urlParams.get('name')

        let article = document.createElement('p')
        article.setAttribute('class', 'card-text')
        article.textContent = element.body

        cardBody.appendChild(header)
        cardBody.appendChild(article)
        card.appendChild(cardBody)
        containter.appendChild(card)
    });
})
