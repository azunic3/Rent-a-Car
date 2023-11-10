const langEl = document.querySelector('.langWrap')
  const link = document.querySelectorAll('.lang-a');
  const offersclass2 = document.querySelector('.offersclass2');
  const aboutus1 = document.querySelector('.aboutus1');
  const contactus2 = document.querySelector('.contactus2');
  const offers = document.querySelector('.offers');

const perweekend1 = document.querySelector('.perweekend1');
const perweekend2 = document.querySelector('.perweekend2');
const perweekend3 = document.querySelector('.perweekend3');
const perweekend4 = document.querySelector('.perweekend4');
const perweekend5 = document.querySelector('.perweekend5');
const perweekend6 = document.querySelector('.perweekend6');
const aboutus3=document.getElementById('an-an-aboutus');
const from1 = document.querySelector('.from1');
const from2 = document.querySelector('.from2');
const from3 = document.querySelector('.from3');
const from4 = document.querySelector('.from4');
const from5 = document.querySelector('.from5');
const from6 = document.querySelector('.from6');
const benz=document.getElementById('benz');
const tesla=document.getElementById('tesla');
const polo=document.getElementById('polo');
const volks=document.getElementById('volks');
const clio=document.getElementById('clio');


const homeclass1 = document.querySelector('.homeclass1');

const thankyou = document.querySelector('.thankyou');
const welcome = document.querySelector('.welcome');
const conv = document.querySelector('.conv');
const kompanija = document.querySelector('.kompanija');
const aboutus = document.querySelector('.aboutus2');
const about_us = document.querySelector('.aboutus');
const offer = document.querySelector('.offer');

const team = document.querySelector('.team');
const journey = document.querySelector('.journey');

const testimonials = document.querySelector('.testimonials');

const uslovi = document.querySelector('.uslovi');

