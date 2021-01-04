import bcrypt from 'bcrypt'
import env from '../env'

const genPassword = async (password: string): Promise<string> =>
  await bcrypt.hash(password, env.saltRounds)
const passwordValid = async (
  password: string,
  hashedPassword: string
): Promise<string> => await bcrypt.compare(password, hashedPassword)

export { genPassword, passwordValid }
