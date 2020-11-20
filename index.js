const express = require('express')
const showdata = require('./showdata')
const app = express()

app.set('view engine','pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
    return response.render('index',{showdata})
})
app.get('/season/:seasonNum', (request, response)=> {
const seasonNum = request.params.seasonNum
const season = showdata.seasons.find((season)=>season.number===parseInt(seasonNum))

return response.render('seasonpage', {title: showdata.title, season})
})

app.all('*', (request, response) => {
    return response.status(404).send('nothing found here')
})
app.listen(1337, () => {
    console.log('listening on 1337...') // eslint-disable-line no-console
})
