import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style.css';

import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Bestellübersicht from "./components/Bestellübersicht/Bestellübersicht";
import Bestelldetails from "./components/Bestelldetails/Bestelldetails";

const App = () => {
	const bestellungen = [
		{
			id: "BE798101",
			lieferdetails: {
				bestelldatum: "28.09.2021",
				adresse: {
					adresszeile1: "Uhlandstraße 172",
					plz: "10719",
					ort: "berlin"
				},
				statusNummer: 1,
				statusVerlauf: [
					{
						status: "Die Auftragsdaten zu dieser Sendung wurden vom Absender elektronisch an DHL übermittelt.",
						statusKurz: "Auftrag übergeben",
						datum: "28.09.2021"
					}, 
					{
						status: "Die Sendung wurde im Startpaketzentrum bearbeitet.",
						statusKurz: "im Startpaketzentrum",
						datum: "29.09.2021"
					},
					{
						status: "Die Sendung wurde im Zielpaketzentrum bearbeitet.",
						statusKurz: "im Zielpaketzentrum",
						datum: "30.09.2021"
					},
					{
						status: "Die Sendung wurde in das Zustellfahrzeug geladen.",
						statusKurz: "im Zustellfahrzeug",
						datum: "30.09.2021"
					},
					{
						status: "Die Sendung wurde erfolgreich zugestellt",
						statusKurz: "zugestellt",
						datum: "30.09.2021"
					}
				]
			},
			produkte: [
				{
					id: 123456789,
					name: "Tansania Arabica 500g",
					preis: 13.40
				},
				{
					id: 123456789,
					name: "Berliner Frühstückskaffee 500g",
					preis: 12.50
				}
			],
			zahlung: {
				art: "Bankeinzug ***-0001",
				adresse: {
					adresszeile1: "Uhlandstraße 172",
					plz: "10719",
					ort: "berlin"
				}
			}
		},
		{
			id: "BE798110",
			lieferdetails: {
				bestelldatum: "10.10.2021",
				adresse: {
					adresszeile1: "Uhlandstraße 172",
					plz: "10719",
					ort: "berlin"
				},
				statusNummer: 0,
				statusVerlauf: [
					{
						status: "Die Auftragsdaten zu dieser Sendung wurden vom Absender elektronisch an DHL übermittelt.",
						statusKurz: "Auftrag übergeben",
						datum: "10.10.2021"
					}, 
					{
						status: "Die Sendung wurde im Startpaketzentrum bearbeitet.",
						statusKurz: "im Startpaketzentrum",
						datum: "11.10.2021"
					},
					{
						status: "Die Sendung wurde im Zielpaketzentrum bearbeitet.",
						statusKurz: "im Zielpaketzentrum",
						datum: "12.10.2021"
					},
					{
						status: "Die Sendung wurde in das Zustellfahrzeug geladen.",
						statusKurz: "im Zustellfahrzeug",
						datum: "13.10.2021"
					}
				]
			},
			produkte: [
				{
					id: 123456789,
					name: "Tansania Arabica 500g",
					preis: 13.40
				},
				{
					id: 123456789,
					name: "Tansania Arabica ganze bohne 250g",
					preis: 8.50
				}
			],
			zahlung: {
				art: "Bankeinzug ***-0001",
				adresse: {
					adresszeile1: "Uhlandstraße 172",
					plz: "10719",
					ort: "berlin"
				}
			}
		},
		{
			id: "BE798114",
			lieferdetails: {
				bestelldatum: "11.10.2021",
				adresse: {
					adresszeile1: "Uhlandstraße 172",
					plz: "10719",
					ort: "berlin"
				},
				statusNummer: 0,
				statusVerlauf: [
					{
						status: "Die Auftragsdaten zu dieser Sendung wurden vom Absender elektronisch an DHL übermittelt.",
						statusKurz: "Auftrag übergeben",
						datum: "11.10.2021"
					}, 
					{
						status: "Die Sendung wurde im Startpaketzentrum bearbeitet.",
						statusKurz: "im Startpaketzentrum",
						datum: "13.10.2021"
					}
				]
			},
			produkte: [
				{
					id: 123456789,
					name: "Tansania Arabica 500g",
					preis: 13.40
				},
				{
					id: 123456789,
					name: "Kaffeemühle XY",
					preis: 87.99
				},
				{
					id: 123456789,
					name: "Zarbitterschokolade 80%",
					preis: 5.99
				}
			],
			zahlung: {
				art: "Bankeinzug ***-0001",
				adresse: {
					adresszeile1: "Uhlandstraße 172",
					plz: "10719",
					ort: "berlin"
				}
			}
		}
	];

	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/:id" render={({match}) => (
						<Bestelldetails bestellung={bestellungen.find(b => b.id === match.params.id)} />
					)} />
					<Route path="/">
						<Title />
						<Bestellübersicht bestellungen={bestellungen} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
