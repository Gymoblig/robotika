// Otázky a odpovede
const questions = [
    {
        question: "Ktoré z ďalej uvedených vlastností NEpatria medzi typické vlastnosti robotov",
        options: [
            "anatomická podobnost s človekom",
            "autonómnosť",
            "manipulačná schopnosť"
        ],
        answer: 0,
        explanation: "Anatomická podobnosť s človekom nie je typickou vlastnosťou robotov, zatiaľ čo autonómnosť a manipulačná schopnosť sú."
    },
    {
        question: "Medzi biomorfné spôsoby realizácie robotickej konštrukcie NEpatrí",
        options: [
            "lietajúci robot s virtulovým pohonom",
            "lietajúci robot, ktorý máva krídlami",
            "robot plávajúci ako ryba"
        ],
        answer: 0,
        explanation: "Lietajúci robot s virtuálnym pohonom nie je biomorfný, zatiaľ čo roboty napodobňujúce pohyb krídel alebo rýb sú biomorfné."
    },
    {
        question: "Pri teleriadení na rozdiel od diaľkového ovládania",
        options: [
            "operátor sleduje scénu cez senzory robota (napr. jeho kamery)",
            "operátor nie je vo fyzickom kontakte s ovládaným robotom",
            "ovládaný robot je v zornom poli operátora"
        ],
        answer: 0,
        explanation: "Pri teleriadení operátor typicky sleduje scénu cez senzory robota, čo je kľúčový rozdiel oproti diaľkovému ovládaniu."
    },
    {
        question: "Haptická spätná väzba v prípade teleriadenia zabezpečuje prenos informácií vnímaných nasledovných ľudským zmyslom",
        options: [
            "hmat",
            "zrak",
            "sluch"
        ],
        answer: 0,
        explanation: "Haptická spätná väzba sa týka prenosu hmatových vnemov."
    },
    {
        question: "Kinematická štruktúra robotického manipulátora na obrázku sa volá",
        image: "images/1.png", // Cesta k obrázku
        options: [
            "Cylindrická",
            "Kĺbová",
            "SCARA"
        ],
        answer: 0,
        explanation: "Cylindrická kinematická štruktúra je charakteristická svojou schopnosťou pohybu v dvoch osiach."
    },
    {
        question: "Kinematická štruktúra robotického manipulátora na obrázku sa volá",
        image: "images/5.png", // Cesta k obrázku
        options: [
            "Cylindrická",
            "Kĺbová",
            "SCARA"
        ],
        answer: 2,
        explanation: "SCARA kinematická štruktúra je charakteristická svojou schopnosťou pohybu v horizontálnom smere."
    },
    {
        question: "Kinematická štruktúra na obrázku sa volá",
        image: "images/2.png", // Cesta k obrázku
        options: [
            "Sférická",
            "Kĺbová",
            "Kartézska"
        ],
        answer: 0,
        explanation: "Sférická kinematická štruktúra je charakteristická tým, že opisuje pohyb guľového kĺbu."
    },
    {
        question: "Systém symbolizovaný na obrázku sa vyznačuje nasledovnými vlastnosťami:",
        image: "images/6.png", // Cesta k obrázku
        options: [
            "vysoká presnosť a nízka opakovateľnosť",
            "nízka presnosť a vysoká opakovateľnosť",
            "nízka presnosť aj nízka opakovateľnosť"
        ],
        answer: 0,
        explanation: "Sférická kinematická štruktúra je charakteristická tým, že opisuje pohyb guľového kĺbu."
    },
    {
        question: "Kinematická štruktúra na obrázku sa volá",
        image: "images/3.png", // Cesta k obrázku
        options: [
            "Sférická",
            "Kĺbová",
            "Kartézska"
        ],
        answer: 1,
        explanation: "Kĺbová kinematická štruktúra je charakteristická svojim počtom kĺbov (no shit)"
    },
    {
        question: "V prípade naznačenej konštrukcie podvozku mobilného robota s 3 všesmerovými kolesami za predpokladu, že koleso č.1 bude stáť a kolesá č.2 a 3 sa budú krútiť rovnakou, ale opačne orientovanou rýchlosťou (v2=-v3), robot sa bude pohybovať v nasledovnom smere",
        image: "images/7.png", // path to your image
        options: [
            "priamočiary pohyb vo zvislom smere",
            "priamočiary pohyb vo vodorovnom smere",
            "bude sa otáčať okolo svojej vlastnej osi"
        ],
        answer: 1, // Correct answer is B (index 1)
        explanation: "Priamočiary pohyb vo zvislom smere. Pri takomto usporiadaní koles a ich otáčaní sa robot bude pohybovať vertikálne."
    },
    {
        question: "Aplikácia paralelogramu v prípade kĺbovej kinematickej štruktúry robotických manipulátorov sa NĚrealizuje z dôvodu",
        options: [
            "zvýšenie pružnosti",
            "zvýšenie tuhosti",
            "možnosť umiestnenia pohonov v blízkosti základne robota"
        ],
        answer: 0,
        explanation: "Paralelogram sa nepoužíva na zvýšenie pružnosti, ale naopak na zvýšenie tuhosti a umiestnenie pohonov."
    },
    {
        question: "Kinematická štruktúra SCARA má typicky nasledovný počet stupňov voľnosti",
        options: [
            "4",
            "2",
            "6"
        ],
        answer: 0,
        explanation: "SCARA roboty majú typicky 4 stupne voľnosti."
    },
    {
        question: "Ľudská ruka (rameno, lakeť a zápästie spolu) má nasledovný počet stupňov volnosti",
        options: [
            "7",
            "6",
            "5"
        ],
        answer: 0,
        explanation: "Ľudská ruka má 7 stupňov voľnosti (3 v ramene, 2 v lakte a 2 v zápästí)."
    },
    {
        question: "Štandardný priemyselný robot určený na manipuláciu nástrojom (zvárací horák, zváracie kliešte a pod.) má typicky nasledovný počet stupňov volnosti",
        options: [
            "5-6",
            "3-4",
            "7-8"
        ],
        answer: 0,
        explanation: "Štandardné priemyselné roboty majú typicky 5-6 stupňov voľnosti."
    },
    {
        question: "Červenou farbou označený pohyb (orientácia) sa nazýva",
        image: "images/4.png", // Cesta k obrázku
        options: [
            "sklon (klopenie, angl. pitch)",
            "náklon (klonenie, angl. roll)",
            "vybočenie (bočenie, angl. yaw)"
        ],
        answer: 0,
        explanation: "Náklon (roll) je pohyb okolo pozdĺžnej osi."
    },
    {
        question: "Hodnota presnosti polohovania v porovnaní s hodnotou opakovatelnosti",
        options: [
            "môže byť vyššia aj nižšia",
            "vždy vyššia",
            "vždy nižšia"
        ],
        answer: 0,
        explanation: "Presnosť je vždy nižšia alebo rovná opakovateľnosti."
    },
    {
        question: "Keď sa motor v klbe otáča rýchlosťou 3000 ot/min, akou tangenciálnou rýchlosťou sa pohybuje koncový bod ramena s dĺžkou 2 m, ak je motor sprevodovaný do pomala v pomere 1:200?",
        options: [
            "3,14 m/s",
            "6,28 m/s",
            "2 m/s"
        ],
        answer: 0,
        explanation: "Výpočet: (3000 ot/min) / (60 s/min) / 200 * (2π * 2 m) = 3,14 m/s"
    },
    {
        question: "Mobilné (teleovládané) roboty s označením UGV sa pohybujú",
        options: [
            "po zemi",
            "vo vzduchu",
            "pod vodnou hladinou"
        ],
        answer: 0,
        explanation: "UGV (Unmanned Ground Vehicle) sú pozemné roboty."
    },
    {
        question: "Mobilné (teleovládané) roboty s označením UAV sa pohybujú",
        options: [
            "vo vzduchu",
            "po zemi",
            "na vodnej hladine"
        ],
        answer: 0,
        explanation: "UAV (Unmanned Aerial Vehicle) sú lietajúce roboty."
    },
    {
        question: "Výkyvné kolieska sa v podvozkoch mobilných robotov používajú v úlohe",
        options: [
            "pasívnych oporných kolies",
            "hnacích alebo riadiacich kolies",
            "len hnacích kolies (nie riadiacich)"
        ],
        answer: 0,
        explanation: "Výkyvné kolieska sa používajú ako oporné kolesá."
    },
    {
        question: "Podvozok robota s diferenciálnym pohonom je poháňaný nasledovným počtom motorov",
        options: [
            "2",
            "3",
            "1"
        ],
        answer: 0,
        explanation: "Diferenciálny podvozok má dva motory - jeden pre každé koleso."
    },
    {
        question: "Synchrónny podvozok mobilného robota NEumožňuje",
        options: [
            "rotáciu okolo vlastnej osi",
            "pohyb po priamke",
            "pohyb do boku"
        ],
        answer: 0,
        explanation: "Synchrónny podvozok umožňuje pohyb do boku, ale nie rotáciu okolo vlastnej osi."
    },
    {
        question: "Ackermanov (automobilový) podvozok NEumožňuje",
        options: [
            "otáčanie okolo vlastnej osi ani pohyb do boku",
            "otáčanie okolo vlastnej osi ani priamočiary pohyb",
            "pohyb po oblúku ani pohyb do boku"
        ],
        answer: 0,
        explanation: "Ackermanov podvozok neumožňuje ani otáčanie okolo vlastnej osi, ani pohyb do boku."
    },
    {
        question: "V prípade Ackermanovho (automobilového) podvozku je pri prejazde zákrutou uhol vybočenia vnútorného predného kolesa v porovnaní s vonkajším kolesom",
        options: [
            "Vačíši",
            "Menší",
            "Rovnaký"
        ],
        answer: 0,
        explanation: "Vnútorné koleso má väčší uhol vybočenia ako vonkajšie."
    },
    {
        question: "Ked sa v prípade diferenciálneho podvozku krúti lavé koleso dvojnásobnou rýchlosťou ako pravé (v ROVNAKOM SMERE), mobilný robot bude",
        options: [
            "zatáčať po oblúku doprava",
            "zatáčať po oblúku doľava",
            "sa otáčať okolo vlastnej osi"
        ],
        answer: 0,
        explanation: "Väčšia rýchlosť ľavého kolesa spôsobí zatáčanie doprava."
    },
    {
        question: "Aké výhody ponúkajú paralelné kinematické štruktúry v porovnaní so sériovými?",
        options: [
            "vyššiu tuhosť",
            "väčší pracovný priestor",
            "jednoduchšie riešenie priamej kinematickej úlohy"
        ],
        answer: 0,
        explanation: "Paralelné kinematické štruktúry majú vyššiu tuhosť v porovnaní so sériovými."
    },
    {
        question: "Na zabezpečenie statickej stability v prípade krácajúcich mobilných robotov musia byť v kontakte s podložkou minimálne",
        options: [
            "3 nohy",
            "2 nohy",
            "4 nohy"
        ],
        answer: 0,
        explanation: "Pre statickú stabilitu sú potrebné minimálne 3 body podpory."
    },
    {
        question: "Kolkými motormi je poháňaný synchrómy podvozok s 3 kolesami?",
        options: [
            "2",
            "3",
            "4"
        ],
        answer: 0,
        explanation: "Synchrónny podvozok s 3 kolesami má 3 motory - jeden pre každé koleso."
    },
    {
        question: "Kolkými motormi je poháňaný podvozok typu Segway?",
        options: [
            "2",
            "3",
            "4"
        ],
        answer: 0,
        explanation: "Segway má dva motory - jeden pre každé koleso."
    },
    {
        question: "Diferenciálny podvozok NEumožňuje:",
        options: [
            "pohyb do boku",
            "rotáciu okolo vlastnej osi",
            "pohyb po priamke (v priamom smere)"
        ],
        answer: 0,
        explanation: "Diferenciálny podvozok neumožňuje pohyb do boku."
    },
    {
        question: "Keď sa v prípade diferenciálneho podvozku krúti lavé koleso rovnakou rýchlosťou ako pravé, ale v OPAČNOM SMERE, mobilný robot bude",
        options: [
            "sa otáčať okolo svojej osi",
            "zatáčať po oblúku doľava",
            "sa pohybovať v priamom smere"
        ],
        answer: 0,
        explanation: "Opakujúce sa otáčanie koles spôsobí rotáciu robota okolo vlastnej osi."
    },
    {
        question: "Vzdialenosť prednej a zadnej nápravy sa v prípade 4-kolesové podvozku nazýva:",
        options: [
            "Rázvor",
            "Rozchod",
            "polomer otáčania"
        ],
        answer: 0,
        explanation: "Vzdialenosť medzi nápravami sa nazýva rázvor."
    },
    {
        question: "Ktorý z vymenovaných podvozkov je NAJMENEJ vhodný pre robotické aplikácie?",
        options: [
            "Bicyklový",
            "diferenciálny bez oporných koliesok",
            "diferenciálny s opornými kolieskami"
        ],
        answer: 0,
        explanation: "Bicyklový podvozok je najmenej vhodný pre robotické aplikácie."
    },
    {
        question: "Skratka AGV znamená:",
        options: [
            "Automated Guided Vehicle",
            "Aerial Ground Vehicle",
            "Automatic Ground Vehicle"
        ],
        answer: 0,
        explanation: "AGV znamená Automated Guided Vehicle."
    },
    {
        question: "Ako sa volá vynálezca, ktorý si ako prvý dal patentovať podvozok typu Segway?",
        options: [
            "Dean Kamen",
            "Josef F. Blumrich",
            "Bengt Ilon"
        ],
        answer: 0,
        explanation: "Dean Kamen je vynálezca Segway."
    },
    {
        question: "Akú kinematickú štruktúru predstavuje požiarne auto s rebríkom?",
        options: [
            "Sférickú",
            "Cylindrickú",
            "Kĺbovú"
        ],
        answer: 0,
        explanation: "Požiarne auto s rebríkom má sférickú kinematickú štruktúru."
    },
    {
        question: "Hydraulické pohony charakterizujú pojmy:",
        options: [
            "Velké sily, vysoká tuhosť, dobrá dynamika, ale velké vlastné rozmery",
            "Dobrá riaditelnosť, malé vlastné rozmery, ale je potrebné aplikovať prevodovku",
            "Poddajnosť, malá vyvíjaná sila a zlá riaditelnosť"
        ],
        answer: 0,
        explanation: "Hydraulické pohony poskytujú veľké sily a vysokú tuhosť, ale majú veľké rozmery."
    },
    {
        question: "Pneumatický pohon charakterizujú pojmy:",
        options: [
            "Poddajnosť, dobrá cena, ale malá sila a zlá riaditelnosť",
            "Velké sily, vysoká tuhosť, dobrá dynamika, ale velké vlastné rozmery",
            "Dobrá riaditelnosť, malé vlastné rozmery, ale je potrebné aplikovať prevodovku"
        ],
        answer: 0,
        explanation: "Pneumatické pohony sú poddajné a lacné, ale majú obmedzenú silu a zlú riaditeľnosť."
    },
    {
        question: "Akú kinematickú štruktúru predstavuje mostový žeriav?",
        options: [
            "Kartézskú",
            "Cylindrickú",
            "Sférickú"
        ],
        answer: 0,
        explanation: "Mostový žeriav má kartézsku kinematickú štruktúru."
    },
    {
        question: "Kolko nôh má mobilný robot typu HEXAPOD?",
        options: [
            "6",
            "4",
            "16"
        ],
        answer: 0,
        explanation: "Hexapod znamená šesť nôh (hexa = šesť, pod = noha)."
    },
    {
        question: "Aká je výhoda kinematiky typu SCARA?",
        options: [
            "Vysoká dynamika a pružnosť v horizontálnom smere",
            "Vysoká dynamika a pružnosť vo vertikálnom smere.",
            "Vysoká pružnosť vo všetkých smeroch."
        ],
        answer: 0,
        explanation: "SCARA roboty majú vysokú dynamiku a pružnosť v horizontálnom smere."
    },
    {
        question: "Medzi dôvody nasadzovania robotov v priemysle a iných oblastiach NEpatrí:",
        options: [
            "vysoká nezamestnanosť",
            "nedostatok pracovníkov v príslušnej profesii",
            "snaha o zníženie výrobných nákladov"
        ],
        answer: 0,
        explanation: "Vysoká nezamestnanosť nie je dôvodom pre nasadenie robotov."
    },
    {
        question: "Názov 'švédske koleso' sa používa pre druh",
        options: [
            "všesmerového kolesa",
            "guľového kolesa",
            "výkyvného kolesa"
        ],
        answer: 0,
        explanation: "Švédske koleso je typ všesmerového kolesa."
    },
    {
        question: "Os, okolo ktorej sa otáča a os, okolo ktorej sa natáča výkyvné koleso sú vzájomne:",
        options: [
            "Mimobežné",
            "Rôznobežné",
            "Rovnobežné"
        ],
        answer: 0,
        explanation: "Os otáčania a os výkyvu sú mimobežné."
    },
    {
        question: "Koľko kolies má Ackermannov podvozok?",
        options: [
            "4 (a viac)",
            "3",
            "2"
        ],
        answer: 0,
        explanation: "Ackermannov podvozok má typicky 4 kolesá."
    },
    {
        question: "Minimálny polomer otáčania trojkolky s predným náhonom je daný max. uhlom natočenia predného kolesa a veľkosťou:",
        options: [
            "Rázvoru",
            "rozchodu zadných kolies",
            "rázvoru aj rozchodu zadných kolies"
        ],
        answer: 0,
        explanation: "Minimálny polomer otáčania závisí od rázvoru a maximálneho uhla natočenia."
    },
    {
        question: "Medzi výhody krácajúcich podvozkov oproti kolesovým možno zaradiť:",
        options: [
            "možnosť prekračovať nerovnosti povrchu a menšie prekážky",
            "jednoduchšia mechanická konštrukcia",
            "nižšia spotreba energie pri pohybe"
        ],
        answer: 0,
        explanation: "Kráčajúce roboty lepšie zvládajú nerovnosti terénu."
    },
    {
        question: "Prvé 3 stupne volnosti sférického robota sú nasledujúcich typov:",
        options: [
            "2 rotačné a 1 transláčný",
            "1 rotačný a 2 translačné",
            "všetky sú rotačné"
        ],
        answer: 0,
        explanation: "Sférický robot má prvé 3 stupne voľnosti 2 rotačné a 1 transláčný."
    },
    {
        question: "Transformačná matica v prípade homogénnej transformácie má rozmery:",
        options: [
            "4 x 4",
            "4 x 3",
            "3 x 3"
        ],
        answer: 0,
        explanation: "Homogénna transformačná matica je 4x4."
    },
    {
        question: "Čo je to kinematický model robota?",
        options: [
            "Závislosť vektora zrýchlenia kĺbových premenných od všetkých síl, ktoré pôsobia v kinematickom reťazci robota.",
            "Závislosť hnacích síl od vektora kĺbových premenných, vektora zrýchení a vektora rýchlostí kĺbových premenných.",
            "Závislosť svetových súradníc polohového vektora koncového bodu ramena robota od kĺbových premenných.",
            "Závislosť kĺbových premenných od svetových súradníc koncového bodu ramena robota."
        ],
        answer: 2,
        explanation: "Kinematický model popisuje vzťah medzi kĺbovými premennými a polohou koncového efektora."
    },
    {
        question: "Kde sa nachádza prvok matice homogénnej transformácie zodpovedný za perspektívu v smere osi x?",
        options: [
            "Vo štvrtom stĺpci a prvom riadku.",
            "V prvom stĺpci a štvrtom riadku.",
            "V prvom stĺpci a prvom riadku.",
            "Vo štvrtom stĺpci a štvrtom riadku."
        ],
        answer: 1,
        explanation: "Prvok pre perspektívu v smere x je v 4. stĺpci a 1. riadku."
    },
    {
        question: "Kam by ste pri výpočte celkovej transformačnej matice umiestnili maticu homogénnej transformácie vyjadrujúcu perspektívu zobrazenia objektu?",
        options: [
            "V súčine transformačných matíc hneď vľavo od transformačnej matice definujúcej pohyb v lokálnom súradnicovom systéme.",
            "V súčine transformačných matíc hneď vpravo od transformačnej matice definujúcej pohyb vo svetovom súradnicovom systéme.",
            "V súčine transformačných matíc hneď vpravo od transformačnej matice definujúcej pohyb v lokálnom súradnicovom systéme.",
            "V súčine transformačných matíc hneď vľavo od transformačnej matice definujúcej pohyb vo svetovom súradnicovom systéme."
        ],
        answer: 3, // Index 3 corresponds to option D (since JavaScript arrays are 0-indexed)
        explanation: "Maticu homogénnej transformácie vyjadrujúcu perspektívu zobrazenia objektu treba umiestniť v súčine transformačných matíc hneď vľavo od transformačnej matice definujúcej pohyb vo svetovom súradnicovom systéme."
    },
    {
        question: "Lagrangeova funkcia pre výpočet dynamického modelu jedného stupňa voľnosti viacčlánkového robota je daná",
        options: [
            "rozdielom kinetickej energie daného stupňa voľnosti robota a celkovej potenciálnej energie robota.",
            "rozdielom celkovej kinetickej energie a celkovej potenciálnej energia robota.",
            "rozdielom kinetickej a potencionálnej energie daného stupňa voľnosti robota.",
            "rozdielom celkovej kinetickej energie robota a potencionálnej energie daného stupňa voľnosti robota."
        ],
        answer: 1,
        explanation: "Lagrangeova funkcia je rozdiel celkovej kinetickej a potenciálnej energie systému."
    },
    {
        question: "Čo predstavujú prvky submatice rotácie v matici homogénnej transformácie?",
        options: [
            "Veľkosti rotácie osí transformovaného súradnicového systému oproti osiam svetového súradnicového systému.",
            "Kosínusy uhlov, ktoré zvierajú jednotkové vektory osí transformovaného súradnicového systému s osami svetového súradnicového",
            "Veľkosti priemetov jednotkových vektorov osí transformovaného súradnicového systému do osí svetového súradnicového systému",
            "Veľkosi uhlov, ktoré zvierajú jednotkové vektory osí transformovaného súradnicového systému s osami svetového súradnicového."
        ],
        answer: 2,
        explanation: "Veľkosti priemetov jednotkových vektorov osí transformovaného súradnicového systému do osí svetového súradnicového systému sú dané prvkami submatice rotácie."
    },
    {
        question: "Ktoré sily nie sú súčasťou poruchových signálov v zjednodušenom dynamickom modeli jedného stupňa voľnosti robota?",
        options: [
            "Odstredivé sily.",
            "Sily spôsobené viskóznym trením.",
            "Coriolisove sily.",
            "Gravitačné sily."
        ],
        answer: 1,
        explanation: "Sily spôsobené viskóznym trením nie sú zahrnuté v poruchových signáloch."
    },
    {
        question: "Coriolisove sily sú spravidla funkciou",
        options: [
            "prvkov vektora klbových premenných a prvkov polohového vektora koncového bodu robota.",
            "prvkov vektora zrýchlenia klbových premenných",
            "prvkov vektorarýchlostí klbových premenných a prvkov vektora zrýchlenia klbových premenných.",
            "prvkov vektora rýchlostí klbových premenných a prvkov vektora klbových premenných."
        ],
        answer: 3,
        explanation: "Coriolisove sily závisia od rýchlostí a polôh kĺbových premenných."
    },
    {
        question: "Koľkého rádu je maticová diferenciálna rovnica dynamického modelu robota so šiestimi stupňami voľnosti?",
        options: [
            "2",
            "6",
            "4",
            "1"
        ],
        answer: 0,
        explanation: "Dynamický model robota je druhého rádu."
    },
    {
        question: "Čo je to dynamický model robota?",
        options: [
            "Závislosť vektora zrýchlenia kĺbových premenných od všetkých síl, ktoré pôsobia v kinematickom reťazci robota.",
            "Závislosť svetových súradníc polohového vektora koncového bodu ramena robota od kĺbových premenných",
            "Závislosť hnacích síl od vektora kĺbových premenných vektora zrýchlení a vektora rýchlostí kĺbových premenných.",
            "Závislosť kĺbových premenných od svetových súradníc koncového bodu ramena robota."
        ],
        answer: 0,
        explanation: "Dynamický model popisuje vzťah medzi hnacimi silami a pohybom robota."
    },
    {
        question: "Akú maximálnu hmotnosť bremena je možné udržať na konci 1 m dlhého ramena, ak má motor max. moment 5 Nm a je použitý prevod do pomala 1:200? Rameno je vo vodorovnej polohe a motor vyvoláva pohyb bremena zvislo nahor",
        options: [
            "100 kg",
            "1000 kg",
            "50 kg"
        ],
        answer: 0, // Correct answer is A (100 kg)
        explanation: "Výpočet: Moment s prevodom = 5 Nm × 200 = 1000 Nm. Pri dĺžke ramena 1 m: F = M/l = 1000 Nm/1 m = 1000 N. Prevod na kg: m = F/g ≈ 1000 N / 9.81 m/s² ≈ 100 kg."
    }
];
// Premenné pre stav kvízu
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let quizMode = null;
let questionsInMode = [];

