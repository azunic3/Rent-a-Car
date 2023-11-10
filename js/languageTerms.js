const offersclass2 = document.querySelector('.offersclass2');
const aboutus1 = document.querySelector('.aboutus1');
const contactus2 = document.querySelector('.contactus2');
const agree = document.querySelector('.agree');

const age = document.querySelector('.age');
const ageWritten = document.querySelector('.ageWritten');
const fuelPolicy = document.querySelector('.fuelPolicy');
const fuelPolicyWritten = document.querySelector('.fuelPolicyWritten');
const acknowledge = document.querySelector('.acknowledge');
const payment = document.querySelector('.payment');
const paymentWritten = document.querySelector('.paymentWritten');

const homeclass1 = document.querySelector('.homeclass1');


const team = document.querySelector('.team');
const terms = document.querySelector('.terms');

const testimonials = document.querySelector('.testimonials');

const uslovi = document.querySelector('.uslovi');

const more = document.querySelector('.more');




  window.onload=(function(){
  
    const attr= localStorage.getItem('language');
    offersclass2.textContent = data[attr].offersclass2;
    aboutus1.textContent = data[attr].aboutus1;
    contactus2.textContent = data[attr].contactus;
    age.textContent = data[attr].age;
    ageWritten.textContent = data[attr].ageWritten;
    agree.textContent = data[attr].agree;
    fuelPolicy.textContent = data[attr].fuelPolicy;
    fuelPolicyWritten.textContent = data[attr].fuelPolicyWritten;
    acknowledge.textContent = data[attr].acknowledge;
    payment.textContent = data[attr].payment;
    paymentWritten.textContent = data[attr].paymentWritten;


    
    homeclass1.textContent = data[attr].homeclass1;
    
   // blog.textContent = data[attr].blog;
    
    team.textContent = data[attr].team;
    
    testimonials.textContent = data[attr].testimonials;
    
    uslovi.textContent = data[attr].uslovi;
    
    terms.textContent = data[attr].uslovi;

    more.textContent = data[attr].more;

    
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
      "agree":"By using the services provided by An-An Rent a Car, you agree to the following terms and conditions:",
      "homeclass1": "Home",
      "uslovi": "Terms",
      "age":"Age Requirement",
      "blog": "Blog",
      "team": "Team",
      "testimonials": "Reviews",
      "ageWritten":"Renters must be at least 18 years of age to rent a vehicle from An-An Rent a Car.",
      "more": "More",
      "fuelPolicy":"Fuel Policy",
      "payment":"Payment",
      "acknowledge":"By renting a vehicle from An-An Rent a Car, you acknowledge and agree to abide by these terms and conditions. Failure to comply with these terms may result in additional charges and penalties. It is your responsibility to review and understand these terms and conditions before renting a vehicle from us. If you have any questions or require clarification, please do not hesitate to contact our customer service team for assistance.",
      "paymentWritten":"Payment for the rental must be made immediately upon the commencement of the rental period. We accept various forms of payment, including credit cards and cash, subject to the payment methods specified at the time of booking.",
      "fuelPolicyWritten":"When you pick up the rental vehicle, it will be provided with a full tank of fuel. You are responsible for returning the vehicle with a full tank of fuel. If the vehicle is not returned with a full tank, you will be charged for the cost of refueling in addition to a service fee.",
      "clio":"Discover the Renault Clio, a popular and reliable choice for your weekend trips. This compact car boasts excellent fuel efficiency and a comfortable interior, ensuring a smooth and enjoyable ride.",
"volks":"Experience the versatility and style of the Volkswagen T-Cross. This compact SUV offers a perfect blend of performance and comfort, making it an ideal choice for weekend getaways.",
"polo":"Experience the Volkswagen Polo, a well-rounded and compact car perfect for your weekend escapades. With its efficient performance and comfortable interior, the Polo offers an enjoyable driving experience.",    
"tesla":"Embrace the future of driving with the Tesla. This electric marvel combines cutting-edge technology with eco-friendliness for an extraordinary weekend experience.",
"benz":"Indulge in the luxury and performance of a Mercedes-Benz for your weekend escape. These prestigious vehicles offer top-tier comfort and style, setting the stage for an unforgettable trip.",
},
  "bosnian": {
      "aboutus": "O nama",
      "payment":"Plaćanje",
      "fuelPolicy":"Pravilnik o gorivu",
      "acknowledge":"Korišćenjem usluga iznajmljivanja vozila od strane An-An Rent a Car, potvrđujete i slažete se da ćete se pridržavati ovih uslova i odredbi. Nepoštovanje ovih uslova može rezultirati dodatnim troškovima i kaznama. Vaša je odgovornost pregledati i razumjeti ove uslove i odredbe prije nego što iznajmite vozilo od nas. Ako imate bilo kakvih pitanja ili trebate pojašnjenje, slobodno se obratite našem timu za korisničku podršku.",
      "paymentWritten":"Plaćanje mora biti izvršeno odmah po početku perioda korištenja. Prihvatamo različite načine plaćanja, uključujući kreditne kartice i gotovinu, prema načinima plaćanja navedenim prilikom rezervacije.",
      "fuelPolicyWritten":"Kada preuzmete unajmljeni automobil, dobit ćete ga s punim rezervoarom goriva. Vi ste odgovorni za vraćanje automobila s punim rezervoarom goriva. Ako vozilo nije vraćeno s punim rezervoarom, bit ćete zaduženi za troškove ponovnog goriva, uz dodatnu uslugu.",
      "age":"Starosno ograničenje",
      "ageWritten":"Osobe koje žele iznajmiti vozilo od An-An Rent a Car moraju imati najmanje 18 godina.",
      "agree":"Korištenjem usluga koje pruža An-An Rent a Car, pristajete na sljedeće uslove i odredbe:",
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
"german":{
      "aboutus":"Über uns",
      "member":"Unsere Teammitglieder",
      "contact1":"Wir freuen uns auf Ihre Kontaktaufnahme und Unterstützung bei Ihren Mietwünschen.",
      "contact2":"Wir stehen Ihnen bei Fragen, Anfragen oder besonderen Wünschen gerne zur Verfügung. Bei An-An Rent a Car steht Ihre Zufriedenheit an erster Stelle, und wir sind bereit, Ihnen außergewöhnlichen Kundenservice zu bieten. Sie können uns gerne telefonisch, per E-Mail oder durch einen Besuch an unserem bequemen Standort erreichen. Ihre Reise beginnt hier, und wir freuen uns darauf, ein Teil davon zu sein. Lassen Sie uns in Verbindung treten und Ihr Mietwagenerlebnis nahtlos und angenehm gestalten.",
      "an_an_aboutus":"Willkommen bei An-An Rent a Car, Ihrem vertrauenswürdigen Autovermietservice im schönen Bosnien und Herzegowina. Bei An-An sind wir stolz darauf, erstklassige Fahrzeuge anzubieten, um Ihre Transportbedürfnisse zu erfüllen, egal ob Sie unsere bezaubernden Städte erkunden, unsere malerische Landschaft bereisen oder auf aufregende Abenteuer aufbrechen. Unsere umfangreiche Flotte von gut gewarteten Autos gewährleistet eine sichere und komfortable Reise, und unser freundliches, professionelles Team ist darauf spezialisiert, Ihr Mietwagenerlebnis reibungslos und angenehm zu gestalten. Entdecken Sie die Schönheit von Bosnien und Herzegowina mit An-An Rent a Car, wo wir uns verpflichtet haben, Ihre Erwartungen zu übertreffen.",
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
      "contactus": "Kontaktieren Sie uns",
      "websitevisitcount": "Webseiten-Besucherzähler:",
      "fleet": "Fahrzeugflotte",
      "agree":"Durch die Nutzung der von An-An Rent a Car angebotenen Dienstleistungen stimmen Sie den folgenden Geschäftsbedingungen zu:",
      "homeclass1": "Startseite",
      "uslovi": "Geschäftsbedingungen",
      "age":"Altersanforderung",
      "blog": "Blog",
      "team": "Team",
      "testimonials": "Bewertungen",
      "ageWritten":"Mieter müssen mindestens 18 Jahre alt sein, um ein Fahrzeug von An-An Rent a Car zu mieten.",
      "more": "Mehr",
      "fuelPolicy":"Kraftstoffpolitik",
      "payment":"Zahlung",
      "acknowledge":"Durch die Anmietung eines Fahrzeugs von An-An Rent a Car erkennen Sie an und erklären sich damit einverstanden, sich an diese Geschäftsbedingungen zu halten. Bei Nichteinhaltung dieser Bedingungen können zusätzliche Kosten und Strafen anfallen. Es liegt in Ihrer Verantwortung, diese Geschäftsbedingungen vor der Anmietung eines Fahrzeugs von uns zu überprüfen und zu verstehen. Wenn Sie Fragen haben oder Klarstellungen benötigen, zögern Sie nicht, sich an unser Kundenserviceteam zu wenden.",
      "paymentWritten":"Die Zahlung für die Anmietung muss sofort zu Beginn des Anmietungszeitraums erfolgen. Wir akzeptieren verschiedene Zahlungsmethoden, einschließlich Kreditkarten und Bargeld, je nach den zum Zeitpunkt der Buchung angegebenen Zahlungsmethoden.",
      "fuelPolicyWritten":"Wenn Sie das gemietete Fahrzeug abholen, wird es mit vollem Tank übergeben. Sie sind dafür verantwortlich, das Fahrzeug mit vollem Tank zurückzugeben. Wenn das Fahrzeug nicht mit vollem Tank zurückgegeben wird, fallen Kosten für das Nachfüllen sowie eine Servicegebühr an.",
      "clio":"Entdecken Sie den Renault Clio, eine beliebte und zuverlässige Wahl für Ihre Wochenendausflüge. Dieses kompakte Auto überzeugt durch hervorragende Kraftstoffeffizienz und einen komfortablen Innenraum, der eine reibungslose und angenehme Fahrt garantiert.",
      "volks":"Erleben Sie die Vielseitigkeit und den Stil des Volkswagen T-Cross. Dieses kompakte SUV bietet eine perfekte Mischung aus Leistung und Komfort und eignet sich ideal für Wochenendausflüge.",
      "polo":"Erleben Sie den Volkswagen Polo, ein vielseitiges und kompaktes Auto, das sich perfekt für Ihre Wochenendausflüge eignet. Mit seiner effizienten Leistung und dem komfortablen Innenraum bietet der Polo ein angenehmes Fahrerlebnis.",
      "tesla":"Begrüßen Sie die Zukunft des Fahrens mit dem Tesla. Dieses elektrische Wunder kombiniert modernste Technologie mit Umweltfreundlichkeit für ein außergewöhnliches Wochenenderlebnis.",
      "benz":"Genießen Sie Luxus und Leistung eines Mercedes-Benz für Ihr Wochenendabenteuer. Diese renommierten Fahrzeuge bieten erstklassigen Komfort und Stil und schaffen die Grundlage für eine unvergessliche Reise.",
    }
}
