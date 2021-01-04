import bcrypt from 'bcrypt'
import env from '../env'

const genUid = async (name: string, id: string): Promise<string> =>
  await bcrypt.hash(name + id + new Date(), env.saltRounds)
const compareUid = async (uid: string, storedUid: string): Promise<string> =>
  await bcrypt.compare(uid, storedUid)

export { genUid, compareUid }
