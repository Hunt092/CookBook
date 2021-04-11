import React, { useEffect, useState } from 'react'
import RecipeList from './SearchBarComponents/RecipeList';
import SearchBar from './SearchBarComponents/Searchbar';

const Sidebar = () => {
    const [input, setInput] = useState('');
    const [countryListDefault, setCountryListDefault] = useState();
    const [countryList, setCountryList] = useState();

    const fetchData = async () => {
        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setCountryList(data)
                setCountryListDefault(data)
            });
    }

    const updateInput = async (input) => {
        const filtered = countryListDefault.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setCountryList(filtered);
    }

    useEffect(() => { fetchData() }, []);
    return (
        <aside className="side__menu">

            <div className="search">
                <SearchBar
                    input={input}
                    setKeyword={updateInput}
                />
                <RecipeList List={countryList} />
            </div>
        </aside>
    )
}

export default Sidebar
