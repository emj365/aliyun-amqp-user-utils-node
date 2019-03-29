import * as crypto from 'crypto'

const ACCESS_FROM_USER = 0

export const getUserName = (ak: string, resourceOwnerId: number): string => {
  return Buffer.from(`${ACCESS_FROM_USER}:${resourceOwnerId}:${ak}`).toString(
    'base64'
  )
}

export const getPassword = (sk: string): string => {
  const timestamp: number = Date.now()
  const signature = crypto
    .createHmac('sha1', timestamp.toString())
    .update(sk)
    .digest('hex')
    .toUpperCase()

  return Buffer.from(`${signature}:${timestamp}`).toString('base64')
}
