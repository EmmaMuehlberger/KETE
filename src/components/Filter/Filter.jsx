import './Filter.css';

const Filter = ({ activeFilter, changeFilter }) => {
	return (
		<ul className="Filter">
			<li onClick={e => changeFilter(e)} className={activeFilter === 0 ? "active" : ""} value="0">Offen</li>
			<li onClick={e => changeFilter(e)} className={activeFilter === 1 ? "active" : ""} value="1">Erledigt</li>
			<li onClick={e => changeFilter(e)} className={activeFilter === 2 ? "active" : ""} value="2">Storniert</li>
		</ul>
	);
}

export default Filter;