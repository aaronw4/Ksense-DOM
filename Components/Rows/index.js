let data = axios.get('https://jsonplaceholder.typicode.com/users')
let table = document.querySelector('table')
let body = document.createElement('tbody')

data.then(result => {
    result.data.forEach(element => {
        let row = document.createElement('tr')

        let username = document.createElement('th')
        username.setAttribute('scope', 'row')
        username.textContent = element.username

        let name = document.createElement('td')
        name.textContent = element.name

        let company = document.createElement('td')
        company.textContent = element.company.name

        let link = document.createElement('td')
        let anchor = document.createElement('a')
        let href = './posts.html?id=' + element.id + '&name=' + element.name
        anchor.setAttribute('href', href)
        anchor.textContent = 'See Posts'
        link.appendChild(anchor)

        row.appendChild(username)
        row.appendChild(name)
        row.appendChild(company)
        row.appendChild(link)
        body.appendChild(row)
    });
})

table.appendChild(body)