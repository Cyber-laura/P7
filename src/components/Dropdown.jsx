import { useState } from 'react';

import vectorDrop from '../assets/vector-drop.png';

import '../style/components/_Dropdown.scss'

function Dropdown({ titre, description }) {
    const [bool, setBool] = useState(false);

    const handleDropdown = () => {
        setBool(!bool)
    }

    const renderDescription = () => {
        if (Array.isArray(description)) {
            return (
                <ul>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } return <p>{description}</p>
    };

    return (
        <div className="dropdown">
            <div className="header-dropdown" onClick={handleDropdown}>
                <h3>{titre}</h3>
                <span className={`fleche-dropdown ${bool ? 'fleche-dropdown-active' : 'fleche-dropdown-inactive'}`}>
                    <img src={vectorDrop} alt="" />
                </span>
            </div>
            {bool && <div className="container-text-dropdown transition-dropdown">{renderDescription()}</div>}
        </div>
    );
}

export default Dropdown;