// DOM elementy
const modeSelection = document.getElementById('mode-selection');
const quizArea = document.getElementById('quiz-area');
const resultsArea = document.getElementById('results');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const progressBar = document.getElementById('progress');
const infiniteModeBtn = document.getElementById('infinite-mode');
const twentyModeBtn = document.getElementById('twenty-mode');
const restartBtn = document.getElementById('restart-btn');

// Funkcia na náhodné premiešanie otázok
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Funkcia na spustenie kvízu
function startQuiz(mode) {
    quizMode = mode;
    
    if (mode === 'infinite') {
        questionsInMode = [...questions];
    } else {
        // Pre režim 20 otázok vyberieme náhodne 20 otázok
        questionsInMode = shuffleArray([...questions]).slice(0, 20);
    }
    
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    modeSelection.classList.add('hidden');
    quizArea.classList.remove('hidden');
    resultsArea.classList.add('hidden');
    showQuestion();
}

// Funkcia na zobrazenie aktuálnej otázky
function showQuestion() {
    const question = questionsInMode[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    // Vymažeme predchádzajúce možnosti a obrázok
    optionsElement.innerHTML = '';
    
    // Pridáme obrázok, ak existuje
    if (question.image) {
        const imgElement = document.createElement('img');
        imgElement.src = question.image;
        imgElement.style.maxWidth = '100%';
        imgElement.style.height = 'auto';
        imgElement.style.margin = '10px 0';
        questionElement.appendChild(imgElement);
    }
    // Vytvoríme pole indexov možností a premiešame ich
    const shuffledOptions = question.options.map((option, index) => ({ option, index }));
    shuffleArray(shuffledOptions);
    
    // Vytvoríme nové možnosti v náhodnom poradí
    shuffledOptions.forEach((item) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = item.option;
        optionElement.dataset.index = item.index; // Ukladáme pôvodný index pre správne vyhodnotenie
        optionElement.addEventListener('click', selectOption);
        optionsElement.appendChild(optionElement);
    });
    
    // Skryjeme feedback a resetujeme vybranú možnosť
    feedbackElement.style.display = 'none';
    selectedOption = null;
    
    // Aktualizujeme progress bar
    if (quizMode === 'twenty') {
        const progress = ((currentQuestionIndex) / questionsInMode.length) * 100;
        progressBar.style.width = `${progress}%`;
    } else {
        progressBar.style.width = '0%';
    }
}

