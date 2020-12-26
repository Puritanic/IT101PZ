//  cSpell:disable
const izracunajAranzmanBtn = document.getElementById('izracunaj_aranzman');

/*********  Event Listeneri  **********/
izracunajAranzmanBtn.addEventListener('click', izracunajAranzman);

/*********  Kalkulator aranžmana  **********/
/**
 * Nalazi elemente potrebne za izračunavanje aranžmana, vrši kalkulaciju, i zatim prikazuje rezultat
 * @param {DOMEvent} event
 */
function izracunajAranzman(event) {
	event.preventDefault();
	const destinacija = document.getElementById('destinacija');
	const brojOsoba = document.getElementById('broj_osoba').value;
	const brojNocenja = document.getElementById('broj_nocenja').value;
	const saDoruckom = document.getElementById('sa_doruckom').checked;
	const prikazCene = document.getElementById('ukupno_aranzman');
	let ukupnaCena = 0;

	const troskoviDestinacije = nadjiCenuDestinacije(destinacija.value);
	ukupnaCena += troskoviDestinacije.osnovnaCena;
	ukupnaCena += brojOsoba * (brojNocenja * troskoviDestinacije.danPoOsobi);

	if (saDoruckom) {
		ukupnaCena += brojOsoba * (brojNocenja * troskoviDestinacije.extra);
	}

	prikazCene.textContent = ukupnaCena + ' dinara';
}
/**
 * Nalazi prosečnu cenu prosledjene destinacije
 * @param {String} destinacija
 * @returns {Object{osnovnaCena: Int, danPoOsobi: Int}}
 */
function nadjiCenuDestinacije(destinacija) {
	switch (destinacija) {
		case 'francuska_pariz':
			return { osnovnaCena: 24000, danPoOsobi: 10000, extra: 1200 };
		case 'francuska_nica':
			return { osnovnaCena: 27000, danPoOsobi: 9000, extra: 1250 };
		case 'italija_rim':
			return { osnovnaCena: 18000, danPoOsobi: 7000, extra: 900 };
		case 'italija_tropea':
			return { osnovnaCena: 17000, danPoOsobi: 6700, extra: 850 };
		case 'grcka_asos':
			return { osnovnaCena: 14000, danPoOsobi: 5000, extra: 600 };
		case 'turska_istanbul':
			return { osnovnaCena: 16000, danPoOsobi: 6000, extra: 500 };
		default:
			return { osnovnaCena: 15000, danPoOsobi: 5000, extra: 500 };
	}
}
