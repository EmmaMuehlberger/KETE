import { useState } from 'react';
import './Popup.css';

import closingIcon from "../../../img/close.webp";

const Popup = () => {
    const [option, setOption] = useState(null);

    const changeOption = (e) => {
        setOption(e.target.id);
    }

	return (
		<div className="Popup">
            <img className="closingIcon" src={closingIcon} alt="cross" />
            <h3>Wie möchten Sie benachrichtigt werden?</h3>
            <div className="Popup__option">
                <input onClick={e => changeOption(e)} type="radio" name="popup" id="email" />
                <label>Email</label>
            </div>
            {option === "email" ? <input type="email" name="email" id="email" /> : null }
            <div className="Popup__option">
                <input onClick={e => changeOption(e)} type="radio" name="popup" id="phone" />
                <label>SMS</label>
            </div>
            {option === "phone" ? <input type="text" name="phone" id="phone" /> : null }
		</div>
	);
}

export default Popup;