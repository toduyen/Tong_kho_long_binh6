import React, { Component } from 'react';
 
class Pure extends React.PureComponent{
    render() { 
        console.log('loading Pure');
        return (
            <div>
                <p>{this.props.data}</p>
            </div>
        );
    }
}
 
export default Pure;