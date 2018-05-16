import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  state = {
    loaded: false,
    pages: null
  }

  componentDidMount(){
    fetch('http://development/Personal/gatsby-cockpit/cockpit/api/collections/get/pages?token=5fbd100e0ae558966e4e42015a12ad')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({ loaded: true, pages: result.entries })
      })
  }

  render(){
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div>{ this.state.pages ? this.state.pages.map(p => <p> {p.Title} </p>) : "Loading..." }</div>
      </div>
    )
  }
}

export default IndexPage;
