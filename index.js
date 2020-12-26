//  cSpell:disable
const izracunajAranzmanBtn = document.getElementById('izracunaj_aranzman');
const slikeOsoblja = document.getElementsByClassName('person_img');
const slikeTura = document.getElementsByClassName('grid_img');
const posaljiPoruku = document.getElementById('posalji_poruku');
const karijeraBtn = document.getElementById('karijera_submit');

/*********  Event Listeneri  **********/
Array.from(slikeOsoblja).forEach(function (element) {
	element.addEventListener('mouseover', skalirajSliku);
	element.addEventListener('mouseleave', deskalirajSliku);
});

Array.from(slikeTura).forEach(function (element) {
	element.addEventListener('mouseover', prikaziInfoTure);
	element.addEventListener('mouseleave', sakrijInfoTure);
});

izracunajAranzmanBtn.addEventListener('click', izracunajAranzman);
posaljiPoruku.addEventListener('click', validirajKontaktPoruku);
karijeraBtn.addEventListener('click', validirajPodatke);

/*********  Kalkulator aranžmana  **********/
/**
 * @description Nalazi elemente potrebne za izračunavanje aranžmana, vrši kalkulaciju, i zatim prikazuje rezultat
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
 * @description Nalazi prosečnu cenu prosledjene destinacije
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

/*********  Img mouseover handleri  **********/
/**
 * @description Skalira sliku, povećavajući joj visinu i širinu za 5px
 * @param {DOMEvent} event
 */
function skalirajSliku(event) {
	const target = event.target;
	if (target) {
		const currHeight = target.clientHeight;
		const currWidth = target.clientWidth;
		target.style.height = currHeight + 5 + 'px';
		target.style.width = currWidth + 5 + 'px';
	}
}
/**
 * @description Deskalira sliku, smanjujući joj visinu i širinu za 5px
 * @param {DOMEvent} event
 */
function deskalirajSliku(event) {
	const target = event.target;
	if (target) {
		const currHeight = target.clientHeight;
		const currWidth = target.clientWidth;
		target.style.height = currHeight - 5 + 'px';
		target.style.width = currWidth - 5 + 'px';
	}
}
function prikaziInfoTure(event) {
	const target = event.target;
	if (target) {
		const span = target.getElementsByTagName('span')[0];
		if (span) {
			span.style.opacity = 1;
		}
	}
}
function sakrijInfoTure(event) {
	const target = event.target;
	if (target) {
		const span = target.getElementsByTagName('span')[0];
		if (span) {
			span.style.opacity = 0;
		}
	}
}

/*********  Form validacija  **********/
/**
 * @description Validira polja iz kontakt forme, u u zavisnosti od rezultata prikazuje greške ili poruku da validacija uspešna
 * @param {DOMEvent} event
 */
function validirajKontaktPoruku(event) {
	const kontaktForma = document.getElementById('kontakt_forma');
	const naslovPoruke = document.getElementById('naslov').value.trim();
	const imePrezime = document.getElementById('ime_prezime').value.trim();
	const poruka = document.getElementById('poruka').value.trim();
	const kontaktTelefon = document.getElementById('broj_telefona').value.trim();
	const uspehPoruka = document.getElementById('poruka_poslata');

	const naslovGreska = document.getElementById('naslov_greska');
	const imePrezimeGreska = document.getElementById('ime_prezime_greska');
	const porukaGreska = document.getElementById('poruka_greska');
	const telefonGreska = document.getElementById('broj_telefona_greska');

	const naslovJeValidan = validirajNaslov(naslovPoruke);
	console.log('naslovJeValidan: ', naslovJeValidan);
	if (!naslovJeValidan) {
		naslovGreska.classList.remove('h__hidden');
	} else if (!naslovGreska.classList.contains('h__hidden')) {
		naslovGreska.classList.add('h__hidden');
	}

	const imePrezimeJeValidno = validirajImePrezime(imePrezime);
	console.log('imePrezimeJeValidno: ', imePrezimeJeValidno);
	if (!imePrezimeJeValidno) {
		imePrezimeGreska.classList.remove('h__hidden');
	} else if (!imePrezimeGreska.classList.contains('h__hidden')) {
		imePrezimeGreska.classList.add('h__hidden');
	}

	const porukaJeValidna = validirajPoruku(poruka);
	console.log('porukaJeValidna: ', porukaJeValidna);
	if (!porukaJeValidna) {
		porukaGreska.classList.remove('h__hidden');
	} else if (!porukaGreska.classList.contains('h__hidden')) {
		porukaGreska.classList.add('h__hidden');
	}

	const kontaktJeTelefonValidan = validirajKontaktTelefon(kontaktTelefon);
	console.log('kontaktJeTelefonValidan: ', kontaktJeTelefonValidan);
	if (!kontaktJeTelefonValidan) {
		telefonGreska.classList.remove('h__hidden');
	} else if (!telefonGreska.classList.contains('h__hidden')) {
		telefonGreska.classList.add('h__hidden');
	}

	if (naslovJeValidan && imePrezimeJeValidno && porukaJeValidna && kontaktJeTelefonValidan) {
		uspehPoruka.classList.remove('h__hidden');
		kontaktForma.reset();
	} else {
		event.preventDefault();
		if (!uspehPoruka.classList.contains('h__hidden')) {
			uspehPoruka.classList.add('h__hidden');
		}
	}
}
/**
 * @description Validira ime i prezime, tako što proverava da li je priloženi string validno ime i prezime
 * Ime i prezime nisu validni ako sadrže numeričke karaktere
 * Ime i prezime nisu validni ako su kraći ili duži od dve reči
 * @param {String} imePrezime
 * @returns {Boolean}
 */
