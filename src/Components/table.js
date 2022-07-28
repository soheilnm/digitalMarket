import React, { Component } from "react";
export default class Table extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user =>(<tr key={user.id}>{<td >{user.name}</td>}{<td>{user.email}</td>}{<td>{user.address.city} {user.address.street} {user.address.suite}</td>}</tr>))}
          </tbody>
          <tfoot></tfoot>
        </table>
        </>
    );
  }
}
