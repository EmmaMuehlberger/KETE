import { useState } from 'react';
import './Bestelldetails.css';

import closingIcon from "../../img/close.webp";
import checkIcon from "../../img/check.png";

const Bestelldetails = ({ bestellung }) => {
	const [benachrichtigungen, setBenachrichtigungen] = useState(false);
	const [option, setOption] = useState({
		medium: "",
		value: ""
	});
	const [showPopup, setShowPopup] = useState(false);


	const handleBenachrichtigungen = () => {
		if(benachrichtigungen === false) {
			changeShowPopup();
		} else {
			setBenachrichtigungen(false);
		}
	}

	const changeMedium = (e) => {
		setOption({
			medium: e.target.id,
			value: ""
		});
	}

	const changeOptionValue = (e) => {
		if(!e.target.previousSibling.value) {
			handleInputError();
			return;
		}

        setOption({
			medium: option.medium,
			value: e.target.previousSibling.value
		});

		if(option.medium !== "" && e.target.previousSibling.value !== "") {
			setBenachrichtigungen(true);
		} else {
			setBenachrichtigungen(false);
		}

		setTimeout(function() {  
			changeShowPopup(); 
		}, 200);
    }

	const changeShowPopup = () => {
		setShowPopup(!showPopup);
	}

	const handleInputError = () => {
		window.alert("Bitte geben Sie einen gültigen Wert ein.");
	}

	return (
		<div className="Bestelldetails">
			<div className="Bestelldetails__container">
				<h3 className="title">Bestelldetails</h3>
				<div className="Bestelldetails__info">
					<p className="grey">Bestellnr.</p>
					<p>{bestellung.id}</p>
				</div>
				<div className="Bestelldetails__info">
					<p className="grey">Bestelldatum</p>
					<p>{bestellung.lieferdetails.bestelldatum}</p>
				</div>
				<div className="Bestelldetails__info">
					<p className="grey">Lieferadresse</p>
					<p>{bestellung.lieferdetails.adresse.adresszeile1}, {bestellung.lieferdetails.adresse.plz} {bestellung.lieferdetails.adresse.ort}</p>
				</div>
			</div>
			<div className="Bestelldetails__container">
				<p className="grey">Bestellverfolung</p>
				{bestellung.lieferdetails.statusVerlauf.map(status => {
					return (
						<div className="Bestelldetails__infoRow" key={Math.random()}>
							<img src={checkIcon} alt="checkmark" />
							<p>{status.status}</p>
							<p className="last">{status.datum}</p>
						</div>
					)
				})}
				<button className="highlight-btn">Lieferung bearbeiten</button>
				<button onClick={handleBenachrichtigungen}>
					{!benachrichtigungen
						? "Benachrichtigungen aktivieren"
						: "Benachrichtigungen deaktivieren"
					}
				</button>
				{!benachrichtigungen 
					? <p className="news-status red">Benachrichtigungen deaktiviert</p>
					: <>
						<p className="news-status green">Benachrichtigungen aktiviert</p>
					</>
				}
			</div>
			<div className="Bestelldetails__container">
				<p className="grey">Produkte</p>
				{bestellung.produkte.map(produkt => {
					return (
						<div className="Bestelldetails__infoRow two" key={Math.random()}>
							<p>{produkt.name}</p>
							<p className="last">{produkt.preis.toFixed(2)}€</p>
						</div>
					)
				})}
			</div>
			<div className="Bestelldetails__container">
				<p className="grey">Zahlungsinformationen</p>
				<div className="Bestelldetails__info">
					<p className="grey">Zahlungsart</p>
					<p>{bestellung.zahlung.art}</p>
				</div>
				<div className="Bestelldetails__info">
					<p className="grey">Rechnungsadresse</p>
					<p>{bestellung.zahlung.adresse.adresszeile1}, {bestellung.zahlung.adresse.plz} {bestellung.zahlung.adresse.ort}</p>
				</div>
			</div>
			<div className={showPopup ? "Popup" : "Popup hidden"}>
				<img onClick={changeShowPopup} className="closingIcon" src={closingIcon} alt="cross" />
				<h3>Wie möchten Sie benachrichtigt werden?</h3>
				<div className="Popup__option">
					<input onClick={e => changeMedium(e)} type="radio" name="popup" id="email" checked={option?.medium === "email" ? "checked" : null} />
					<label>Email</label>
				</div>
				{option?.medium === "email" ? <><input type="email" name="email" id="email" /><button onClick={changeOptionValue} className="highlight-btn">Speichern</button></> : null }
				<div className="Popup__option">
					<input onClick={e => changeMedium(e)} type="radio" name="popup" id="phone" checked={option?.medium === "phone" ? "checked" : null} />
					<label>SMS</label>
				</div>
				{option?.medium === "phone" ? <><input type="text" name="phone" id="phone" /><button onClick={changeOptionValue} className="highlight-btn">Speichern</button></> : null }
			</div>
		</div>
	);
}

export default Bestelldetails;