function validirajImePrezime(imePrezime) {
	if (hasNumber(imePrezime)) return false;

	if (imePrezime.split(' ').length !== 2) {
		return false;
	}
	return true;
}
/**
 * @description Validira poruku tako što proverava da li je priloženi string kraći od 10 ili duži od 350 karaktera
 * @param {String} poruka
 * @returns {Boolean}
 */
function validirajPoruku(poruka) {
	if (!poruka || poruka.length < 10 || poruka.length > 350) return false;
	return true;
}
/**
 * @description Validira naslov tako što proverava da li je priloženi string kraći od 5 ili duži od 30 karaktera
 * @param {String} naslov
 * @returns {Boolean}
 */
function validirajNaslov(naslov) {
	if (!naslov || naslov.length < 5 || naslov.length > 30) return false;
	return true;
}
/**
 * @description Validira broj telefona
 * + i - karakteri su opcionalni, bitno je da broj ima 10 cifara
 * @param {String} telefon
 * @returns {Boolean}
 */
function validirajKontaktTelefon(telefon) {
	return /\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}/.test(telefon);
}
/**
 * @description Proverava da li priloženi string sadrži numeričke karaktere
 * @see https://stackoverflow.com/a/28813213/7453363
 * @param {String}
 * @returns {Boolean}
 */
function hasNumber(string) {
	return /\d/.test(string);
}
/**
 * @description Validira polja iz karijera forme, u u zavisnosti od rezultata prikazuje greške ili poruku da validacija uspešna
 * @param {DOMEvent} event
 */
function validirajPodatke(event) {
	const forma = document.getElementById('karijera_forma');
	const ime = document.getElementById('karijera_ime').value.trim();
	const prezime = document.getElementById('karijera_prezime').value.trim();
	const CV = document.getElementById('karijera_CV').value.trim();
	const uspehPoruka = document.getElementById('prijava_poslata');

	const imePrezimeGreska = document.getElementById('karijera_ime_prezime_greska');
	const CVGreska = document.getElementById('cv_greska');

	const imePrezimeJeValidno = ime && prezime && validirajImePrezime(`${ime} ${prezime}`);
	if (!imePrezimeJeValidno) {
		imePrezimeGreska.classList.remove('h__hidden');
	} else if (!imePrezimeGreska.classList.contains('h__hidden')) {
		imePrezimeGreska.classList.add('h__hidden');
	}
	if (!CV) {
		CVGreska.classList.remove('h__hidden');
	} else if (!CVGreska.classList.contains('h__hidden')) {
		CVGreska.classList.add('h__hidden');
	}

	if (imePrezimeJeValidno && CV) {
		uspehPoruka.classList.remove('h__hidden');
		forma.reset();
	} else {
		event.preventDefault();
		if (!uspehPoruka.classList.contains('h__hidden')) {
			uspehPoruka.classList.add('h__hidden');
		}
	}
}
