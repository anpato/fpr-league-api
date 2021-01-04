const { Team, Driver } = require('../db/models')
import { ErrorHandler } from '../middleware/errorHandler'
import { Request, Response, NextFunction } from 'express'

const ListTeams = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const teams = await Team.findAll()
    res.send(teams)
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(400, error.message))
  }
}

const ViewTeam = async (req: Request, res: Response, next: NextFunction) => {
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

export { ListTeams, ViewTeam }
