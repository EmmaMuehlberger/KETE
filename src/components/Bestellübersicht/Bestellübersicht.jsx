import { useState } from "react";

import './Bestellübersicht.css';

import Filter from "../Filter/Filter";
import Bestellung from "../Bestellung/Bestellung";

import emptyOrders from "../../img/no-order.svg";

const Bestellübersicht = ({ bestellungen }) => {
	const [activeFilter, setActiveFiter] = useState(0);

	const changeFilter = e => {
		setActiveFiter(e.target.value);
	}

	return (
		<div className="Bestellübersicht">
			<Filter activeFilter={activeFilter} changeFilter={changeFilter} />
			<div className="Bestellung__container">
				{bestellungen.filter(bestellung => bestellung.lieferdetails.statusNummer === activeFilter).map(bestellung => (
					<Bestellung lieferung={bestellung.lieferdetails} produkte={bestellung.produkte} status={bestellung.lieferdetails.statusVerlauf} id={bestellung.id} key={bestellung.id} />
				))}
				{bestellungen.filter(bestellung => bestellung.lieferdetails.statusNummer === activeFilter).length === 0 ? <div className="Bestellungen__none"><img src={emptyOrders} alt="" /><p>Sie haben keine Bestellungen in dieser Kategorie.</p></div> : null}
			</div>
		</div>
	);
}

export default Bestellübersicht;