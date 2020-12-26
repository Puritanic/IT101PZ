<!-- cSpell:disable -->

# IT101 Projekat - Kompas Tours

> Web prezentacija o fiktivnoj turističkoj agenciji Kompas Tours. HTML5 | CSS3 | JS ES6

## O projektu

Stranica o Kompas Tours agenciji, je napravljena kao jednostrana prezentacija sa linkovima u navigaciji koji vode do različitih delova stranice. Navigacija je uvek vidljiva zbog `position: fixed` polja na `.navigation` klasi, koja se nalazi na `<header>` elementu. Zbog ovoga, posetilac se može kretati izmedju različitih delova web strane veoma lako. Ovim su pokrivene prve dve tačke iz zahteva projekta. Strana "O Kompaniji" je u ovoj prezentaciji imenovana kao "O Nama". Strana "Proizvodi" je preimenovana u "Ture" da bi se bolje uklopila u temu projekta, i tu su predstavljene neke od najpopularnijih tura fiktivne kompanije Kompas Tours. Za implementaciju mape na stranici "Kontakt" korišćen je [Mapbox API](https://docs.mapbox.com/). Stranica "Demo" je implementirana kao "Kalkulator aranžmana", gde posetilac sajta može izračunati približnu cenu nekog turističkog aranžmana.

Za stilizovanje je korišćen CSS sa Flexbox-om, a da bi neki od starijih web pretraživača bili podržani, CSS je obradjen [Autoprefixer](https://autoprefixer.github.io/) alatom. Da bi sajt izgledao isto u svim web pretraživačima, primenjena su neka pravila iz [Normalize.css](http://necolas.github.io/normalize.css/).

Fontovi se pri učitavanju stranice skidaju sa Google Fonts repozitorijuma.

Slike su skinute sa [Unsplash](https://unsplash.com/) sajta.

Javascript je pisan u ES6 sintaksi, što podrazumeva da će se web stranica koristiti u web pretraživačima novije generacije, u slučaju da postoji potreba da stranica radi i u starijim pretraživačima kao što su IE10, IE9, Safari 7 i 8, `index.js` fajl bih propustio kroz Babel transpajler koji bi trenutni kod pretvorio u nešto što stariji pretraživači razumeju, tj ES5 Javascript kod.

## Live demo

Live demo se može videti na [ovom linku](https://puritanic.github.io/IT101PZ/).

## Napravljeno uz pomoć

-   [Google Fonts](https://fonts.google.com/)
-   [CSS Autoprefixer](https://autoprefixer.github.io/)
-   [Stack Overflow](https://stackoverflow.com/)
-   IT101 beleške
-   [Unsplash](https://unsplash.com/)
-   [Normalize.css](http://necolas.github.io/normalize.css/)
-   [Font Awesome Icons](https://fontawesome.com/)
