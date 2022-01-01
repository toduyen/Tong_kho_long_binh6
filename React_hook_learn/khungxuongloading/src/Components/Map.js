import React, {Component} from 'react';
import Skeleton from 'react-loading-skeleton';
class Map extends Component {
    render() {
        return (
            <div
                style={{
                fontSize: 20,
                lineHeight: 2
            }}>
                <p>{this.props.title || <Skeleton/>}</p>
            </div>
        );
    }
}

export default Map;