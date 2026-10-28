import { Podwalk } from '@/types/podwalk';

export const mockPodwalks: Podwalk[] = [
    {
        id: 1,
        application_id: 1,
        name: 'Het Leidens Ontzet',
        description:
            'Ontdek het verborgen verhaal achter het beleg van Leiden, een strijd die zich eeuwen geleden afspeelde in de schaduw van de historische stadsmuren. Beleef deze spannende geschiedenis zoals nooit tevoren met een unieke interactieve podwalk. Jij bepaalt met jouw keuzes het lot van Leiden: slaag jij erin om samen met de Watergeuzen de stad te bevrijden, of vallen de muren ten prooi aan de Spaanse bezetters? Deze avontuurlijke route neemt je mee langs geheime locaties, verborgen plekken en indrukwekkende monumenten. Iedere beslissing die je onderweg neemt, beïnvloedt het verloop van de geschiedenis. Wees scherp, vertrouw op je instinct en ontdek op een geheel nieuwe, meeslepende manier wat er écht gebeurde tijdens de spannende dagen van het beleg. Ervaar zelf hoe jouw keuzes bepalen of Leiden overwint of ten onder gaat.',
        place: 'Leiden',
        lat: 52.1601,
        lng: 4.497,
        order: 1,
        published: 1,
        created_at: '2024-01-01T12:00:00Z',
        updated_at: '2024-01-01T12:00:00Z',
        bounds: {
            lat_min: 52.15,
            lng_min: 4.48,
            lat_max: 52.17,
            lng_max: 4.51,
            lat_center: 52.16,
            lng_center: 4.497,
            length: { km: 3.5, minutes: 45 },
        },
        cover_image: {
            file: { id: 101, url: require('@/assets/podwalk-thumbnail.png'), size: 12345, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'De Pieterskerk in Leiden',
        },
        details: [
            {
                id: 1,
                route_id: 1,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Startpunt bij de Burcht van Leiden.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            },
        ]
    },
    {
        id: 4,
        application_id: 1,
        name: 'De Jordaan – Bij Ons in Amsterdam',
        description:
            'De Jordaan. Wie kent ‘m niet? Het is één van de beroemdste buurten van Amsterdam. Het meest bezongen in elk geval door volkszangers als Johnny Jordaan en Tante Leen. In deze wandeling die start op de Brouwersgracht lopen we dwars door de beroemde wijk. Een volkswijk die in de 17e eeuw ontstaat, tegelijkertijd met de Amsterdamse grachtengordel. Het heet dan nog het ‘Nieuwe Werck’ en is een plek waar veel migranten en kleine ondernemers neerstrijken.\n' +
            '\n' +
            'Lopend over de Willemstraat, de vroegere Goudsbloemgracht, horen we hoe de wijk in de 19e eeuw zal uitgroeien tot één van de armste delen van de stad. Duizenden Amsterdammers wonen er op elkaar gepakt in sloppen en gangen. Het leven is er rauw maar er is ook saamhorigheid. En die klinkt door in het Jordaanlied, dat we horen wandelend over de Elandsgracht en langs de Westertoren, die altijd dichtbij is.',
        place: 'Amsterdam',
        lat: 52.3818,
        lng: 4.8680,
        order: 4,
        published: 1,
        created_at: '2024-05-01T12:00:00Z',
        updated_at: '2024-05-01T12:00:00Z',
        bounds: {
            lat_min: 52.375,
            lng_min: 4.860,
            lat_max: 52.389,
            lng_max: 4.875,
            lat_center: 52.3818,
            lng_center: 4.8680,
            length: { km: 5.2, minutes: 70 },
        },
        cover_image: {
            file: {
                id: 301,
                url: 'https://hetverhaalvannederland.ntr.nl/files/2025/01/Adam-10-landscape_1-768x386.jpg',
                size: 25000,
                mime_type: 'image/jpeg',
            },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'De Jordaan – Bij Ons in Amsterdam'
        },
        details: [
            {
                id: 1004,
                route_id: 4,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start op Brouwersgracht 302.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 5,
        application_id: 1,
        name: 'Noord – In Volle Vaart Vooruit',
        description:
            'De Nederlandsche Dok- en Scheepsbouw Maatschappij. Aan de andere kant van ’t IJ. Na de Tweede Wereldoorlog is er in Amsterdam-Noord zoveel werk dat er arbeiders uit het buitenland worden gehaald. Gastarbeiders worden ze genoemd. Veel van deze arbeiders komen uit Turkije. Voor hen wordt een speciale enclave gebouwd: Woonoord Atatürk. Een rij witte barakken aan de Klaprozenweg.\n' +
            '\n' +
            'In deze wandeling, die dwars over het oude NDSM-terrein loopt, vertel ik je over de ontwikkeling van de Amsterdamse IJ-oevers. Over het succes en de teloorgang van een industrie. En horen we hoe mammoettankers te water worden gelaten en hoe Amsterdam zich verder ontwikkelt als migrantenstad.',
        place: 'Amsterdam',
        lat: 52.3979,
        lng: 4.9071,
        order: 5,
        published: 1,
        created_at: '2024-05-05T12:00:00Z',
        updated_at: '2024-05-05T12:00:00Z',
        bounds: {
            lat_min: 52.395,
            lng_min: 4.905,
            lat_max: 52.401,
            lng_max: 4.910,
            lat_center: 52.3979,
            lng_center: 4.9071,
            length: { km: 4.3, minutes: 57 },
        },
        cover_image: {
            file: {
                id: 302,
                url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-09-landscape1_1-768x386.jpg',
                size: 25000,
                mime_type: 'image/jpeg',
            },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'NDSM-terrein, Amsterdam‑Noord'
        },
        details: [
            {
                id: 1005,
                route_id: 5,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start op de Hellingbaan (NDSM-terrein).' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 6,
        application_id: 1,
        name: 'Rivierenbuurt – Een Onstuimig Ontstaan',
        description:
            'Amstelledamme. Stad aan de Amstel. Ingedamd door mensenhanden. Het ontstaat dankzij de Allerheiligenvloed, een zware storm in de kop van Noord-Holland, die de weg vrij zal maken voor de rivier naar ’t IJ en de Zuiderzee. Er ontstaat een kleine nederzetting die binnen enkele eeuwen zal uitgroeien tot een bruisend handelscentrum.\n' +
            '\n' +
            'In deze wandeling die begint op de Berlagebrug en ons lopend via de Amstel naar de Middeleeuwse oorsprong van onze hoofdstad brengt, horen we hoe het allemaal begon. We lopen over bruggen, langs stadspoorten, over de Dam en horen hoe de Oude Kerk voor onze neus verrijst. Op palen. Het is het verhaal van een stad die vanaf het begin van de 12e eeuw vecht tegen het water maar er ook zijn welvaart aan dankt.',
        place: 'Amsterdam',
        lat: 52.3478,
        lng: 4.8945,
        order: 6,
        published: 1,
        created_at: '2024-05-07T12:00:00Z',
        updated_at: '2024-05-07T12:00:00Z',
        bounds: {
            lat_min: 52.345,
            lng_min: 4.890,
            lat_max: 52.350,
            lng_max: 4.898,
            lat_center: 52.3478,
            lng_center: 4.8945,
            length: { km: 5.2, minutes: 75 },
        },
        cover_image: {
            file: {
                id: 303,
                url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-01-landscape_1-768x386.jpg',
                size: 25000,
                mime_type: 'image/jpeg',
            },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Amsteldijk, Rivierenbuurt'
        },
        details: [
            {
                id: 1006,
                route_id: 6,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start op Amsteldijk 132A.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 7,
        application_id: 1,
        name: 'De Pijp – Weldoenders en Weelde',
        description:
            'Het Vondelpark, het Concertgebouw en het Rijksmuseum verrijzen allemaal in de 19e eeuw. Het is een tijd die zich kenmerkt door grote armoede maar ook door weldoeners die de stad uit het slop proberen te halen. Mensen zoals Piet van Eeghen en Samuel Sarphati.\n' +
            '\n' +
            'Amsterdam is er na de Franse bezetting slecht aan toe. Er heerst armoede, buurten raken in verval en de werkeloosheid is groot. De stad zit in diepe schulden en kinderen worden op straat te vondeling gelegd.\n' +
            '\n' +
            'Deze wandeling die in de Gouden Bocht op de Herengracht begint, neemt ons mee naar een nieuw begin. Via de grachtengordel, langs het voormalig Aalmoezeniershuis, het Prinsengrachtziekenhuis naar arbeiderswijk de Pijp. Maar ook door stadsparken zoals het Sarpathipark naar de plek waar ooit het Paleis voor Volksvlijt stond. De kroon op het werk van Sarpathi.\n' +
            '\n' +
            'Een wandeling door onze hoofdstad in herstel: van verkrotting naar allure.',
        place: 'Amsterdam',
        lat: 52.3526,
        lng: 4.8924,
        order: 7,
        published: 1,
        created_at: '2024-05-08T12:00:00Z',
        updated_at: '2024-05-08T12:00:00Z',
        bounds: {
            lat_min: 52.349,
            lng_min: 4.888,
            lat_max: 52.356,
            lng_max: 4.897,
            lat_center: 52.3526,
            lng_center: 4.8924,
            length: { km: 5.0, minutes: 70 },
        },
        cover_image: {
            file: {
                id: 304,
                url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-03-landscape_1-768x386.jpg',
                size: 0,
                mime_type: 'image/jpeg',
            },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'De Pijp – Weldoenders en Weelde'
        },
        details: [
            {
                id: 1007,
                route_id: 7,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start rond de Albert Cuypmarkt.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 8,
        application_id: 1,
        name: 'Westerpark – Industrie en Revolutie',
        description:
            'De IJzeren eeuw. In de 19e eeuw is Amsterdam een arbeidersstad. De industriële revolutie komt op gang en er is volop werk in havens en fabrieken aan de rand van de stad. Lopend door de Staatslieden- en Spaarndammerbuurt horen we hoe de stad groeit dankzij deze arbeiders. En zien we hoe de woningwet van 1901 een einde maakt aan de verkrotting en ruimte geeft aan ‘arbeiderspaleizen’ zoals Het Schip van Michel de Klerk.\n' +
            '\n' +
            'In deze wandeling die begint op het Haarlemmerplein lopen we via de Westergasfabriek, dwars door het Westerpark richting de oude Houthavens. We horen hoe Amsterdam zich ontwikkelt tot de moderne stad zoals we ‘m nu kennen. Hoe de eerste trein op stoom komt en het socialisme zijn intrede maakt, dankzij mensen als Domela Nieuwenhuis.',
        place: 'Amsterdam',
        lat: 52.3910,
        lng: 4.8685,
        order: 8,
        published: 1,
        created_at: '2024-05-10T12:00:00Z',
        updated_at: '2024-05-10T12:00:00Z',
        bounds: {
            lat_min: 52.388,
            lng_min: 4.862,
            lat_max: 52.394,
            lng_max: 4.875,
            lat_center: 52.3910,
            lng_center: 4.8685,
            length: { km: 4.8, minutes: 65 },
        },
        cover_image: {
            file: {
                id: 305,
                url: 'https://hetverhaalvannederland.ntr.nl/files/2025/01/Adam-08-landscape_1-768x386.jpg',
                size: 0,
                mime_type: 'image/jpeg',
            },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Westerpark – Industrie en Revolutie'
        },
        details: [
            {
                id: 1008,
                route_id: 8,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij het voormalige Westergasterrein.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 9,
        application_id: 1,
        name: 'Anloo – Spoor van jagers',
        description:
            'Deze route voert ons vanaf de rand van het dorpje Anloo door het prachtige Drentse landschap. Onderweg kun je je verbazen over en genieten van prehistorische grafheuvels, hunebedden en een adembenemende natuur.\n' +
            '\n' +
            'In de prehistorie trekken groepen jagers door ons land, op zoek naar voedsel. Aan deze manier van leven komt een einde als nieuwe bewoners het land binnen trekken. De eerste boeren blijven voortaan op een plek wonen en bewerken het land. Daarmee wordt de basis gelegd voor onze huidige samenleving. In deze wandeling vertellen we het verhaal van jagers en boeren. En gaan we op zoek naar sporen van de prehistorie op de Drentse heide.',
        place: 'Anloo',
        lat: 52.9930,
        lng: 6.6150,
        order: 9,
        published: 1,
        created_at: '2024-05-15T12:00:00Z',
        updated_at: '2024-05-15T12:00:00Z',
        bounds: {
            lat_min: 52.99,
            lng_min: 6.61,
            lat_max: 52.996,
            lng_max: 6.62,
            lat_center: 52.9930,
            lng_center: 6.6150,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 400, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R1_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Anloo – Spoor van jagers',
        },
        details: [
            {
                id: 2009,
                route_id: 9,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij Bosweg, in de buurt van hunebedden.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any,
            },
        ],
    },
    {
        id: 10,
        application_id: 1,
        name: 'Nijmegen – De Romeinse stad',
        description:
            'Vanaf de overkant van de Waal lopen we naar de binnenstad van Nijmegen. In deze wandeling combineren we het heerlijke buitengevoel aan de oevers van de rivier met de rust van het stadspark en de gezellige drukte van de binnenstad.\n' +
            '\n' +
            'In de eerste eeuw voor Christus veroveren de Romeinen grote delen van Nederland. Ze bouwen er forten en legerplaatsen langs de Rijn, de zogenaamde limes. En ook de eerste Romeinse stad van ons land: Nijmegen. In deze wandeling vertellen we het verhaal van de Romeinen in Nederland. En gaan we op zoek naar de sporen die de Romeinse cultuur in Nijmegen heeft achtergelaten.',
        place: 'Nijmegen',
        lat: 51.8570,
        lng: 5.8630,
        order: 10,
        published: 1,
        created_at: '2024-05-16T12:00:00Z',
        updated_at: '2024-05-16T12:00:00Z',
        bounds: {
            lat_min: 51.85,
            lng_min: 5.85,
            lat_max: 51.865,
            lng_max: 5.875,
            lat_center: 51.8570,
            lng_center: 5.8630,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 401, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R2-_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Nijmegen – De Romeinse stad',
        },
        details: [
            {
                id: 2010,
                route_id: 10,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij Lentse Warande (Lent).' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any,
            },
        ],
    },
    {
        id: 11,
        application_id: 1,
        name: 'Dokkum – Strijd van de Friezen',
        description:
            'Een waterrijke wandeling door het pittoreske stadje Dokkum.\n' +
            '\n' +
            'In de vroege middeleeuwen leven de Friezen langs de kust van ons land. Het is een echt watervolk met een eigen geloof en tradities. Met de komst van de christenen in de 8e eeuw worden de Friezen voor de keuze gesteld: vasthouden aan het geloof van je voorouders of kiezen voor het nieuwe geloof? In deze wandeling vertellen we het legendarische verhaal over Bonifatius en de kerstening van de Friezen. En gaan we op zoek naar sporen van de Friese geschiedenis in Dokkum.',
        place: 'Dokkum',
        lat: 53.3270,
        lng: 6.1140,
        order: 11,
        published: 1,
        created_at: '2024-05-17T12:00:00Z',
        updated_at: '2024-05-17T12:00:00Z',
        bounds: {
            lat_min: 53.325,
            lng_min: 6.112,
            lat_max: 53.329,
            lng_max: 6.116,
            lat_center: 53.3270,
            lng_center: 6.1140,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 402, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R3_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Dokkum – Strijd van de Friezen',
        },
        details: [
            {
                id: 2011,
                route_id: 11,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start op Schapendijkje, Dokkum.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any,
            },
        ],
    },
    {
        id: 12,
        application_id: 1,
        name: 'Veenhuizen – Een beter mens',
        description:
            'Tijdens deze wandeling loop je rondom de unieke Kolonie van Weldadigheid en waan je je in een andere tijd. De route leidt ons ook door bossen en over het vlakke Drentse land.\n' +
            '\n' +
            'In de 19e eeuw beleeft ons land de Industriële Revolutie; een tijd van nieuwe uitvindingen en technische vooruitgang. Maar voor veel mensen is het een tijd van grote armoede en ellende. Idealistische burgers willen de samenleving verbeteren en dat begint bij een beter mens. In deze wandeling vertellen we het verhaal van rijkdom en armoede in de 19e eeuw. En gaan we op zoek naar sporen van deze geschiedenis rond de Koloniën van Weldadigheid in het Drentse Veenhuizen.',
        place: 'Veenhuizen',
        lat: 52.8600,
        lng: 6.3990,
        order: 12,
        published: 1,
        created_at: '2024-05-18T12:00:00Z',
        updated_at: '2024-05-18T12:00:00Z',
        bounds: {
            lat_min: 52.856,
            lng_min: 6.395,
            lat_max: 52.864,
            lng_max: 6.403,
            lat_center: 52.8600,
            lng_center: 6.3990,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 403, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R9_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Veenhuizen – Een beter mens',
        },
        details: [
            {
                id: 2012,
                route_id: 12,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start aan de Koloniën van Weldadigheid, Veenhuizen.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any,
            },
        ],
    },
    {
        id: 13,
        application_id: 1,
        name: 'Vught – Land zonder vrijheid',
        description:
            'Op de Vughtse Heide is het stil en rustig. We struinen over zandpaden, kronkelige boswegen en lopen het steeds dichter begroeide bos in. Wanneer we de dijk aflopen doemt er tussen de bomen langzaam een wachttoren op. We zijn bij Nationaal Monument Kamp Vught.\n' +
            '\n' +
            'In de 20e eeuw beleeft Nederland een van de grootste rampen uit de geschiedenis: de Tweede Wereldoorlog. Ons land wordt bezet door Nazi Duitsland en in korte tijd raken de mensen hun vrijheden kwijt. Het hardst getroffen zijn de Joden, die stelselmatig uit de samenleving worden gezet en een gruwelijk lot wacht in de concentratiekampen. \n' +
            '\n' +
            'In deze wandeling vertellen we het verhaal van bezetting en vervolging tijdens de Tweede Wereldoorlog en gaan we op zoek naar de sporen hiervan rond Kamp Vught. ',
        place: 'Vught',
        lat: 51.6360,
        lng: 5.3070,
        order: 13,
        published: 1,
        created_at: '2024-05-19T12:00:00Z',
        updated_at: '2024-05-19T12:00:00Z',
        bounds: {
            lat_min: 51.634,
            lng_min: 5.305,
            lat_max: 51.638,
            lng_max: 5.309,
            lat_center: 51.6360,
            lng_center: 5.3070,
            length: { km: 5.0, minutes: 90 },
        },
        cover_image: {
            file: { id: 404, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R10_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Vught – Land zonder vrijheid',
        },
        details: [
            {
                id: 2013,
                route_id: 13,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start op Loonsebaan 157 bij Kamp Vught.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any,
            },
        ],
    },
    {
        id: 14,
        application_id: 1,
        name: 'Bijlmer – De Nieuwe Stad',
        description:
            'De Bijlmer. De Bims. Eind jaren ‘60 wordt er ten Zuidoosten van Amsterdam een nieuwe woonwijk uit de grond gestampt: een modelwijk met veel hoogbouw en veel groen. Een broedplaats voor muziek, mode en kunst. Een wijk met een eigen straattaal maar ook een wijk die in de jaren ’80 van de vorige eeuw vaak als ‘getto’ in het nieuws komt.\n' +
            '\n' +
            'In deze wandeling ervaren we de Bims als wijk van veel gezichten. Het is een plek waar culturen samenkomen. Wandelend via de eerste honingraatflats en de kraakpanden van Just Maatrijk tot aan de ‘Boom die alles zag’, de plek van de Bijlmerramp.',
        place: 'Amsterdam',
        lat: 52.3086,
        lng: 4.9510,
        order: 14,
        published: 1,
        created_at: '2024-06-01T12:00:00Z',
        updated_at: '2024-06-01T12:00:00Z',
        bounds: {
            lat_min: 52.305,
            lng_min: 4.948,
            lat_max: 52.312,
            lng_max: 4.954,
            lat_center: 52.3086,
            lng_center: 4.9510,
            length: { km: 5.9, minutes: 79 },
        },
        cover_image: {
            file: { id: 500, url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-07-landscape_1-768x386.jpg', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Bijlmer – De Nieuwe Stad'
        },
        details: [
            {
                id: 2014,
                route_id: 14,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij Hoorneboeg, 1102 BK.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 15,
        application_id: 1,
        name: 'Nieuw-West – Tuinstad Amsterdam',
        description:
            'Nieuw-West. Met meer dan 170.000 inwoners is het ‘t grootste stadsdeel van Amsterdam. Ontstaan in een tijd dat de bevolking zo hard groeit, dat de stad moet worden uitgebreid. Het zijn de jaren ’50 als de Westelijke Tuinsteden verrijzen. Architect en stedenbouwkundige van Eesteren creëert er een plek met veel aandacht voor licht, lucht en ruimte.\n' +
            '\n' +
            'In deze wandeling die begint in het hart van het Stadsdeel, bij de Sloterplas, neem ik je mee door de wijk die het eerste klaar is en het best bewaard is gebleven: Slotermeer. We horen hoe de eerste bewoners er hun intrede doen en hoe het stadsdeel in het slop raakt maar er ook weer bovenop komt. De tuinstad, waar je groot wordt en waar culturen samenkomen.',
        place: 'Amsterdam',
        lat: 52.3692,
        lng: 4.8100,
        order: 15,
        published: 1,
        created_at: '2024-06-02T12:00:00Z',
        updated_at: '2024-06-02T12:00:00Z',
        bounds: {
            lat_min: 52.364,
            lng_min: 4.805,
            lat_max: 52.374,
            lng_max: 4.815,
            lat_center: 52.3692,
            lng_center: 4.8100,
            length: { km: 4.5, minutes: 60 },
        },
        cover_image: {
            file: { id: 501, url: 'https://hetverhaalvannederland.ntr.nl/files/2025/01/Adam-11-landscape-768x386.jpg', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Nieuw-West – Tuinstad Amsterdam'
        },
        details: [
            {
                id: 2015,
                route_id: 15,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start Oostoever 1, Sloterplasgebied.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 16,
        application_id: 1,
        name: 'Oosterdok – Wereldstad in Wording',
        description:
            'Amsterdam dankt zijn rijkdom en groei vooral aan de 17e eeuw. Het is de tijd dat de grachtengordel ontstaat, het aantal inwoners explosief groeit en de stad steeds verder uitbreidt. Kunst, welvaart en tolerantie zullen de stad gaan kenmerken, mede dankzij de komst van duizenden migranten uit heel Europa. Veel van hen zijn op de vlucht voor de Spanjaarden. De Tachtigjarige oorlog is in volle gang.\n' +
            '\n' +
            'In deze wandeling lopen we door de oude havenbuurt: de Lastage buurt en horen we hoe de eerste zeelieden de grote oversteek maken naar het Verre Oosten. De VOC en WIC worden opgericht. Wandelend via oude pakhuizen en het entrepotdok komen we aan bij het Scheepvaartmuseum: ’s Lands Magazijn van de Admiraliteit. We horen hoe de handel, de scheepvaart en de oorlogsindustrie de stad groot hebben gemaakt. Vaak ten koste van anderen.',
        place: 'Amsterdam',
        lat: 52.3740,
        lng: 4.9120,
        order: 16,
        published: 1,
        created_at: '2024-06-03T12:00:00Z',
        updated_at: '2024-06-03T12:00:00Z',
        bounds: {
            lat_min: 52.372,
            lng_min: 4.910,
            lat_max: 52.376,
            lng_max: 4.914,
            lat_center: 52.3740,
            lng_center: 4.9120,
            length: { km: 4.0, minutes: 60 },
        },
        cover_image: {
            file: { id: 502, url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-02-landscape1_1-768x386.jpg', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Oosterdok – Wereldstad in Wording'
        },
        details: [
            {
                id: 2016,
                route_id: 16,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start nabij Oosterdok, centraal Amsterdam.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 17,
        application_id: 1,
        name: 'Centrum Oost – Joods Amsterdam',
        description:
            'Mokum. Mazzel. Gebbetje. Habbekrats. Al vanaf de 16e eeuw hoort de Joodse gemeenschap bij Amsterdam. Het zal door de eeuwen heen van grote invloed zijn op de Amsterdamse cultuur. Op straat, in taal, in de wetenschap en in verhalen.\n' +
            '\n' +
            'In deze wandeling gaan we op zoek naar de sporen van de Joodse geschiedenis in onze hoofdstad. Via de Portugese Synagoge tot aan de voormalige diamantbeurs en de Hollandse Schouwburg. De plek waar in de Tweede Wereldoorlog Joodse Amsterdammers worden vastgezet om op transport te gaan naar vernietigings- en concentratiekampen.\n' +
            '\n' +
            'We lopen door de oude Jodenbuurt, het vroegere Vlooienburg, Rapenburg en Uilenburg. Het is er een wereld op zich tot de Duitse bezetter er in de Tweede Wereldoorlog abrupt een einde aan maakt.',
        place: 'Amsterdam',
        lat: 52.3660,
        lng: 4.9000,
        order: 17,
        published: 1,
        created_at: '2024-06-04T12:00:00Z',
        updated_at: '2024-06-04T12:00:00Z',
        bounds: {
            lat_min: 52.363,
            lng_min: 4.897,
            lat_max: 52.369,
            lng_max: 4.903,
            lat_center: 52.3660,
            lng_center: 4.9000,
            length: { km: 4.5, minutes: 60 },
        },
        cover_image: {
            file: { id: 503, url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-05-landscape_1-768x386.jpg', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Centrum Oost – Joods Amsterdam'
        },
        details: [
            {
                id: 2017,
                route_id: 17,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start in de Jodenbuurt (Vlooienburg).' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 18,
        application_id: 1,
        name: 'Oost – Koloniaal Amsterdam',
        description:
            'Amsterdam Oost. In dit deel van de stad verwijzen veel straten naar onze koloniale geschiedenis. Van Zuid-Afrikaanse generaals uit de Boerenoorlog, eilanden in het voormalig Nederlands-Indië tot Surinaamse vrijheidsstrijders.\n' +
            '\n' +
            'Wandelend langs het Wereldmuseum en door het Oosterpark, via de Transvaalkade naar de Dappermarkt, hoor je hoe de stad Amsterdam een belangrijke rol heeft gespeeld in deze geschiedenis. Als handelsstad en als grote speler in de handel van tot slaafgemaakte mensen.\n' +
            '\n' +
            'Het is een geschiedenis die nog steeds doorleeft in de levens van veel Amsterdammers.',
        place: 'Amsterdam',
        lat: 52.3730,
        lng: 4.9050,
        order: 18,
        published: 1,
        created_at: '2024-06-05T12:00:00Z',
        updated_at: '2024-06-05T12:00:00Z',
        bounds: {
            lat_min: 52.371,
            lng_min: 4.903,
            lat_max: 52.375,
            lng_max: 4.907,
            lat_center: 52.3730,
            lng_center: 4.9050,
            length: { km: 4.0, minutes: 60 },
        },
        cover_image: {
            file: { id: 504, url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-06-landscape_1-768x386.jpg', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Oost – Koloniaal Amsterdam'
        },
        details: [
            {
                id: 2018,
                route_id: 18,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start nabij Oosterdok of Entrepotdok.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 19,
        application_id: 1,
        name: 'Oud-West – Tegendraads Amsterdam',
        description:
            'Vrijstaat Amsterdam. Tolerant Amsterdam. In de jaren ‘60 van de vorige eeuw waait er een nieuwe wind door onze hoofdstad. Het is een tijd van wederopbouw, van welvaart maar ook van grote onrust. Want niet iedereen heeft hetzelfde idee over vooruitgang en een groepje jongeren begint zich te roeren in de stad. Het zijn de provo’s en later ook hippies, krakers en punkers die van zich laten horen.\n' +
            '\n' +
            'Deze route die begint in de Raadhuisstraat, midden in de binnenstad neemt ons mee via oude kraakpanden naar ’t Spui. De plek waar ’t Lieverdje staat en waar provo’s hun ‘happenings’ hielden. Lopend langs poppodium Paradiso en door het Vondelpark horen we hoe hippies naar Amsterdam komen, hoe de punkbeweging zijn intrede maakt en hoe krakers de stad innemen.\n' +
            '\n' +
            'Het is een nieuwe generatie die de strijd aangaat met het gezag en Amsterdam voor altijd als culturele hoofdstad op de kaart zet.',
        place: 'Amsterdam',
        lat: 52.3646,
        lng: 4.8810,
        order: 19,
        published: 1,
        created_at: '2024-06-06T12:00:00Z',
        updated_at: '2024-06-06T12:00:00Z',
        bounds: {
            lat_min: 52.360,
            lng_min: 4.875,
            lat_max: 52.370,
            lng_max: 4.887,
            lat_center: 52.3646,
            lng_center: 4.8810,
            length: { km: 5.9, minutes: 85 },
        },
        cover_image: {
            file: { id: 505, url: 'https://hetverhaalvannederland.ntr.nl/files/2024/12/Adam-04-landscape_1-768x386.jpg', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Oud-West – Tegendraads Amsterdam'
        },
        details: [
            {
                id: 2019,
                route_id: 19,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start Raadhuisstraat 53.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 20,
        application_id: 1,
        name: 'Breda – Voet aan de grond',
        description:
            'In het Zuiden van ons land, in de historische stad Breda, vindt ons Koningshuis haar oorsprong. Hier krijgen de eerste Oranje-Nassaus voet aan de grond. Het is Johanna van Polanen, vrouwe van Breda, die trouwt met de Duitse Engelbrecht van Nassau. Onze vader des vaderlands, Willem van Oranje, zal zich hier later vestigen op het Kasteel van Breda. Als 11-jarige jongen erft hij de Oranje prinsentitel.\n' +
            '\n' +
            'In deze wandeling door de oude binnenstad lopen we door stadspark Valkenberg, langs een monument dat de eerste Nassaus eert, naar het Renaissance paleis dat het Kasteel van Breda ooit was. Via verscholen hofjes en poortjes hoor je hoe Willem van Oranje in de 16e eeuw in opstand komt tegen de Spanjaarden, hoe hij de stad ontvlucht en hoe zijn zoon, opperbevelhebber Maurits, de stad herovert op de Spanjaarden. Een stadswandeling door 80 jaar oorlog, die begint en eindigt bij de rivier de Mark en je langs veel Oranjeplekken brengt.',
        place: 'Breda',
        lat: 51.5870,
        lng: 4.7750,
        order: 20,
        published: 1,
        created_at: '2024-06-07T12:00:00Z',
        updated_at: '2024-06-07T12:00:00Z',
        bounds: {
            lat_min: 51.585,
            lng_min: 4.773,
            lat_max: 51.589,
            lng_max: 4.777,
            lat_center: 51.5870,
            lng_center: 4.7750,
            length: { km: 4.3, minutes: 60 },
        },
        cover_image: {
            file: { id: 600, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_1_breda_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Breda – Voet aan de grond'
        },
        details: [
            {
                id: 2020,
                route_id: 20,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start Terheijdenstraat 21.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 21,
        application_id: 1,
        name: 'Buren – Een Oranje Erfenis',
        description:
            'Deze wandeling begint aan de rand van het pittoreske Buren. Een historisch stadje, midden in de Betuwe, waar het liefdesverhaal van Anna van Egmond en Willem van Oranje begint. In het Kasteel van Buren, dat er ooit stond, wordt hun eerste zoon en erfgenaam Filips Willem geboren. We lopen over deze gronden en door het plantsoen naar het oude stadscentrum. Met de Lambertuskerk als prachtig middelpunt. Hier zien we het jonge Oranjegezin verenigd.\n' +
            '\n' +
            'We nemen je mee terug naar de 16e eeuw. De 80-jarige oorlog breekt uit. Terwijl we over de dijk lopen hoor je de kanonskogels voorbij suizen. De stad staat in brand, Willem van Oranje wordt vermoord en zijn zoon is ontvoerd naar Spanje. Het is een spannend verhaal. Wie moet onze vader des vaderlands opvolgen?',
        place: 'Buren',
        lat: 51.9715,
        lng: 5.5870,
        order: 21,
        published: 1,
        created_at: '2024-06-08T12:00:00Z',
        updated_at: '2024-06-08T12:00:00Z',
        bounds: {
            lat_min: 51.969,
            lng_min: 5.585,
            lat_max: 51.974,
            lng_max: 5.589,
            lat_center: 51.9715,
            lng_center: 5.5870,
            length: { km: 4.0, minutes: 60 },
        },
        cover_image: {
            file: { id: 601, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_2_buren_960x320-px-1-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Buren – Een Oranje Erfenis'
        },
        details: [
            {
                id: 2021,
                route_id: 21,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start Haagse Uitweg, 4116 CG.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 22,
        application_id: 1,
        name: 'Den Haag – Hofstad in Beweging',
        description:
            'Tijdens deze wandeling via het stadscentrum naar het Haagse bos, hoor je hoe de stad in de 17e eeuw een echte hofstad wordt. We beginnen op het Malieveld en lopen via ‘de mooiste laan van Europa’ naar de Hofvijver. In de 17e eeuw is Den Haag een grauwe, militaire stad maar met de komst van winterkoningin Elizabeth en haar hofdame Amalia van Solms, krijgt de stad allure.\n' +
            '\n' +
            'We lopen naar het indrukwekkende Paleis Huis ten Bosch, dat in deze eeuw gebouwd wordt als zomerverblijf voor Amalia. Hier in Den-Haag trouwt zij in de Kloosterkerk met stadhouder Frederik Hendrik, ‘Stedendwinger’ en prins van Oranje. We horen hoe haar ambitie de familie van Oranje-Nassau een vorstelijk aanzien geeft en hoe zij de dynastie van uitsterven weet te redden.',
        place: 'Den Haag',
        lat: 52.0705,
        lng: 4.3007,
        order: 22,
        published: 1,
        created_at: '2024-06-09T12:00:00Z',
        updated_at: '2024-06-09T12:00:00Z',
        bounds: {
            lat_min: 52.068,
            lng_min: 4.298,
            lat_max: 52.073,
            lng_max: 4.303,
            lat_center: 52.0705,
            lng_center: 4.3007,
            length: { km: 4.5, minutes: 65 },
        },
        cover_image: {
            file: { id: 602, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_3_denhaag_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Den Haag – Hofstad in Beweging'
        },
        details: [
            {
                id: 2022,
                route_id: 22,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij Paleis Noordeinde.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 23,
        application_id: 1,
        name: 'Leeuwarden – De Friese Omweg',
        description:
            'Deze wandeling begint net buiten de stad en loopt via de Singel langs de scheve Oldehove. We vertellen het verhaal van de Friese tak van de Oranje-Nassaus: de Nassau-Dietz. Het is een verhaal met onverwachte wendingen, via kromme stadstraatjes, door de Prinsentuin naar het Stadhouderlijk hof van Leeuwarden.\n' +
            '\n' +
            'Een historische wandeling door het oude centrum die je meeneemt naar het begin van de 18e eeuw. Een tijd dat stadhouders worden afgeschaft en er een strijd losbarst om de Oranje prinsentitel. We horen hoe de Oranje-dynastie op wankelen staat en ontdekken hoe Maria Louise alles op alles zet om haar zoon Willem IV aan de macht te helpen.',
        place: 'Leeuwarden',
        lat: 53.2012,
        lng: 5.7999,
        order: 23,
        published: 1,
        created_at: '2024-06-10T12:00:00Z',
        updated_at: '2024-06-10T12:00:00Z',
        bounds: {
            lat_min: 53.198,
            lng_min: 5.797,
            lat_max: 53.204,
            lng_max: 5.803,
            lat_center: 53.2012,
            lng_center: 5.7999,
            length: { km: 4.6, minutes: 65 },
        },
        cover_image: {
            file: { id: 603, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_4_leeuwarden_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Leeuwarden – De Friese Omweg'
        },
        details: [
            {
                id: 2023,
                route_id: 23,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start Rengerslaan, 8917 JA.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 24,
        application_id: 1,
        name: 'Den Helder – Strijd van een Koning',
        description:
            'In deze duinwandeling nemen we je mee naar het einde van de 18e eeuw als hier in Den Helder een strijd losbarst tussen voor- en tegenstanders van de Oranjes. Langs het water en over de dijk horen we hoe de Fransen de Nederlanden innemen. Nederland wordt een Bataafse Republiek. De Oranjes slaan op de vlucht, naar hun familie aan de andere kant van de Noordzee.\n' +
            '\n' +
            'Zelfs Napoleon komt een kijkje nemen in Den Helder. Het is 1811. We zien de forten die er nu nog steeds staan, een erfenis van de Franse keizer die toch niet onoverwinnelijk blijkt. Want het is een Oranje-Nassau die zal terugkeren naar de Nederlanden om de troon te bestijgen. Deze wandeling neemt je mee naar dit historische moment. Nederland wordt een monarchie.',
        place: 'Den Helder',
        lat: 52.9580,
        lng: 4.7590,
        order: 24,
        published: 1,
        created_at: '2024-06-11T12:00:00Z',
        updated_at: '2024-06-11T12:00:00Z',
        bounds: {
            lat_min: 52.956,
            lng_min: 4.757,
            lat_max: 52.960,
            lng_max: 4.761,
            lat_center: 52.9580,
            lng_center: 4.7590,
            length: { km: 5.0, minutes: 70 },
        },
        cover_image: {
            file: { id: 604, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_5_denhelder_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Den Helder – Strijd van een Koning'
        },
        details: [
            {
                id: 2024,
                route_id: 24,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij het havengebied / fortificaties.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 25,
        application_id: 1,
        name: 'Baarn – Weg van Macht',
        description:
            'Deze groene boswandeling, langs het prachtige Paleis Soestdijk vertelt het verhaal van koning Willem III en zijn strijd om de macht. Het is 1848 als de macht van de Oranjekoning wordt ingeperkt door de grondwet van Thorbecke. Lopend door de bossen, via de Naald van Waterloo horen we hoe Willem hiermee worstelt en hoe ook zijn huwelijk met Sophie van Württemberg op de klippen loopt.\n' +
            '\n' +
            'We beginnen en eindigen vlakbij het station van Baarn, waar nog één van de laatste koninklijke wachtkamers is en horen hoe antiheld Willem III toch nog een succes weet voort te brengen. Een dochter: prinses Wilhelmina. De eerste koningin van ons land.',
        place: 'Baarn',
        lat: 52.1564,
        lng: 5.2800,
        order: 25,
        published: 1,
        created_at: '2024-06-12T12:00:00Z',
        updated_at: '2024-06-12T12:00:00Z',
        bounds: {
            lat_min: 52.154,
            lng_min: 5.278,
            lat_max: 52.159,
            lng_max: 5.282,
            lat_center: 52.1564,
            lng_center: 5.2800,
            length: { km: 4.0, minutes: 60 },
        },
        cover_image: {
            file: { id: 605, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_6_baarn_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Baarn – Weg van Macht'
        },
        details: [
            {
                id: 2025,
                route_id: 25,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start nabij Paleis Soestdijk.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 26,
        application_id: 1,
        name: 'Apeldoorn – Oranjes op de Vlucht',
        description:
            'Aan het begin van de Tweede Wereldoorlog vluchten de Oranjes naar Engeland en Canada. Koningin Wilhelmina laat haar geliefde Paleis Het Loo achter. In deze wandeling starten we bij de Grote Kerk van Apeldoorn, bij het bronzen beeld van de koningin, om via groene villaparken en via monument de Naald bij Het Loo te komen. Hier horen we hoe het koninklijk paleis bezet wordt door de Nazi’s. En hoe Wilhelmina vanuit het buitenland contact probeert te houden met het Nederlandse volk via Radio Oranje.\n' +
            '\n' +
            'Deze stadswandeling neemt je mee door parken en langs monumenten die ons herinneren aan de oorlog, aan de Jodenvervolging en de bevrijding van de stad door de Canadezen.',
        place: 'Apeldoorn',
        lat: 52.2130,
        lng: 5.9690,
        order: 26,
        published: 1,
        created_at: '2024-06-13T12:00:00Z',
        updated_at: '2024-06-13T12:00:00Z',
        bounds: {
            lat_min: 52.210,
            lng_min: 5.966,
            lat_max: 52.216,
            lng_max: 5.972,
            lat_center: 52.2130,
            lng_center: 5.9690,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 606, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_7_apeldoorn_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Apeldoorn – Oranjes op de Vlucht'
        },
        details: [
            {
                id: 2026,
                route_id: 26,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start in het centrum nabij Paleis Het Loo.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 27,
        application_id: 1,
        name: 'Willemstad – Het Pad van Oranje',
        description:
            'In deze wandeling door het idyllische Brabantse vestingstadje komt vijf eeuwen Oranjegeschiedenis voorbij. We beginnen in de haven. De rivier Hollands Diep zal door de verdrinking van Friso voor altijd verbonden zijn met de Oranjes. Lopend over dijken en bastions ontdekken we hoe het stadje aan haar naam komt en welke rol prins Maurits hierin heeft gespeeld.\n' +
            '\n' +
            'We lopen langs de prachtige koepelkerk, middelpunt van de stad en zien de sporen die de Tweede Wereldoorlog hier heeft achtergelaten. We maken grote sprongen in de tijd, maar altijd langs de Oranje familielijn. Van Willem van Oranje tot aan onze huidige koning Willem Alexander.',
        place: 'Willemstad',
        lat: 51.9850,
        lng: 4.2850,
        order: 27,
        published: 1,
        created_at: '2024-06-14T12:00:00Z',
        updated_at: '2024-06-14T12:00:00Z',
        bounds: {
            lat_min: 51.983,
            lng_min: 4.283,
            lat_max: 51.987,
            lng_max: 4.287,
            lat_center: 51.9850,
            lng_center: 4.2850,
            length: { km: 4.5, minutes: 65 },
        },
        cover_image: {
            file: { id: 607, url: 'https://hetverhaalvannederland.ntr.nl/files/2023/12/HVVNLON_podwalk_8_willemstad_960x320-px-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Willemstad – Het Pad van Oranje'
        },
        details: [
            {
                id: 2027,
                route_id: 27,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start centrum Willemstad.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
    {
        id: 28,
        application_id: 1,
        name: 'Muiden – Slot van de tijd',
        description:
            'In het midden van het land, vlakbij de A1, waan je je in een andere wereld. Deze wandeling begint aan de rand van Muiden en voert je over deels onverharde paden door de polder, over een dijk langs het water en tenslotte door het authentieke centrum langs de Vecht.\n' +
            '\n' +
            'In de middeleeuwen is Nederland een lappendeken van graafschappen en hertogdommen. Het is de tijd van ridders en boeren en van strijd tegen het water.  In deze wandeling vertellen we het verhaal over de opkomst en ondergang van de Hollandse graaf Floris de Vijfde. En gaan we rond het Muiderslot op zoek naar de sporen van deze middeleeuwse tijd.',
        place: 'Muiden',
        lat: 52.3320,
        lng: 5.0340,
        order: 28,
        published: 1,
        created_at: '2024-06-15T12:00:00Z',
        updated_at: '2024-06-15T12:00:00Z',
        bounds: {
            lat_min: 52.330,
            lng_min: 5.032,
            lat_max: 52.334,
            lng_max: 5.036,
            lat_center: 52.3320,
            lng_center: 5.0340,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 608, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R4_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Muiden – Slot van de tijd'
        },
        details: [
            {
                id: 2028,
                route_id: 28,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start bij Muiderslot.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 29,
        application_id: 1,
        name: 'Deventer – Kennis is macht',
        description:
            'Deze route kronkelt door de levendige binnenstad van Deventer. We lopen langs de woelige IJssel, wurmen ons door smalle steegjes en trekken langs scheve pakhuizen. De geschiedenis is hier duidelijk en zichtbaar aanwezig. We lopen door de straten waar de tonnen vis en zout de Hanzestad in kwamen en komen erachter waarom Deventer vroeger omheind was door een dikke stadsmuur.\n' +
            '\n' +
            'In de veertiende eeuw wordt Europa geteisterd door een verschrikkelijke ziekte: de pest. Veel mensen denken dat de Zwarte Dood een straf van God is. Maar sommigen denken daar anders over, zoals Deventenaar Geert Groote. In deze wandeling vertellen we het verhaal van de pest en hoe mensen anders naar de wereld gaan kijken. En gaan we op zoek naar sporen van de geschiedenis in deze Hanzestad aan de IJssel.',
        place: 'Deventer',
        lat: 52.2550,
        lng: 6.1630,
        order: 29,
        published: 1,
        created_at: '2024-06-16T12:00:00Z',
        updated_at: '2024-06-16T12:00:00Z',
        bounds: {
            lat_min: 52.253,
            lng_min: 6.161,
            lat_max: 52.257,
            lng_max: 6.165,
            lat_center: 52.2550,
            lng_center: 6.1630,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 609, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R5_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Deventer – Kennis is macht'
        },
        details: [
            {
                id: 2029,
                route_id: 29,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start in het centrum, nabij de Bergkerk.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 30,
        application_id: 1,
        name: 'Brielle – In naam van Oranje',
        description:
            'Brielle is omringd door verdedigingswerken. We lopen over stadswallen, langs bastions en over stadspoorten. In de stad wandelen we langs gezellige haventjes en knusse pleinen. Misschien zien we zelfs nog een Spaanse vlag wapperen. \n' +
            '\n' +
            'Willem van Oranje is voor altijd verbonden aan de 80-jarige oorlog. Een strijd die eind zestiende eeuw losbarst, niet alleen tussen Nederland en Spanje maar ook tussen katholieken en protestanten. In deze wandeling vertellen we het verhaal van de strijd tussen de Spaanse koning en de vader des vaderlands. En gaan we op zoek naar sporen van 80 jaar oorlog in Den Briel.',
        place: 'Brielle',
        lat: 51.8460,
        lng: 4.1390,
        order: 30,
        published: 1,
        created_at: '2024-06-17T12:00:00Z',
        updated_at: '2024-06-17T12:00:00Z',
        bounds: {
            lat_min: 51.844,
            lng_min: 4.137,
            lat_max: 51.848,
            lng_max: 4.141,
            lat_center: 51.8460,
            lng_center: 4.1390,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 610, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R6_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Brielle – In naam van Oranje'
        },
        details: [
            {
                id: 2030,
                route_id: 30,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start nabij de vestingwerken van Brielle.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 31,
        application_id: 1,
        name: 'Hoorn – Goudzucht',
        description:
            'We beginnen onze route aan de randen van de oude binnenstad van Hoorn. Bij de Oosterpoort, die de vijanden moest buiten houden, duiken we het oude Hoorn in. We lopen over smalle bruggetjes en langs brede havens. We vinden hier het statige hoofdkwartier van de VOC en WIC en kijken vanaf de steigers onder de Hoofdtoren richting de horizon over de vroegere Zuiderzee. Hier vandaan vertrokken de schepen richting Azië en Amerika.\n' +
            '\n' +
            'In de zeventiende eeuw wordt Nederland een wereldmacht. Niet alleen door handel maar ook door oorlog en uitbuiting. De VOC, de Verenigde Oost-Indische Compagnie, speelt hierin een belangrijke rol. In deze wandeling vertellen we het verhaal over de Gouden Eeuw met een zwarte rand en gaan we op zoek naar de sporen van deze geschiedenis in Hoorn.',
        place: 'Hoorn',
        lat: 52.6420,
        lng: 5.0610,
        order: 31,
        published: 1,
        created_at: '2024-06-18T12:00:00Z',
        updated_at: '2024-06-18T12:00:00Z',
        bounds: {
            lat_min: 52.640,
            lng_min: 5.059,
            lat_max: 52.644,
            lng_max: 5.063,
            lat_center: 52.6420,
            lng_center: 5.0610,
            length: { km: 4.0, minutes: 60 },
        },
        cover_image: {
            file: { id: 611, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R7_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Hoorn – Goudzucht'
        },
        details: [
            {
                id: 2031,
                route_id: 31,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start Achter de Vest.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },

    {
        id: 32,
        application_id: 1,
        name: 'Hattem – Volk en vorst',
        description:
            'We beginnen onze wandeling op Oranjegezinde grond. Midden in het dichtbegroeide bos vinden we een groot open stuk land, met daarop een statig landhuis. Als we langs de Molecatense beek verder wandelen, komen we uit in het knusse Hattem, waar kleine poortjes ons leiden naar verscholen parken en pleintjes.\n' +
            '\n' +
            'In de 18e eeuw eisen gewone burgers in Nederland meer rechten op. Deze patriotten komen in opstand tegen de elite en hun strijd voor gelijkheid leidt tot een heuse burgeroorlog. Uit deze strijd ontstaat een eerste democratisch Nederland. In deze wandeling vertellen we het verhaal over de strijd tussen de aanhangers van de Prins van Oranje en de patriotten. En gaan we op zoek naar de sporen van deze revolutionaire tijd in het Gelderse Hattem.',
        place: 'Hattem',
        lat: 52.4630,
        lng: 6.0790,
        order: 32,
        published: 1,
        created_at: '2024-06-19T12:00:00Z',
        updated_at: '2024-06-19T12:00:00Z',
        bounds: {
            lat_min: 52.461,
            lng_min: 6.077,
            lat_max: 52.465,
            lng_max: 6.081,
            lat_center: 52.4630,
            lng_center: 6.0790,
            length: { km: 5.0, minutes: 75 },
        },
        cover_image: {
            file: { id: 612, url: 'https://hetverhaalvannederland.ntr.nl/files/2021/12/R8_ART-WORK-def-768x256.png', size: 0, mime_type: 'image/jpeg' },
            focus_point: { x: 0.5, y: 0.5 },
            alt: 'Hattem – Volk en vorst'
        },
        details: [
            {
                id: 2032,
                route_id: 32,
                route_detail_type_id: 1,
                imgUrl: '',
                data: { text: 'Start in het historische centrum van Hattem.' },
                order: 1,
                published: 1,
                created_at: '',
                updated_at: '',
                route: {} as any,
                type: 'description',
                route_details_type: {} as any
            }
        ]
    },
];