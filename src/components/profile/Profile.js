import './Profile.css';
import React from 'react';
import faker from 'faker';

class Profile extends React.Component {
  
  render() {
      return (
      <div className="profile">
        <div className="panel panel-default">
        <div className="panel-heading" style={{backgroundColor: 'aqua'}}></div>
            <div className="panel-body">
                <img src={faker.image.avatar()} alt="avatar"/>
            </div>
            <div className="panel-footer">
                <h3>Raise Title here</h3>
                <div>City, State</div>
            </div>
        </div>
      </div>
      )
  }

}

export default Profile;