import { ListTeams, ViewTeam } from '../utils/TeamQueries'
import { controllerOptions } from '../types/controller'
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
let controller: controllerOptions[] = [getTeams, viewTeam]
export default controller
