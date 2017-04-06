import { Header } from './Header'
import React, { Component } from 'react';
import './App.css';
import { Card } from './Card'
import { connect } from 'react-redux'
import { fetchIssues, sortIssues } from './actions/issues'

class App extends Component {
  props: {| data: Array<*> |}

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(fetchIssues('tensorflow', 'tensorflow'))

    this.setState({
      interval: setInterval(() => {
        dispatch(fetchIssues('tensorflow', 'tensorflow'))
      }, 10000)
    })
  }

  componentWillUnmount () {
    window.clearInterval(this.state.interval)
  }

  sort = (event) => {
    const { dispatch } = this.props

    dispatch(sortIssues(event.target.value))
      .then(() => {
        dispatch(fetchIssues('tensorflow', 'tensorflow'))
      })
  }

  render() {
    const { data } = this.props

    return (
      <div className="App">
        <Header />
        <select name="sort" id="sort" onChange={this.sort}>
          <option value="updated">updated</option>
          <option value="created">created</option>
          <option value="comments">comments</option>
        </select>
        <div className="App__card-container">
          {data.map((data, k) =>
            <Card {...data} key={k} />
          )}
        </div>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = (state) => {
  console.log(state)

  return {
    data: state.issues.data
  }
}
export default connect(mapStateToProps)(App)
