
  const offersclass2 = document.querySelector('.offersclass2');
  const aboutus1 = document.querySelector('.aboutus1');
  const contactus2 = document.querySelector('.contactus2');
  const aboutus= document.querySelector('.aboutoffice');
  const message = document.querySelector('.message');

  const contactus = document.querySelector('.contactus');
  const location1 = document.querySelector('.location');

const homeclass1 = document.querySelector('.homeclass1');

const welcome = document.querySelector('.welcome');

const team = document.querySelector('.team');

const testimonials = document.querySelector('.testimonials');

const uslovi = document.querySelector('.uslovi');

const more = document.querySelector('.more');





    window.onload=(function(){
    
      const attr= localStorage.getItem('language');
	  offersclass2.textContent = data[attr].offersclass2;
	  aboutus1.textContent = data[attr].aboutus1;
	  contactus2.textContent = data[attr].contactus;
	  aboutus.textContent = data[attr].aboutoffice;
	  welcome.textContent = data[attr].welcome;
	  location1.textContent = data[attr].location;
	  contactus.textContent = data[attr].contactus;

	  homeclass1.textContent = data[attr].homeclass1;
      message.textContent = data[attr].message;

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
        "aboutoffice":"About our office",
        "message":"Send us a Message",
        "location":"Our Location on Maps",
        "conv":"Convenience and Accessibility",
        "thankyou":"Thank you for choosing An-An Rent a Car, where we are dedicated to exceeding your expectations and making your rental experience memorable.",
        "welcome":"Welcome to An-An Rent a Car, your trusted car rental service in beautiful Bosnia and Herzegovina. At An-An, we take pride in providing top-quality vehicles to meet your transportation needs, whether you're exploring our enchanting cities, touring our scenic countryside, or embarking on thrilling adventures. Our extensive fleet of well-maintained cars ensures a safe and comfortable journey, and our friendly, professional team is dedicated to making your rental experience seamless and enjoyable. Discover the beauty of Bosnia and Herzegovina with An-An Rent a Car, where we're committed to exceeding your expectations.",
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
        "location":"Naša lokacija na mapi",
        "message":"Pošaljite nam poruku",
        "aboutoffice":"O našem uredu",
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
        "welcome":"Dobrodošli u An-An Rent a Car, vaša pouzdana usluga iznajmljivanja automobila u predivnoj Bosni i Hercegovini. U An-An-u se ponosimo pružanjem vozila visokog kvaliteta kako bismo zadovoljili vaše potrebe za prijevozom, bez obzira istražujete li naše čarobne gradove, obilazite našu slikovitu prirodu ili se upuštate u uzbudljive avanture. Naša obimna flota dobro održavanih automobila osigurava sigurno i udobno putovanje, a naš prijateljski i profesionalni tim posvećen je tome da vaše iskustvo iznajmljivanja bude jednostavno i ugodno. Otkrijte ljepotu Bosne i Hercegovine s An-An Rent a Car, gdje smo posvećeni premašivanju vaših očekivanja.",
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
		"contact1": "Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei Ihren Mietbedürfnissen zu helfen.",
		"contact2": "Wir sind hier, um Ihnen bei Fragen, Anfragen oder besonderen Wünschen zu helfen. Bei An-An Rent a Car hat Ihre Zufriedenheit höchste Priorität, und wir sind bereit, Ihnen außergewöhnlichen Kundenservice zu bieten. Zögern Sie nicht, uns telefonisch, per E-Mail oder durch einen Besuch an unserem praktischen Standort zu kontaktieren. Ihre Reise beginnt hier, und wir sind bestrebt, ein Teil davon zu sein. Lassen Sie uns in Verbindung bleiben und Ihr Mietwagenerlebnis reibungslos und angenehm gestalten.",
		"an_an_aboutus": "Willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Mietwagenservice im wunderschönen Bosnien und Herzegowina. Bei An-An sind wir stolz darauf, erstklassige Fahrzeuge anzubieten, um Ihren Transportbedarf zu decken, egal ob Sie unsere bezaubernden Städte erkunden, unsere malerische Landschaft bereisen oder auf aufregende Abenteuer aufbrechen. Unsere umfangreiche Flotte von gut gewarteten Autos sorgt für eine sichere und komfortable Reise, und unser freundliches, professionelles Team setzt sich dafür ein, Ihr Mietwagenerlebnis reibungslos und angenehm zu gestalten. Entdecken Sie die Schönheit von Bosnien und Herzegowina mit An-An Rent a Car, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen.",
		"offersclass2": "Angebote",
		"viewmoreclass1": "mehr anzeigen",
		"perweekend": "pro Wochenende",
		"from": "ab",
		"aboutus1": "Über uns",
		"readmore": "Mehr erfahren",
		"latblogpost": "Neueste Blogbeiträge",
		"happyclients": "Zufriedene Kunden",
		"pricesprev": "Preise",
		"pricemenu": "Laden Sie unsere Preisliste herunter",
		"contactus": "Kontaktieren Sie uns",
		"websitevisitcount": "Website-Besucherzähler:",
		"fleet": "Fahrzeugflotte",
		"homeclass1": "Startseite",
		"uslovi": "Bedingungen",
		"kompanija": "Unser Unternehmen",
		"blog": "Blog",
		"team": "Team",
		"testimonials": "Bewertungen",
		"more": "Mehr",
		"aboutoffice": "Über unser Büro",
		"message": "Senden Sie uns eine Nachricht",
		"location": "Unsere Lage auf der Karte",
		"conv": "Bequemlichkeit und Zugänglichkeit",
		"thankyou": "Vielen Dank, dass Sie sich für An-An Rent a Car entschieden haben, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen und Ihr Mietwagenerlebnis unvergesslich zu gestalten.",
		"welcome": "Herzlich willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Mietwagenservice im wunderschönen Bosnien und Herzegowina. Bei An-An sind wir stolz darauf, erstklassige Fahrzeuge anzubieten, um Ihren Transportbedarf zu decken, egal ob Sie unsere bezaubernden Städte erkunden, unsere malerische Landschaft bereisen oder auf aufregende Abenteuer aufbrechen. Unsere umfangreiche Flotte von gut gewarteten Autos sorgt für eine sichere und komfortable Reise, und unser freundliches, professionelles Team setzt sich dafür ein, Ihr Mietwagenerlebnis reibungslos und angenehm zu gestalten. Entdecken Sie die Schönheit von Bosnien und Herzegowina mit An-An Rent a Car, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen.",
		"journey": "Ihre Reise beginnt mit An-An Rent a Car.",
		"offer": "Wir bieten einen bequemen Buchungsprozess mit flexiblen Mietoptionen, um Ihrem Zeitplan und Ihren Vorlieben gerecht zu werden. Mit strategisch platzierten Standorten in ganz Bosnien und Herzegowina ermöglichen wir es Ihnen, Ihr Mietfahrzeug bequem abzuholen und zurückzugeben.",
		"clio": "Entdecken Sie den Renault Clio, eine beliebte und zuverlässige Wahl für Ihre Wochenendausflüge. Dieses kompakte Auto bietet eine hervorragende Kraftstoffeffizienz und einen komfortablen Innenraum, um eine reibungslose und angenehme Fahrt zu gewährleisten.",
		"volks": "Erleben Sie die Vielseitigkeit und den Stil des Volkswagen T-Cross. Dieses kompakte SUV bietet eine perfekte Mischung aus Leistung und Komfort und ist somit die ideale Wahl für Wochenendausflüge.",
		"polo": "Erleben Sie den Volkswagen Polo, ein vielseitiges und kompaktes Auto, das sich perfekt für Ihre Wochenendausflüge eignet. Mit seiner effizienten Leistung und dem komfortablen Innenraum bietet der Polo ein angenehmes Fahrerlebnis.",
		"tesla": "Tauchen Sie ein in die Zukunft des Fahrens mit dem Tesla. Dieses elektrische Wunder kombiniert modernste Technologie mit Umweltfreundlichkeit für ein außergewöhnliches Wochenenderlebnis.",
		"benz": "Genießen Sie Luxus und Leistung mit einem Mercedes-Benz für Ihren Wochenendausflug. Diese angesehenen Fahrzeuge bieten höchsten Komfort und Stil und schaffen die Voraussetzungen für eine unvergessliche Reise."
	}
	
  }
