# 🛍️ E-handelsplattform i Next.js

En minimalistisk e-handelsplattform byggd med **Next.js 15 App Router** och **TypeScript**.
Projektet hämtar produkter och produktdata från extern backend för att simulera en e-handelsplattform.
Syftet med projektet är att lära oss olika tekniker inom Next.js/React.

---

## 📑 Innehåll

- [Om projektet](#-om-projektet)
- [Funktioner](#-funktioner)
- [Teknologier](#-teknologier)
- [Installation](#-installation)
- [Användning](#-användning)
- [Projektstruktur](#-projektstruktur)
- [Arbetsflöde](#-arbetsflöde)
- [Sprintplan](#-sprintplan)
- [Bidra](#-bidra)
- [Lärdomar](#-lärdomar)
- [Licens](#-licens)
- [Kontakt](#-kontakt)

---

## 📖 Om projektet

Detta är en gruppövning där målet var att bygga en **minimalistisk e-handelsplattform**.
Syftet är att träna på:

- Arbete i grupp (Agilt)
- Arbete i proejkt (GitHub)
- Next.js/React kod

---

## ✨ Funktioner

- ✅ Startsida med Hero-sektion och CTA, utvalda produkter
- ✅ Produktsida med sökfunktion och kategori filtrering
- ✅ Sökfält och navigeringsfält
- ✅ Adminsida med formulär för uppdatering, radering och skapande av produkt

---

## 🛠 Teknologier

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DummyJSON - API](https://dummyjson.com/)
- [Sonner - Toast](https://github.com/emilkowalski/sonner)
- [ZOD](https://zod.dev/)
- [WAVE](https://wave.webaim.org/)

---

## ⚙️ Installation

```bash
# Klona repo
git clone https://github.com/VladZGarcia/ecommersepage.git

# Gå in i projektmappen
cd ecommersepage

# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev
```

---

## 🚀 Användning

- Navigering -> navigeringsfält med sökfunktion
- Startsida -> hero med CTA som går till alla produkter + utvalda produkter + om oss + kontact
- Produkt -> alla produkter + sökfält + kategorifiltrering
- Produktdetalj -> produktbeskrivning + omdömen + recension + lagerstatus + fraktinformation + val av antal + liknande produkter
- Om oss -> statisk sida med text
- Kontakt -> sida med kontaktformulär
- Footer -> footer med länkar och nyhetsbrev
- Admin -> lista med alla produkter + radering
- Admin/skapa -> formulär för att skapa upp produkt
- Admin/uppdatera -> formulär för att uppdatera befintlig produkt

---

## 📂 Projektstruktur

```
|-- app/
|   |-- page.tsx                 # Startsida
|   |-- about/page.tsx           # Om oss
|   |-- admin/
|   |   |-- page.tsx             # Adminsida
|   |   |-- create/page.tsx      # Produktskapande
|   |   |-- update/[id]/page.tsx # Produktuppdatering
|   |-- api/action.ts            # Server actions för formulärvalidering
|   |-- contact/page.tsx         # Kontaktsida
|   |-- pages/products/
|   |   |--page.tsx              # Produktsida
|   |   |--[id]/page.tsx         # Prodktdetaljsida
|-- components/                  # Återanvändbara komponenter
|-- components/breadcrumb/       # Breadcrumbkomponenter
|-- components/categories/       # Kategorikomponenter
|-- components/Nav/              # Navigationskomponenter
|-- components/product-card/     # Produktkortkomponenter
|-- components/product-details/  # Produktdetaljkomponenter
|-- lib/data/
|   |   |-- pages.json           # Navigationsfältslänkar
|   |   |-- product-data.tsx     # API fetch funktioner
|   |   |-- utils.ts             # Återanvändbara hjälpfunktioner
|-- lib/interfaces/products.ts   # Återanvändbara interfaces
|-- public/                      # Bilder
```

---

## 📈 Arbetsflöde

- Grupparbete i agila sprintar (SCRUM)
- Delade upp issues i feature branches
- PR + kodgranskning

---

## 🗓 Sprintplan

### Sprint 1 - Grundläggande struktur

- Bestämde vilket API vi skulle använda
- Tog fram design med hjälp av Figma
- Satte upp Next.js-projektet
- Skapade menyer & statiska sidor

### Sprint 2 - Produktsidan

- Satte upp produktsidan och ingående komponenter
- Satte upp produktdetaljsidan och ingående komponenter
- Jobbade med nya ideér/tillägg på tidigare komponenter

### Sprint 3 - Adminsidan

- Satte upp Adminsidan och tillhörande komponenter

### Sprint 4 - Finputs

- Förbättrade befintliga komponenter och finputsade på detaljer

---

## 🤝 Bidra

Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout ......`)
3. Commit & push
4. Skicka en Pull Request

---

## 📚 Lärdomar

- Skillnaden mellan Server & Client Components i Next.js
- Agila metoder
- API
- Responsivitet
- Github feature branches

---

## Licens

Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.

---

## ✍️ Kontakt

- https://github.com/VladZGarcia/
- https://github.com/MissKowalik/
- https://github.com/ebobic/
- https://github.com/Consolider/

---

## Bilder

![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/1.jpg "Startsida")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/2.jpg "Featured Products")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/3.jpg "Contact + Footer")
![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/4.jpg "Product Detail")

---

## Individuell Reflektion

Min största insats i e-handelsprojektet har varit att designa och implementera kärnkomponenter för produktdatahantering och produktpresentation. Jag har skapat både logik och UI-komponenter som utgör grunden för hur produkter hanteras och visas i applikationen.

### Filer och mappar jag har skapat

- **product-data.tsx**  
  Jag har byggt hela datalagret för produkter, inklusive funktioner för att hämta, söka, filtrera, lägga till, uppdatera och ta bort produkter via API. Denna fil är navet för all produktdata och gör det enkelt att återanvända logik i hela projektet.

- **products.ts**  
  Jag har definierat alla TypeScript interfaces för produkter, kategorier, recensioner och metadata. Detta har gett projektet en robust typstruktur och säkerställt att all produktdata är konsekvent och typad, vilket minskar buggar och gör utvecklingen snabbare.

- **product-card mappen**  
  Jag har skapat och strukturerat alla komponenter för att visa enskilda produkter i UI:t, inklusive bild, detaljer, header och knappar. Dessa komponenter är återanvändbara och används i produktlistor, sökresultat och på produktsidor. Jag har lagt stor vikt vid att designa dem responsivt och tillgängligt.

- **product-details mappen**  
  Jag har byggt komponenter för att visa detaljerad information om en produkt, såsom beskrivning, pris, bilder, recensioner och fraktinformation. Dessa komponenter gör det möjligt för användaren att få en komplett bild av produkten och fatta köpbeslut.

### Funktionalitet och integrationer jag har bidragit med

- Jag har bidragit med att få **SearchBar**, **CategoryList** och **Pagination** att samverka.  
  Genom att vidareutveckla logiken i projektet har jag gjort det möjligt för användaren att söka, filtrera på kategori och samtidigt bläddra mellan sidor – med bevarade filter och söktermer i URL:en.  
  Detta har krävt att jag integrerat och synkroniserat dessa komponenter så att de fungerar sömlöst tillsammans, även om jag inte skapade dem från grunden.

- Jag har implementerat att **search-bar** stängs automatiskt när man klickar utanför sökfältet, vilket förbättrar användarupplevelsen och minskar risken för att sökfältet ligger kvar öppet i onödan.

- Jag har även lagt till funktionalitet så att **search-bar** stängs direkt när man klickar på ett produktkort i searchbar-dropdown, vilket ger ett smidigt och intuitivt flöde för användaren.

## Tekniker och lösningar

- **TypeScript interfaces** för säker och skalbar datahantering
- **Asynkrona API-anrop** med error handling för robust dataloggik
- **Modulär komponentstruktur** i React/Next.js för återanvändbarhet och enkel vidareutveckling
- **Responsiv design** med Tailwind CSS för att optimera användarupplevelsen på alla enheter
- **Integration av filter, sökning och paginering** för en sammanhängande och användarvänlig produktupplevelse
- **Event-hantering och DOM-interaktion** för att hantera klick utanför och stänga komponenter automatiskt

## Resultat och värde

Genom att skapa dessa filer och mappar samt integrera filter, sökning och paginering har jag lagt grunden för en skalbar och underhållbar e-handelsplattform. Min kod har gjort det enkelt att hantera produktdata, visa produkter på ett attraktivt sätt och bygga vidare på funktionaliteten i projektet. Jag har bidragit med både teknisk struktur och användarvänliga gränssnitt som är centrala för projektets framgång.

## Framtida förbättringar

Jag ser potential att vidareutveckla:

- Mer avancerad filtrering och sortering av produkter
- Caching och optimering av API-anrop
- Fler UI-förbättringar för produktpresentation och interaktion
