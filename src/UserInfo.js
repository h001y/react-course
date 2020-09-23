import React from 'react';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                    UserName
                </div>
                <div>
                    UserAvatar
                </div>
            </div>
        );
    }
}

export default UserInfo;