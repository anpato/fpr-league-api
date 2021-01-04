export interface AdminLogin {
  id: string
  name: string
  email: string
  passwordDigest: string
  uId: string
  displayName: string
  createdAt: Date
  updatedAt: Date
}

export interface AdminPayload {
  id: string
  name: string
}
