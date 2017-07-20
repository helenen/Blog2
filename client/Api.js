
const rootEndpoint = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=shakira&api'
// pour simplifier la compréhension de ce tuto, nous renseignons la clé API "en dur"
// ne faites jamais cela au sein de vos projets (voir http://12factor.net/fr/config)
const lastfmApiKey = 'af35042293d040f030ebf1b07911b600&format=json'
const password = '' // la punk API n'utilise aucun mot de passe

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Basic ${authBase64}` // HTTP basic auth
}

// retourne une recette de bière au hasard
export const getRandomBrewdog = () =>
  axios.get(`${rootEndpoint}/beers/random`, { headers })
    .then(({status, json}) => {
      if (status !== 200) throw new Error(`API answered with status code ${status}`) // gestion du status code HTTP
      else return json() // on parse la réponse en JSON
    })
