import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {

    return (
        <div className="search__bar">
            <input
                type="text"
                name="SearchBar"
                value={keyword}
                required="true"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <label for="SearchBar" class="label-name">
                <span class="span-label">What to taste today?</span>

            </label>
        </div>
    );
}

export default SearchBar