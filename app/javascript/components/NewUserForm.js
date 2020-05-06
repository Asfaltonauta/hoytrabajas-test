import React, {Component} from 'react'

class NewUserForm extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return(
      <React.Fragment>
        <form className="new_user form" action={this.props.path} accept-charset="UTF-8" method="post">
          <div className="field">
            <label> Name </label>
            <input className="input" type="text" name="user[name]" id="user_name" />
          </div>
          <div className="field">
            <label> Surname </label>
            <input className="input" type="text" name="user[surname]" id="user_surname" />
          </div>
          <div className="field">
            <label> Phone </label>
            <input className="input" type="text" name="user[phone]" id="user_phone" />
          </div>
            <div className="actions">
            <input className="button" type="submit" name ="commit" value="Save" />
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default NewUserForm
