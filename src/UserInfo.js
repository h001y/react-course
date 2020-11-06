import React from 'react';

import {AuthContext} from './AuthContext';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <AuthContext.Consumer>
                    <div>
                        <div>
                            tgfhf
                        </div>
                        <div>
                            grdfrgdfg
                        </div>
                    </div>

                </AuthContext.Consumer>
        );
    }
}

export default UserInfo;