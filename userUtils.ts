import * as crypto from 'crypto'
import * as bytes from 'utf8-bytes'

const ACCESS_FROM_USER = 0

export const getUserName = (ak: string, resourceOwnerId: number): string => {
  return Buffer.from(`${ACCESS_FROM_USER}:${resourceOwnerId}:${ak}`).toString(
    'base64'
  )
}

export const getPassword = async (sk: string): Promise<string> => {
  const timestamp: number = Date.now()
  const hmac: crypto.Hmac = crypto.createHmac('sha1', sk).setEncoding('base64')
  return new Promise((resolve, reject) => {
    hmac.end(bytes(timestamp), function() {
      resolve(hmac.read())
    })
  })
}
