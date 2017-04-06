// @flow

type LabelType = {
  'id': number,
  'url': string,
  'name': string,
  'color': string,
  'default': boolean
};
type Issue = {|
  title: string,
  labels: Array<LabelType>,
  state: string,
  number: number,
  updatedAt: string,
  createdAt: string,
  author: string,
  comments: number
|}
type InitialState = {
  data: Array<Issue>,
  status: 'ERROR' | 'SUCCESS' | 'FETCHING',
  errorMessage?: string
}
const initialState: InitialState = {
  data: [],
  status: 'FETCHING',
  sortBy: 'updated',
  errorMessage: ''
}

export const issuesReducer = (state = initialState, action) => {
  console.log(action.type)

  switch (action.type) {
    case 'FETCH_ISSUES_SUCCESS':
      return {
        ...state,
        data: action.response.map(issueModel),
        status: 'SUCCESS',
        errorMessage: ''
      }
    case 'FETCH_ISSUES_FAILURE':
      return {
        data: [],
        status: 'ERROR',
        errorMessage: 'Failed to load issues from Github.'
      }
    case 'FILTER_ISSUES':
      return {
        ...state,
        sortBy: action.predicate
      }
    default:
      return state
  }
}

function issueModel (issue) {
  return {
    ...issue,
    updatedAt: issue.updated_at,
    createdAt: issue.created_at,
    author: issue.user.login
  }
}
