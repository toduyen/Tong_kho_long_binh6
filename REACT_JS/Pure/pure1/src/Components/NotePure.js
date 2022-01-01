import React, { Component } from 'react';
 
class NotePure extends Component {
    render() { 
        console.log('loading notPure');
        return (
            <div>
                 <p>{this.props.data}</p>
            </div>
        );
    }
}
 
export default NotePure;