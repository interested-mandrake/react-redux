import React from 'react';

class SearchBar extends React.Component {
    onInputChange() {

    }

    render() {
        return  (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} /> {/* giving the function we defined as a callback function ( if we included parentheses, it would run on render, and we do not want that) */}
                    </div>
                </form>
            </div> 
        );
    }
}

export default SearchBar;