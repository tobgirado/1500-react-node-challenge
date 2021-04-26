import React from 'react';
import './Search.css';
import List from './List';

class Search extends React.Component {
    state = {
        text: "",
        resp: []
    }
    onTextChange = (e) => {
        e.preventDefault();
        this.setState({ text: e.target.value });
    }

    search = (e) => {
        e.preventDefault();
        fetch(`/iecho?text=${this.state.text}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert("No introdujo ningún texto");
                } else {
                    let resp = this.state.resp;
                    resp.unshift(res.text);
                    this.setState({ resp });
                    console.log(this.resp);
                }
            })
    }

    render() {
        return (
            <div>
                <div className="navbar py-2 bg-red justify-content-center align-items-center">
                    <form className="form-inline">
                        <input
                            type="text"
                            name="text"
                            className="form-control mr-4 search"
                            id="search"
                            value={this.state.text} onChange={this.onTextChange} />
                        <button type="submit" className="btn btn-primary"
                            onClick={this.search}>Search</button>
                    </form >
                </div >
                <div className=" justify-content-center align-items-center">
                    <List dataFromParent={this.state.resp} />
                </div>
            </div >
        );
    }
}


export default Search;