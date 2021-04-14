import React from 'react';
const SearchBar = ({ keyword, setKeyword }) => {

    return (
        <div className="search__bar">
            <input
            id="search"
                type="text"
                name="SearchBar"
                value={keyword}
                required="true"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <label for="SearchBar" class="label-name">
                <span class="span-label">
                    <span>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 21.5L15.514 15.506M18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5Z" stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>

                    </span>
                          What to taste today?
                        </span>

            </label>
        </div>
    );
}

export default SearchBar