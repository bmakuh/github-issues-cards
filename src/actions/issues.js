export const fetchIssues = (
  repo,
  user,
  deps = { fetch: window.fetch }
) =>
  (dispatch, getState) => {
    return fetch(
      `https://api.github.com/repos/${user}/${repo}/issues?state=all&sort=${getState().issues.sortBy}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      }
    )
      .then(res => res.json())
      .then(res => {
        return dispatch({
          type: 'FETCH_ISSUES_SUCCESS',
          response: res
        });
      })
      .catch(err => {
        // raven call here logErr(err)
        return dispatch({
          type: 'FETCH_ISSUES_FAILURE'
        });
      });
  };

export const sortIssues = (predicate) => (dispatch) => {
    return Promise.resolve(
      dispatch({
        type: 'FILTER_ISSUES',
        predicate
      })
    );
  };
