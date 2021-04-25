import React from 'react';
import './List.css';

class List extends React.Component {
    render() {
        return (
            <div className="card mx-auto my-3" style={{ width: 50 + 'rem' }}>
                <div className="card-body justify-content-center align-items-center" >
                    <h5 className="card-title text-left">Results:</h5>
                    <ul className="mx-auto" style={{ width: 70 + '%' }}>
                        {this.props.dataFromParent.reverse().map((text, index) => (
                            <li key={index} className="list my-1 text-left">{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default List;