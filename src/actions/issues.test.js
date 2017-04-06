import { fetchIssues } from './issues'

describe('fetchIssues()', () => {
  it('hits the GH API endpoint', () => {
    const fetch = jest.fn()

    const result = fetchIssues('repo', 'user', { fetch })

    expect(fetch)
      .to.have.been.calledWith('https://api.github.com/issues/repo/user')
  })

  it('returns an action object', () => {
    const expected = {
      type: 'FETCH_ISSUES_SUCCESS',
      response: [{ foo: 'bar' }]
    }
    const fetch = jest.fn().returns(expected)

    const result = fetchIssues('repo', 'user', { fetch })

    expect(result).to.deep.equal(expected)
  })

  it('returns a failure action object if the API request fails', () => {
    const expected = {
      type: 'FETCH_ISSUES_FAILURE'
    }
    const fetch = jest.fn().returns(expected)

    const result = fetchIssues('repo', 'user', { fetch })

    expect(result).to.deep.equal(expected)
  })
})