// Funkcia pre výber možnosti
function selectOption(e) {
    if (selectedOption !== null) return;
    
    selectedOption = parseInt(e.target.dataset.index); // Použijeme pôvodný index
    const question = questionsInMode[currentQuestionIndex];
    
    // Označíme vybranú možnosť
    e.target.classList.add('selected');
    
    // Skontrolujeme odpoveď
    if (selectedOption === question.answer) {
        e.target.classList.add('correct');
        score++;
        updateScore();
        feedbackElement.textContent = "Správne! " + question.explanation;
        feedbackElement.className = "feedback correct-feedback";
    } else {
        e.target.classList.add('incorrect');
        // Označíme správnu odpoveď (musíme nájsť element so správnym pôvodným indexom)
        const options = optionsElement.children;
        for (let i = 0; i < options.length; i++) {
            if (parseInt(options[i].dataset.index) === question.answer) {
                options[i].classList.add('correct');
                break;
            }
        }
        feedbackElement.textContent = "Nesprávne. " + question.explanation;
        feedbackElement.className = "feedback incorrect-feedback";
    }
    
    feedbackElement.style.display = 'block';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Funkcia na aktualizáciu skóre
function updateScore() {
    if (quizMode === 'twenty') {
        scoreElement.textContent = `Skóre: ${score}/${currentQuestionIndex + 1}`;
    } else {
        scoreElement.textContent = `Skóre: ${score}`;
    }
}

// Funkcia pre zobrazenie výsledkov
function showResults() {
    quizArea.classList.add('hidden');
    resultsArea.classList.remove('hidden');
    finalScoreElement.textContent = `Vaše konečné skóre: ${score}/${questionsInMode.length}`;
}

// Event listener pre tlačidlo ďalšej otázky
nextButton.addEventListener('click', () => {
    if (selectedOption === null) return;
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questionsInMode.length) {
        showQuestion();
    } else {
        if (quizMode === 'infinite') {
            // V nekonečnom režime len náhodne premiešame otázky a začneme znova
            questionsInMode = shuffleArray([...questions]);
            currentQuestionIndex = 0;
            showQuestion();
        } else {
            showResults();
        }
    }
});

// Event listenery pre výber režimu
infiniteModeBtn.addEventListener('click', () => startQuiz('infinite'));
twentyModeBtn.addEventListener('click', () => startQuiz('twenty'));

// Event listener pre tlačidlo reštartu
restartBtn.addEventListener('click', () => {
    resultsArea.classList.add('hidden');
    modeSelection.classList.remove('hidden');
});
