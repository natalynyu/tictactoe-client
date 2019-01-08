'use strict'

const config = require('../config')
const store = require('../store')

const showAllCompletedGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (id, index, cellValue, over) => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/JSON',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': index,
            'value': cellValue
          },
          'over': over
        }
      })
  })
}

module.exports = {
  showAllCompletedGames,
  createGame,
  updateGame
}
