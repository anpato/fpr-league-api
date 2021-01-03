const { Team } = require('../db/models')
const { ListTeams, ViewTeam } = require('../utils/TeamQueries')

const getTeams = {
  method: 'get',
  path: '/',
  fn: ListTeams
}

const viewTeam = {
  method: 'get',
  path: '/:team_id',
  fn: ViewTeam
}

module.exports = [getTeams, viewTeam]