const more = document.querySelector('.more');





    window.onload=(function(){
    
      const attr= localStorage.getItem('language');
	  offersclass2.textContent = data[attr].offersclass2;
	  aboutus1.textContent = data[attr].aboutus1;
	  contactus2.textContent = data[attr].contactus;
	  about_us.textContent = data[attr].aboutus1;
	  aboutus.textContent = data[attr].aboutus1;
	  offer.textContent = data[attr].offer;
	  welcome.textContent = data[attr].welcome;
	  conv.textContent = data[attr].conv;
	  kompanija.textContent = data[attr].kompanija;
	  journey.textContent = data[attr].journey;

	  thankyou.textContent = data[attr].thankyou;

	  homeclass1.textContent = data[attr].homeclass1;
	  
	 // blog.textContent = data[attr].blog;
	  
	  team.textContent = data[attr].team;
	  
	  testimonials.textContent = data[attr].testimonials;
	  
	  uslovi.textContent = data[attr].uslovi;
	  
	  
	  more.textContent = data[attr].more;

      
    });
  
  var data={
    "english":{
		"aboutus":"About Us",
		"contact1":"We look forward to hearing from you and assisting you with your rental needs.",
"contact2":"We're here to assist you with any questions, inquiries, or special requests you may have. At An-An Rent a Car, your satisfaction is our priority, and we're ready to provide you with exceptional customer service. Feel free to reach out to us via phone, email, or by visiting our convenient location. Your journey begins here, and we're eager to be a part of it. Let's connect and make your rental experience seamless and enjoyable.",
		"an_an_aboutus":"Welcome to An-An Rent a Car, your trusted car rental service in beautiful Bosnia and Herzegovina. At An-An, we take pride in providing top-quality vehicles to meet your transportation needs, whether you're exploring our enchanting cities, touring our scenic countryside, or embarking on thrilling adventures. Our extensive fleet of well-maintained cars ensures a safe and comfortable journey, and our friendly, professional team is dedicated to making your rental experience seamless and enjoyable. Discover the beauty of Bosnia and Herzegovina with An-An Rent a Car, where we're committed to exceeding your expectations.",
	"offersclass2": "Offers",
		"viewmoreclass1": "view more",
		"perweekend": "per weekend",
		"from": "from",
		"aboutus1": "About Us",
		"readmore": "Read More",
		"latblogpost": "Latest Blog Posts",
		"happyclients": "Happy Clients",
		"pricesprev": "Prices",
		"pricemenu": "Download our price menu",
		"contactus": "Contact Us",
		"websitevisitcount": "Website visit count:",
		"fleet": "Fleet",
		"homeclass1": "Home",
		"uslovi": "Terms",
        "kompanija":"our company",
		"blog": "Blog",
		"team": "Team",
		"testimonials": "Reviews",
		"more": "More",
        "conv":"Convenience and Accessibility",
        "thankyou":"Thank you for choosing An-An Rent a Car, where we are dedicated to exceeding your expectations and making your rental experience memorable.",
        "welcome":"Welcome to An-An Rent a Car, your trusted partner for car rentals in Bosnia and Herzegovina. Established with a passion for delivering exceptional service and an unwavering commitment to our customers, we take pride in offering a comprehensive and personalized car rental experience.\n\nWe understand that your safety and comfort are of utmost importance. Our vehicles undergo regular maintenance and inspections to ensure they meet the highest standards of quality and reliability. When you rent with us, you can trust that you're driving a vehicle in excellent condition. \nAt An-An, we put our customers at the heart of everything we do. Our dedicated and professional team is committed to providing personalized service and making your rental experience as convenient and enjoyable as possible. Whether you have questions, special requests, or need assistance during your journey, we're here to help.",
        "journey":"Your journey begins with An-An Rent a Car.",
        "offer":"We offer a convenient booking process, with flexible rental options to suit your schedule and preferences. With locations strategically placed throughout Bosnia and Herzegovina, we make it easy for you to pick up and drop off your rental vehicle.",
        "clio":"Discover the Renault Clio, a popular and reliable choice for your weekend trips. This compact car boasts excellent fuel efficiency and a comfortable interior, ensuring a smooth and enjoyable ride.",
"volks":"Experience the versatility and style of the Volkswagen T-Cross. This compact SUV offers a perfect blend of performance and comfort, making it an ideal choice for weekend getaways.",
"polo":"Experience the Volkswagen Polo, a well-rounded and compact car perfect for your weekend escapades. With its efficient performance and comfortable interior, the Polo offers an enjoyable driving experience.",    
"tesla":"Embrace the future of driving with the Tesla. This electric marvel combines cutting-edge technology with eco-friendliness for an extraordinary weekend experience.",
"benz":"Indulge in the luxury and performance of a Mercedes-Benz for your weekend escape. These prestigious vehicles offer top-tier comfort and style, setting the stage for an unforgettable trip.",
},
	"bosnian": {
		"aboutus": "O nama",
        "thankyou":
        "Hvala vam što ste odabrali An-An Rent a Car, gdje smo posvećeni premašivanju vaših očekivanja i činjenju vašeg iskustva iznajmljivanja nezaboravnim.",
        "conv":"Prikladnost i Dostupnost",
        "offer":"Nudimo praktičan postupak rezervacije s fleksibilnim opcijama najma prilagođenim vašem rasporedu i preferencijama. S lokacijama smještenim strateški diljem Bosne i Hercegovine, olakšavamo vam preuzimanje i vraćanje vašeg unajmljenog vozila.",
        "clio":"Otkrijte Renault Clio, popularan i pouzdan izbor za vaše vikend putovanje. Ovaj kompaktni automobil se ponosi odličnom efikasnošću goriva i udobnim unutrašnjim prostorom, osiguravajući glatku i ugodnu vožnju.",
			"contact1": "Radujemo se vašem kontaktu i pomoći vam u vašim potrebama za iznajmljivanjem.",
		"contact2": "Ovdje smo da vam pomognemo sa svim pitanjima, upitima ili posebnim zahtjevima koje možete imati. U An-An Rent a Car, vaše zadovoljstvo nam je prioritet i spremni smo vam pružiti izvanrednu korisničku uslugu. Slobodno nas kontaktirajte putem telefona, e-pošte ili posjetite našu povoljno smještenu lokaciju. Vaše putovanje počinje ovdje, i s nestrpljenjem iščekujemo da budemo dio njega. Povežimo se i učinimo vaše iskustvo iznajmljivanja automobila jednostavnim i ugodnim.",
		"polo":"Doživite Volkswagen Polo, dobro zaokrugli i kompaktni automobil savršen za vaše vikend avanture. S efikasnom izvedbom i udobnim unutrašnjim prostorom, Polo nudi ugodno iskustvo vožnje.",	
        "an_an_aboutus": "Dobrodošli u An-An Rent a Car, vašeg pouzdanog servisa za iznajmljivanje automobila u prelijepoj Bosni i Hercegovini. U An-An, ponosimo se pružanjem vrhunskih vozila kako bi zadovoljili vaše potrebe za prijevozom, bilo da istražujete naše čarobne gradove, obilazite našu slikovitu prirodu ili se upuštate u uzbudljive avanture. Naša široka flota dobro održavanih automobila osigurava siguran i udoban put, a naš prijateljski i profesionalni tim posvećen je tome da vaše iskustvo iznajmljivanja automobila bude jednostavno i ugodno. Otkrijte ljepotu Bosne i Hercegovine s An-An Rent a Car, gdje smo posvećeni premašivanju vaših očekivanja.",
		"offersclass2": "Ponude",
        "journey":"Vaše putovanje počinje s An-An Rent a Car.",
		"viewmoreclass1": "pogledajte više",
		"perweekend": "za vikend",
		"from": "od",
        "welcome":"Dobrodošli u An-An Rent a Car, vaš pouzdan partner za iznajmljivanje automobila u Bosni i Hercegovini. Osnovani s strašću za pružanje izvanredne usluge i nepokolebljivim predanošću našim klijentima, ponosimo se pružanjem sveobuhvatnog i personaliziranog iskustva iznajmljivanja automobila.\n\nRazumijemo da je vaša sigurnost i udobnost od najveće važnosti. Naša vozila redovito prolaze kroz održavanje i inspekcije kako bi osigurali da zadovoljavaju najviše standarde kvalitete i pouzdanosti. Kad iznajmite vozilo kod nas, možete vjerovati da vozite vozilo u izvrsnom stanju.\nU An-An, stavljamo naše klijente u središte svega što radimo. Naš posvećeni i profesionalni tim posvećen je pružanju personalizirane usluge i činjenju vašeg iskustva iznajmljivanja što praktičnijim i ugodnijim. Bez obzira imate li pitanja, posebne zahtjeve ili trebate pomoć tijekom svog putovanja, mi smo ovdje da pomognemo.",
        "kompanija":"naša kompanija",
        "benz":"Uživajte u luksuzu i performansama Mercedes-Benz-a za svoj vikend bijeg. Ovi prestižni automobili nude udobnost i stil najviše klase, postavljajući pozornicu za nezaboravno putovanje.",
        "tesla":"Zagrli budućnost vožnje s Tesla automobilom. Ovo električno čudo kombinira najsavremeniju tehnologiju s ekološkom osviješćenošću za izvanredno vikend iskustvo.",
        "volks":"Doživite svestranost i stil Volkswagen T-Cross-a. Ovaj kompaktni SUV nudi savršenu kombinaciju performansi i udobnosti, čineći ga idealnim izborom za vikend izlete.",
		"aboutus1": "O nama",
		"readmore": "Pročitaj više",
		"latblogpost": "Najnoviji blog postovi",
		"happyclients": "Sretni klijenti",
		"pricesprev": "Cijene",
		"pricemenu": "Preuzmite našu cjenovnu listu",
		"contactus": "Kontaktirajte nas",
		"websitevisitcount": "Broj posjeta web stranici:",
		"fleet": "Flota",
		"homeclass1": "Početna",
		"uslovi": "Uslovi",
		"blog": "Blog",
		"team": "Tim",
		"testimonials": "Iskustva",
		"more": "Više"
	}	,
	"german": {
		"aboutus": "Über uns",
		"contact1": "Wir freuen uns darauf, von Ihnen zu hören und Sie bei Ihren Mietwünschen zu unterstützen.",
		"contact2": "Wir sind hier, um Ihnen bei Fragen, Anfragen oder besonderen Wünschen zu helfen, die Sie haben könnten. Bei An-An Rent a Car steht Ihre Zufriedenheit an erster Stelle, und wir sind bereit, Ihnen einen außergewöhnlichen Kundenservice zu bieten. Zögern Sie nicht, uns telefonisch, per E-Mail oder durch einen Besuch an unserem bequemen Standort zu kontaktieren. Ihre Reise beginnt hier, und wir sind darauf erpicht, ein Teil davon zu sein. Lassen Sie uns eine Verbindung herstellen und Ihr Mietwagenerlebnis reibungslos und angenehm gestalten.",
		"an_an_aboutus": "Herzlich willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Autovermietungsservice im wunderschönen Bosnien und Herzegowina. Bei An-An sind wir stolz darauf, erstklassige Fahrzeuge anzubieten, die Ihren Transportbedarf decken, egal ob Sie unsere bezaubernden Städte erkunden, unsere malerische Landschaft besichtigen oder auf aufregende Abenteuer aufbrechen. Unser umfangreicher Fuhrpark an bestens gewarteten Fahrzeugen garantiert eine sichere und komfortable Reise, und unser freundliches, professionelles Team ist darauf spezialisiert, Ihr Mietwagenerlebnis reibungslos und angenehm zu gestalten. Entdecken Sie die Schönheit von Bosnien und Herzegowina mit An-An Rent a Car, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen.",
		"offersclass2": "Angebote",
		"viewmoreclass1": "Mehr anzeigen",
		"perweekend": "pro Wochenende",
		"from": "ab",
		"aboutus1": "Über uns",
		"readmore": "Mehr lesen",
		"latblogpost": "Neueste Blogbeiträge",
		"happyclients": "Zufriedene Kunden",
		"pricesprev": "Preise",
		"pricemenu": "Laden Sie unsere Preisliste herunter",
		"contactus": "Kontaktieren Sie uns",
		"websitevisitcount": "Webseitenbesuche:",
		"fleet": "Fahrzeugflotte",
		"homeclass1": "Startseite",
		"uslovi": "Geschäftsbedingungen",
		"kompanija": "Unser Unternehmen",
		"blog": "Blog",
		"team": "Team",
		"testimonials": "Bewertungen",
		"more": "Mehr",
		"conv": "Komfort und Zugänglichkeit",
		"thankyou": "Vielen Dank, dass Sie sich für An-An Rent a Car entschieden haben, wo wir uns darauf spezialisiert haben, Ihre Erwartungen zu übertreffen und Ihr Mietwagenerlebnis unvergesslich zu machen.",
		"welcome": "Herzlich willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Partner für Autovermietungen in Bosnien und Herzegowina. Gegründet mit der Leidenschaft, außergewöhnlichen Service zu bieten, und mit dem unerschütterlichen Engagement für unsere Kunden, sind wir stolz darauf, ein umfassendes und persönliches Mietwagenerlebnis anzubieten.\n\nWir wissen, dass Ihre Sicherheit und Ihr Komfort von höchster Bedeutung sind. Unsere Fahrzeuge werden regelmäßig gewartet und überprüft, um sicherzustellen, dass sie den höchsten Qualitäts- und Zuverlässigkeitsstandards entsprechen. Wenn Sie bei uns mieten, können Sie sicher sein, dass Sie ein Fahrzeug in ausgezeichnetem Zustand fahren. Bei An-An stellen wir unsere Kunden in den Mittelpunkt unseres Handelns. Unser engagiertes und professionelles Team hat sich verpflichtet, persönlichen Service zu bieten und Ihr Mietwagenerlebnis so bequem und angenehm wie möglich zu gestalten. Egal, ob Sie Fragen haben, besondere Wünsche haben oder während Ihrer Reise Unterstützung benötigen, wir sind hier, um Ihnen zu helfen.",
		"journey": "Ihre Reise beginnt mit An-An Rent a Car.",
		"offer": "Wir bieten einen bequemen Buchungsprozess mit flexiblen Mietoptionen, die zu Ihrem Zeitplan und Ihren Vorlieben passen. Mit strategisch platzierten Standorten in ganz Bosnien und Herzegowina erleichtern wir es Ihnen, Ihr Mietfahrzeug abzuholen und zurückzugeben.",
		"clio": "Entdecken Sie den Renault Clio, eine beliebte und zuverlässige Wahl für Ihre Wochenendausflüge. Dieser kompakte Wagen bietet eine hervorragende Kraftstoffeffizienz und einen komfortablen Innenraum, der eine reibungslose und angenehme Fahrt garantiert.",
		"volks": "Erleben Sie die Vielseitigkeit und den Stil des Volkswagen T-Cross. Dieses kompakte SUV bietet eine perfekte Mischung aus Leistung und Komfort und ist die ideale Wahl für Wochenendausflüge.",
		"polo": "Erleben Sie den Volkswagen Polo, ein vielseitiges und kompaktes Auto, das sich hervorragend für Wochenendausflüge eignet. Mit seiner effizienten Leistung und dem komfortablen Innenraum bietet der Polo ein angenehmes Fahrerlebnis.",
		"tesla": "Tauchen Sie ein in die Zukunft des Fahrens mit dem Tesla. Dieses elektrische Wunder kombiniert modernste Technologie mit Umweltfreundlichkeit für ein außergewöhnliches Wochenenderlebnis.",
		"benz": "Genießen Sie Luxus und Leistung eines Mercedes-Benz für Ihren Wochenendausflug. Diese edlen Fahrzeuge bieten erstklassigen Komfort und Stil und bereiten die Bühne für eine unvergessliche Reise."
	}
	
  }
