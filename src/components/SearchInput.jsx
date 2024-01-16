/* eslint-disable react/prop-types */

import { useState } from 'react';
// import userData from '../data/users';

export default function SearchInput({ userData }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [data, setData] = useState(userData);
    const [selectedNames, setSelectedNames] = useState([]);
    const [userEmail, setUserEmail] = useState("");

    const handleNameClick = (name, email) => {
        setData(data.filter((d) => d.name !== name));
        setSelectedNames([...selectedNames, name]);
        setSearchQuery("");
        setIsDropdownOpen(false);
        setUserEmail(email)
    }; /*
        3. Clicking on an item turns it into a chip, the input field becomes empty. 
        4. The items gets removed from the list.
     */


    const handleSelectedNamesClick = (name) => {
        console.log(name)
        setSelectedNames([...selectedNames.filter((selectedName) => selectedName !== name)]);
        setData([{ name: name, email: userEmail }, ...data]);
    }; //5. Clicking the "X" icon, removes the chip and adds the item back to the list.


    let filteredData = data.filter((d) => {
        return (d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.email.toLowerCase().includes(searchQuery.toLowerCase()))
    }); //2. As you type, the list show only the items that match what you're typing.

    return (
        <div className="container">
            <input
                id="name-input"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search names"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} //1. A list of items appear on clicking the input field.
            />

            <div className="selected-names">
                {selectedNames.map((name, id) => (
                    <span key={id} className="selected-name" >
                        {name}
                        <span onClick={() => handleSelectedNamesClick(name)}><svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512"><path fill="#a6a9b0" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></span>
                    </span>
                ))}
            </div>

            {isDropdownOpen && (
                <ul className={isDropdownOpen ? "list" : ""} >
                    {filteredData.map((data, id) => (
                        <li key={id} onClick={() => handleNameClick(data.name, data.email)} className="user-list">
                            <h3>{data.name}</h3>
                            <p>{data.email}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}