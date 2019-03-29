import * as userUtils from './userUtils'

describe('userUtils', () => {
  describe('getUserName', () => {
    it('should return', () => {
      expect(userUtils.getUserName('ak', 123123123)).toBe(
        'MDoxMjMxMjMxMjM6YWs='
      )
    })
  })

  describe('getPassword', () => {
    var nowMock: jest.Mock

    beforeEach(() => {
      nowMock = jest.spyOn(Date, 'now').mockReturnValue(1000)
    })
    afterEach(() => {
      nowMock.mockReset()
    })

    it('should return', async () => {
      expect(await userUtils.getPassword('sk')).toBe(
        'RTEyMjUzODUwMDg0QjE5ODkwNUE4N0Q3NDI4NTJEMEUwQTZGQTEyMzoxMDAw'
      )
    })
  })
})
