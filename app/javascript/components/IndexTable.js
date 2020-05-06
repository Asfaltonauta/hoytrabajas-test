import React, {Component} from 'react'

class IndexTable  extends Component {

  constructor(props){
    super(props);
  }

  render () {

    const list_users = this.props.listUser;

    return(
      <React.Fragment>
        <table>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
          </tr>
          {list_users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.phone}</td>
              </tr>
            )
          })}
        </table>
      </React.Fragment>
    )
  }
}

export default IndexTable
