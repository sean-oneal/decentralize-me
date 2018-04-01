import React, { Component } from 'react'

class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    console.log(this.props.authData)
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>
              <strong>Name:</strong><br />
              {this.props.authData.name}
            </p>
            <p>
              <strong>Email</strong><br />
              {this.props.authData.email}
            </p>
            <p>
              <strong>Phone</strong><br />
              {this.props.authData.phone}
            </p>
            <p>
              <strong>Country</strong><br />
              {this.props.authData.country}
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
