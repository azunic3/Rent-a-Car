 const offersclass2 = document.querySelector('.offersclass2');
  const aboutus1 = document.querySelector('.aboutus1');
  const contactus2 = document.querySelector('.contactus2');


const homeclass1 = document.querySelector('.homeclass1');


const team = document.querySelector('.team');

const testimonials = document.querySelector('.testimonials');

const uslovi = document.querySelector('.uslovi');

const more = document.querySelector('.more');

const member=document.querySelector('.member')



    window.onload=(function(){
    
      const attr= localStorage.getItem('language');
	  offersclass2.textContent = data[attr].offersclass2;
	  aboutus1.textContent = data[attr].aboutus1;
	  contactus2.textContent = data[attr].contactus;


      
	  homeclass1.textContent = data[attr].homeclass1;
	  
	 // blog.textContent = data[attr].blog;
	  
	  team.textContent = data[attr].team;
	  
	  testimonials.textContent = data[attr].testimonials;
	  
	  uslovi.textContent = data[attr].uslovi;
	  
	  
	  more.textContent = data[attr].more;
      member.textContent=data[attr].member;

      
    });
  
  var data={
    "english":{
		"aboutus":"About Us",
        "member":"Our Team Members",
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
		"blog": "Blog",
		"team": "Team",
		"testimonials": "Reviews",
		"more": "More",
        "clio":"Discover the Renault Clio, a popular and reliable choice for your weekend trips. This compact car boasts excellent fuel efficiency and a comfortable interior, ensuring a smooth and enjoyable ride.",
"volks":"Experience the versatility and style of the Volkswagen T-Cross. This compact SUV offers a perfect blend of performance and comfort, making it an ideal choice for weekend getaways.",
"polo":"Experience the Volkswagen Polo, a well-rounded and compact car perfect for your weekend escapades. With its efficient performance and comfortable interior, the Polo offers an enjoyable driving experience.",    
"tesla":"Embrace the future of driving with the Tesla. This electric marvel combines cutting-edge technology with eco-friendliness for an extraordinary weekend experience.",
"benz":"Indulge in the luxury and performance of a Mercedes-Benz for your weekend escape. These prestigious vehicles offer top-tier comfort and style, setting the stage for an unforgettable trip.",
},
	"bosnian": {
		"aboutus": "O nama",
        "member":"Članovi naše ekipe",
        "clio":"Otkrijte Renault Clio, popularan i pouzdan izbor za vaše vikend putovanje. Ovaj kompaktni automobil se ponosi odličnom efikasnošću goriva i udobnim unutrašnjim prostorom, osiguravajući glatku i ugodnu vožnju.",
			"contact1": "Radujemo se vašem kontaktu i pomoći vam u vašim potrebama za iznajmljivanjem.",
		"contact2": "Ovdje smo da vam pomognemo sa svim pitanjima, upitima ili posebnim zahtjevima koje možete imati. U An-An Rent a Car, vaše zadovoljstvo nam je prioritet i spremni smo vam pružiti izvanrednu korisničku uslugu. Slobodno nas kontaktirajte putem telefona, e-pošte ili posjetite našu povoljno smještenu lokaciju. Vaše putovanje počinje ovdje, i s nestrpljenjem iščekujemo da budemo dio njega. Povežimo se i učinimo vaše iskustvo iznajmljivanja automobila jednostavnim i ugodnim.",
		"polo":"Doživite Volkswagen Polo, dobro zaokrugli i kompaktni automobil savršen za vaše vikend avanture. S efikasnom izvedbom i udobnim unutrašnjim prostorom, Polo nudi ugodno iskustvo vožnje.",	
        "an_an_aboutus": "Dobrodošli u An-An Rent a Car, vašeg pouzdanog servisa za iznajmljivanje automobila u prelijepoj Bosni i Hercegovini. U An-An, ponosimo se pružanjem vrhunskih vozila kako bi zadovoljili vaše potrebe za prijevozom, bilo da istražujete naše čarobne gradove, obilazite našu slikovitu prirodu ili se upuštate u uzbudljive avanture. Naša široka flota dobro održavanih automobila osigurava siguran i udoban put, a naš prijateljski i profesionalni tim posvećen je tome da vaše iskustvo iznajmljivanja automobila bude jednostavno i ugodno. Otkrijte ljepotu Bosne i Hercegovine s An-An Rent a Car, gdje smo posvećeni premašivanju vaših očekivanja.",
		"offersclass2": "Ponude",
		"viewmoreclass1": "pogledajte više",
		"perweekend": "za vikend",
		"from": "od",
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
        "member": "Unsere Teammitglieder",
        "contact1": "Wir freuen uns auf Ihre Kontaktaufnahme und unterstützen Sie gerne bei Ihren Mietwünschen.",
        "contact2": "Wir stehen Ihnen bei Fragen, Anfragen oder besonderen Wünschen gerne zur Verfügung. Bei An-An Rent a Car hat Ihre Zufriedenheit höchste Priorität, und wir sind bereit, Ihnen außergewöhnlichen Kundenservice zu bieten. Zögern Sie nicht, uns telefonisch, per E-Mail oder durch einen Besuch an unserem praktischen Standort zu kontaktieren. Ihre Reise beginnt hier, und wir freuen uns, ein Teil davon zu sein. Lassen Sie uns in Kontakt bleiben und Ihr Mietwagen-Erlebnis reibungslos und angenehm gestalten.",
        "an_an_aboutus": "Willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Mietwagenservice im schönen Bosnien und Herzegowina. Bei An-An sind wir stolz darauf, erstklassige Fahrzeuge anzubieten, um Ihren Transportbedarf zu decken, egal ob Sie unsere bezaubernden Städte erkunden, unsere malerische Landschaft bereisen oder auf aufregende Abenteuer aufbrechen. Unsere umfangreiche Flotte von gut gewarteten Autos sorgt für eine sichere und komfortable Reise, und unser freundliches, professionelles Team setzt sich dafür ein, Ihr Mietwagenerlebnis reibungslos und angenehm zu gestalten. Entdecken Sie die Schönheit von Bosnien und Herzegowina mit An-An Rent a Car, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen.",
        "offersclass2": "Angebote",
        "viewmoreclass1": "Mehr anzeigen",
        "perweekend": "pro Wochenende",
        "from": "ab",
        "aboutus1": "Über uns",
        "readmore": "Weiterlesen",
        "latblogpost": "Neueste Blog-Beiträge",
        "happyclients": "Zufriedene Kunden",
        "pricesprev": "Preise",
        "pricemenu": "Laden Sie unsere Preisliste herunter",
        "contactus": "Kontakt",
        "websitevisitcount": "Website-Besucheranzahl:",
        "fleet": "Fahrzeugflotte",
        "homeclass1": "Startseite",
        "uslovi": "Geschäftsbedingungen",
        "blog": "Blog",
        "team": "Team",
        "testimonials": "Bewertungen",
        "more": "Mehr",
        "clio": "Entdecken Sie den Renault Clio, eine beliebte und zuverlässige Wahl für Ihre Wochenendausflüge. Dieser kompakte Wagen bietet eine hervorragende Kraftstoffeffizienz und einen komfortablen Innenraum, für eine reibungslose und angenehme Fahrt.",
        "volks": "Erleben Sie die Vielseitigkeit und den Stil des Volkswagen T-Cross. Dieses kompakte SUV bietet eine perfekte Mischung aus Leistung und Komfort und ist somit die ideale Wahl für Wochenendausflüge.",
        "polo": "Erleben Sie den Volkswagen Polo, ein vielseitiges und kompaktes Auto, das perfekt für Ihre Wochenendausflüge geeignet ist. Mit seiner effizienten Leistung und dem komfortablen Innenraum bietet der Polo ein angenehmes Fahrerlebnis.",
        "tesla": "Begrüßen Sie die Zukunft des Fahrens mit dem Tesla. Dieses elektrische Wunder verbindet modernste Technologie mit Umweltfreundlichkeit für ein außergewöhnliches Wochenenderlebnis.",
        "benz": "Genießen Sie Luxus und Leistung mit einem Mercedes-Benz für Ihr Wochenende. Diese renommierten Fahrzeuge bieten erstklassigen Komfort und Stil und setzen die Bühne für eine unvergessliche Reise."
    }
    
  }
