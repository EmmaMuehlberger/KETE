import { Link } from 'react-router-dom';
import './Bestellung.css';

const Bestellung = ({ lieferung, produkte, status, id }) => {
	const totalPrice = produkte.reduce((price, obj) => { return price + obj.preis }, 0);

	return (
			<div className="Bestellung">
				<p className="Bestellung__title">
					{produkte.map((produkt, index) => {
						if(index < produkte.length - 1) {
							return produkt.name + ", ";
						} else {
							return produkt.name;
						}
					})}
				</p>
				<p className="grey">{produkte.length} Produkte</p>
				<div className="Bestellung__details">
					<p className="number grey">Bestellnr.</p><p className="number info">{id}</p>
					<p className="price grey">Gesamtsumme</p><p className="price info">{totalPrice.toFixed(2)}€</p>
					<p className="status grey">Status</p><p className={lieferung.statusNummer === 0 ? "status info orange" : lieferung.statusNummer === 1 ? "status info green" : "status info"}>{status[status.length - 1].statusKurz}</p>
				</div>
				<Link to={`/${id}`} style={{ color: "inherit", textDecoration: "none" }}>
					<button className="highlight-btn">Mehr details</button>
				</Link>
			</div>
	);
}

export default Bestellung;