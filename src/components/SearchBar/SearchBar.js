
import { React, useState } from "react";
import "./SearchBar.css"
import DetailCard from '../DetailCard/DetailCard';
import { Container } from 'react-bootstrap';
const SearchBar = (props) => {
    // const names = [
    //     'Asif Tamboli',
    //     'John Doe',
    //     'Luke Skywalker',
    //     'Arya Stark',
    //     'Rick Sanchez',
    //     'Peter Griffin',
    //     'Stewie Griffin',
    //     'Jane Doe',
    //     'Han Solo'
    // ];
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue("");
    }

    const filteredList = props.searchList.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    const hasSearchValue = searchValue.length > 0;

    return (
        <Container fluid>
            <div className="text-field-position p-3">
                <input type="text" placeholder="Search" className="search-input" value={searchValue} onChange={handleSearchChange} />
                {hasSearchValue && <span className="removeClick" onClick={handleClearClick}>&times;</span>}
            </div>
            <div>
                {filteredList.map((item) => {
                    return (
                        <div><DetailCard item={item} /></div>
                    )
                })}
            </div>
        </Container>

    )
}

export default SearchBar;