const review2 = document.getElementById('review2');
const review3 = document.getElementById('review3');
const review4 = document.getElementById('review4');
const review5 = document.getElementById('review5');
const review6 = document.getElementById('review6');
const teslareview=document.getElementById('teslareview');
const offersclass2 = document.querySelector('.offersclass2');
const reviews=document.querySelector('.reviews');
const aboutus1 = document.querySelector('.aboutus1');

const contactus2 = document.querySelector('.contactus2');


const homeclass1 = document.querySelector('.homeclass1');

const blog = document.querySelector('.blog');

const team = document.querySelector('.team');

const testimonials = document.querySelector('.testimonials');

const uslovi = document.querySelector('.uslovi');

const more = document.querySelector('.more');





    window.onload=( () => {
     
        const attr= localStorage.getItem('language');
	  offersclass2.textContent = data[attr].offersclass2;
	reviews.textContent=data[attr].testimonials;
	  review2.textContent=data[attr].review2;
	  review3.textContent=data[attr].review3;
	  review4.textContent=data[attr].review4;
	  review5.textContent=data[attr].review5;
	  review6.textContent=data[attr].review6;
	  teslareview.textContent=data[attr].teslareview;
	  aboutus1.textContent = data[attr].aboutus1;
	 
	  contactus2.textContent = data[attr].contactus;
	
	  
	  homeclass1.textContent = data[attr].homeclass1;
	  
	 // blog.textContent = data[attr].blog;
	  
	  team.textContent = data[attr].team;
	  
	  testimonials.textContent = data[attr].testimonials;
	  
	  uslovi.textContent = data[attr].uslovi;
	  
	  
	  more.textContent = data[attr].more;

      
    });
  
  var data={
    "english":{
        "bannerText1": "Rev Up Your Savings",
		"banner2":"Get 20% Off Van Rentals Today!",
		"bannerText2":"Find us in your closest store",
		"aboutus":"About Us",
		"review2":"\"An-An Rent a Car is my first choice in Bosnia and Herzegovina. The cars are well-maintained, and the staff is always ready to assist. I rented a Mercedes-Benz, and it made my trip unforgettable.\"",
		"review3":"\"The Mercedes-Benz I rented from An-An Rent a Car was a showstopper. It turned heads wherever I went, and the service was top-notch. An-An is my go-to rental company from now on.\"",
		"review4":"\"I had a fantastic experience renting a vehicle from An-An Rent a Car for my family vacation. The key to our wonderful journey was having a comfortable and reliable car from An-An. We're extremely satisfied with their service!\"",
		"review5":"\"I recently rented a Ford from An-An Rent a Car, and it exceeded my expectations. The car was clean, reliable, and the team at An-An made the rental process easy and convenient.\"",
		"review6":"\"An-An Rent a Car provided me with a Citroen for my trip, and I couldn't be happier. The car was a joy to drive, and the whole rental process was smooth and hassle-free.\"",
"contact1":"We look forward to hearing from you and assisting you with your rental needs.",
"contact2":"We're here to assist you with any questions, inquiries, or special requests you may have. At An-An Rent a Car, your satisfaction is our priority, and we're ready to provide you with exceptional customer service. Feel free to reach out to us via phone, email, or by visiting our convenient location. Your journey begins here, and we're eager to be a part of it. Let's connect and make your rental experience seamless and enjoyable.",
		"kljuc":"Unlocking Updates: The Latest Car News!",
		"teslareview":"\"I rented a Tesla from An-An Rent a Car and had an amazing experience. The car was in perfect condition, and the staff was extremely friendly and professional. I'll definitely be back for more!\"",
		"years":"5 Years of Excellence: Celebrating a Milestone!",
		"merc":"Experience luxury and sophistication like never before with our brand-new Mercedes-Benz model, now available for your rental needs.",
		"an_an_aboutus":"Welcome to An-An Rent a Car, your trusted car rental service in beautiful Bosnia and Herzegovina. At An-An, we take pride in providing top-quality vehicles to meet your transportation needs, whether you're exploring our enchanting cities, touring our scenic countryside, or embarking on thrilling adventures. Our extensive fleet of well-maintained cars ensures a safe and comfortable journey, and our friendly, professional team is dedicated to making your rental experience seamless and enjoyable. Discover the beauty of Bosnia and Herzegovina with An-An Rent a Car, where we're committed to exceeding your expectations.",
		"ford":"Whether you're exploring the city or hitting the open road, our Ford rentals provide the perfect blend of power and comfort.",
		"citro":"The Citroen is a versatile choice for your rental needs, providing a harmonious combination of safety and modern design. Whether you're exploring urban landscapes or venturing off the beaten path, the Citroen delivers a fantastic driving experience. Book your Citroen now and embark on your next adventure!",
		"toyota":"Rent a luxurious SUV filled with top-notch performance and comfort - the Toyota Fortuner. This spacious vehicle combines elegance with off-road capabilities, making it the perfect choice for exploring cities and natural beauty.",
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
		"blog": "Blog",
		"team": "Team",
		"testimonials": "Reviews",
		"more": "More",

    },
	"bosnian": {
		"bannerText1": "Povećajte svoje uštede",
		"banner2": "Dobijte 20% popusta na iznajmljivanje kombija danas!",
		"bannerText2": "Pronađite nas u najbližoj prodavnici",
		"aboutus": "O nama",
		"review2": "\"An-An Rent a Car je moj prvi izbor u Bosni i Hercegovini. Automobili su dobro održavani, a osoblje je uvijek spremno za pomoć. Iznajmio sam Mercedes-Benz, i to je učinilo moje putovanje nezaboravnim.\"",
		"review3": "\"Mercedes-Benz koji sam iznajmio od An-An Rent a Car bio je prava atrakcija. Praktički svuda gdje sam išao privlačio je pažnju, a usluga je bila vrhunska. An-An je moj izbor za iznajmljivanje od sada na dalje.\"",
		"review4": "\"Imao sam fantastično iskustvo iznajmljivanja vozila od An-An Rent a Car za obiteljski odmor. Ključ za naše predivno putovanje bio je udoban i pouzdan automobil od An-An. Izuzetno smo zadovoljni njihovom uslugom!\"",
		"review5": "\"Nedavno sam iznajmio Ford od An-An Rent a Car i to je premašilo moja očekivanja. Automobil je bio čist, pouzdan, a tim u An-An je olakšao i pojednostavio proces iznajmljivanja.\"",
		"contact1": "Radujemo se vašem kontaktu i pomoći vam u vašim potrebama za iznajmljivanjem.",
		"contact2": "Ovdje smo da vam pomognemo sa svim pitanjima, upitima ili posebnim zahtjevima koje možete imati. U An-An Rent a Car, vaše zadovoljstvo nam je prioritet i spremni smo vam pružiti izvanrednu korisničku uslugu. Slobodno nas kontaktirajte putem telefona, e-pošte ili posjetite našu povoljno smještenu lokaciju. Vaše putovanje počinje ovdje, i s nestrpljenjem iščekujemo da budemo dio njega. Povežimo se i učinimo vaše iskustvo iznajmljivanja automobila jednostavnim i ugodnim.",
		"kljuc": "Budite prvi: Najnovije vijesti o automobilima!",
		"teslareview": "\"Iznajmio sam Tesla automobil od An-An Rent a Car i imao sam izvanredno iskustvo. Automobil je bio u savršenom stanju, a osoblje je bilo izuzetno prijateljsko i profesionalno. Svakako ću se ponovo vratiti po još!\"",
		"years": "5 Godina Izvrsnosti: Obilježavanje Milestone-a!",
		"merc": "Doživite luksuz i sofisticiranost kao nikada ranije sa našim potpuno novim Mercedes-Benz modelom, sada dostupnim za vaše potrebe za iznajmljivanjem.",
		"an_an_aboutus": "Dobrodošli u An-An Rent a Car, vašeg pouzdanog servisa za iznajmljivanje automobila u prelijepoj Bosni i Hercegovini. U An-An, ponosimo se pružanjem vrhunskih vozila kako bi zadovoljili vaše potrebe za prijevozom, bilo da istražujete naše čarobne gradove, obilazite našu slikovitu prirodu ili se upuštate u uzbudljive avanture. Naša široka flota dobro održavanih automobila osigurava siguran i udoban put, a naš prijateljski i profesionalni tim posvećen je tome da vaše iskustvo iznajmljivanja automobila bude jednostavno i ugodno. Otkrijte ljepotu Bosne i Hercegovine s An-An Rent a Car, gdje smo posvećeni premašivanju vaših očekivanja.",
		"ford": "Bilo da istražujete grad ili krećete na otvorenu cestu, naši Ford najmovi pružaju savršenu ravnotežu snage i udobnosti.",
		"citro": "Citroen je svestran izbor za vaše potrebe za najmom, pružajući harmoničnu kombinaciju sigurnosti i modernog dizajna. Bez obzira jeste li u istraživanju gradskih pejzaža ili se upuštate u avanture izvan utabanih staza, Citroen pruža fantastično iskustvo vožnje. Rezervirajte svoj Citroen sada i krenite u svoju sljedeću avanturu!",
		"toyota": "Iznajmite luksuzni SUV ispunjen vrhunskom izvedbom i udobnošću - Toyota Fortuner. Ovaj prostrani automobil kombinira eleganciju s mogućnostima vožnje izvan asfalta, čineći ga savršenim izborom za istraživanje gradova i prirodne ljepote.",
		"offersclass2": "Ponude",
		"viewmoreclass1": "pogledajte više",
		"perweekend": "za vikend",
		"review6": "\"An-An Rent a Car mi je pružio Citroen za moje putovanje, i ne mogu biti sretniji. Automobil je bio pravo zadovoljstvo voziti, a cijeli proces najma je protekao glatko i bez ikakvih problema.\"",
		"from": "od",
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
		"bannerText1": "Ihre Einsparungen steigern",
		"banner2": "Erhalten Sie 20% Rabatt auf Van-Mieten heute!",
		"bannerText2": "Finden Sie uns in Ihrem nächstgelegenen Geschäft",
		"aboutus": "Über uns",
		"review2": "\"An-An Rent a Car ist meine erste Wahl in Bosnien und Herzegowina. Die Autos sind gut gewartet, und das Personal ist immer bereit zu helfen. Ich habe einen Mercedes-Benz gemietet, und er hat meine Reise unvergesslich gemacht.\"",
		"review3": "\"Der Mercedes-Benz, den ich bei An-An Rent a Car gemietet habe, war ein Blickfang. Er hat überall, wo ich hingekommen bin, die Blicke auf sich gezogen, und der Service war erstklassig. An-An ist ab sofort mein bevorzugtes Mietwagenunternehmen.\"",
		"review4": "\"Ich hatte eine fantastische Erfahrung beim Mieten eines Fahrzeugs von An-An Rent a Car für meinen Familienurlaub. Der Schlüssel zu unserer wunderbaren Reise war ein komfortables und zuverlässiges Auto von An-An. Wir sind äußerst zufrieden mit ihrem Service!\"",
		"review5": "\"Ich habe kürzlich einen Ford bei An-An Rent a Car gemietet, und er hat meine Erwartungen übertroffen. Das Auto war sauber, zuverlässig, und das Team von An-An hat den Mietprozess einfach und bequem gestaltet.\"",
		"review6": "\"An-An Rent a Car hat mir für meine Reise einen Citroen zur Verfügung gestellt, und ich könnte nicht glücklicher sein. Das Auto war eine Freude zu fahren, und der gesamte Mietprozess verlief reibungslos und problemlos.\"",
		"contact1": "Wir freuen uns auf Ihre Kontaktaufnahme und Unterstützung bei Ihren Mietwünschen.",
		"contact2": "Wir stehen Ihnen bei Fragen, Anfragen oder besonderen Wünschen gerne zur Verfügung. Bei An-An Rent a Car hat Ihre Zufriedenheit höchste Priorität, und wir sind bereit, Ihnen außergewöhnlichen Kundenservice zu bieten. Zögern Sie nicht, uns telefonisch, per E-Mail oder durch einen Besuch an unserem praktischen Standort zu kontaktieren. Ihre Reise beginnt hier, und wir sind bestrebt, ein Teil davon zu sein. Lassen Sie uns in Verbindung bleiben und Ihr Mietwagenerlebnis reibungslos und angenehm gestalten.",
		"kljuc": "Aktuelle Updates: Die neuesten Auto-Nachrichten!",
		"teslareview": "\"Ich habe einen Tesla bei An-An Rent a Car gemietet und hatte eine erstaunliche Erfahrung. Das Auto war in perfektem Zustand, und das Personal war äußerst freundlich und professionell. Ich werde auf jeden Fall wiederkommen!\"",
		"years": "5 Jahre Exzellenz: Feiern eines Meilensteins!",
		"merc": "Erleben Sie Luxus und Raffinesse wie nie zuvor mit unserem brandneuen Mercedes-Benz-Modell, das jetzt für Ihre Mietwünsche verfügbar ist.",
		"an_an_aboutus": "Willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Mietwagenservice im wunderschönen Bosnien und Herzegowina. Bei An-An sind wir stolz darauf, erstklassige Fahrzeuge anzubieten, um Ihren Transportbedarf zu decken, egal ob Sie unsere bezaubernden Städte erkunden, unsere malerische Landschaft bereisen oder auf aufregende Abenteuer aufbrechen. Unsere umfangreiche Flotte von gut gewarteten Autos sorgt für eine sichere und komfortable Reise, und unser freundliches, professionelles Team setzt sich dafür ein, Ihr Mietwagenerlebnis reibungslos und angenehm zu gestalten. Entdecken Sie die Schönheit von Bosnien und Herzegowina mit An-An Rent a Car, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen.",
		"ford": "Egal, ob Sie die Stadt erkunden oder auf der offenen Straße unterwegs sind, unsere Ford-Mietwagen bieten die perfekte Kombination aus Leistung und Komfort.",
		"citro": "Der Citroen ist eine vielseitige Wahl für Ihre Mietwünsche und bietet eine harmonische Kombination aus Sicherheit und modernem Design. Egal, ob Sie städtische Landschaften erkunden oder abseits ausgetretener Pfade unterwegs sind, der Citroen bietet ein fantastisches Fahrerlebnis. Buchen Sie jetzt Ihren Citroen und begeben Sie sich auf Ihr nächstes Abenteuer!",
		"toyota": "Mieten Sie ein luxuriöses SUV mit erstklassiger Leistung und Komfort - den Toyota Fortuner. Dieses geräumige Fahrzeug kombiniert Eleganz mit Offroad-Fähigkeiten und ist somit die perfekte Wahl für die Erkundung von Städten und natürlicher Schönheit."
	}
	
  }
