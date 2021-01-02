const { Team, Driver } = require('../db/models')
const { ErrorHandler } = require('../middleware/errorHandler')

const ListTeams = async (req, res, next) => {
  try {
    const teams = await Team.findAll()
    res.send(teams)
  } catch (error) {
    return next(new ErrorHandler(400, error.message))
  }
}

const ViewTeam = async (req, res, next) => {
  try {
    const team = await Team.findByPk(req.params.team_id, {
      include: [
        {
          model: Driver,
          as: 'drivers_teams'
        }
      ]
    })
    res.send(team)
  } catch (error) {
    return next(new ErrorHandler(400, error.message))
  }
}

module.exports = {
  ListTeams,
  ViewTeam
}
