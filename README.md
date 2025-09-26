Usvajanje kućnih ljubimaca – Klijentska veb aplikacija

Jednostranična veb aplikacija (SPA) razvijena korišćenjem React-a, TypeScript-a i Vite-a.
Aplikacija omogućava pregled kućnih ljubimaca, filtriranje, pretragu, detaljan prikaz i slanje upita staratelju.
Projekat je urađen u okviru predmeta Klijentske veb tehnologije na Fakultetu organizacionih nauka.

Funkcionalnosti

Početna stranica sa osnovnim informacijama

Stranica sa listom ljubimaca i paginacijom

Pretraga i filteri po kategorijama (psi, mačke, zečevi, ptice)

Stranica sa detaljima o ljubimcu i galerijom slika

Modal za slanje upita staratelju ljubimca

About i Contact stranice

Korišćenje React hook-ova (useState, useEffect, useMemo, useSearchParams, useContext, useNavigate)

Čuvanje podataka o upitima u LocalStorage-u

Dinamičko učitavanje slika preko Pexels API-ja

Responzivan dizajn uz TailwindCSS

Tehnologije
React + TypeScript + Vite

TailwindCSS za stilizaciju

React Router za rutiranje

Lucide Icons za ikonice

Pexels API za slike

Struktura projekta
src/
 ├─ assets/         # Statički fajlovi
 ├─ components/     # Reusable komponente
 ├─ domain/         # Interfejsi i tipovi
 ├─ layout/         # Layout komponente
 ├─ models/         # Klase (Pet, Inquiry)
 ├─ pages/          # Stranice aplikacije
 ├─ storage/        # LocalStorage logika
 ├─ lib/            # API pomoćne funkcije (Pexels)
 ├─ App.tsx         # Glavna komponenta aplikacije
 └─ main.tsx        # Ulazna tačka

Pokretanje projekta

Klonirati repozitorijum:

git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2023-0461-usvajanje-kucnih-ljubimaca.git
cd klijentske-veb-tehnologije-2024-2023-0461-usvajanje-kucnih-ljubimaca
Instalirati zavisnosti:
npm install
Pokrenuti razvojni server:
npm run dev
Aplikacija će biti dostupna na adresi http://localhost:5173
Napraviti build za produkciju:
npm run build
Autori
Maša Đorđević – 2023/0461
Pavle Milovanović – 2022/0485
Marija Mijović – 2023/0094
Licenca
Projekat je razvijen u edukativne svrhe.