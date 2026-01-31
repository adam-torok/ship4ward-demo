# Ship4ward - Landing Page Demo

Modern, teljesen reszponzív React alapú landing oldal a képzeletbeli Ship4ward csomagküldő szolgáltatás számára.

![Status](https://img.shields.io/badge/Status-In%20Development-orange)
![Tech](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-blue)
![Style](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38bdf8)

## Stack

- **Framework:** React 18 + Vite
- **Nyelv:** TypeScript (Szigorú típusosság a props és children elemeknél)
- **Stílus:** Tailwind CSS v4 (CSS Variables, `@apply` direktívák, BEM)
- **Design:** Mobile-First megközelítés

## Architektúra
- **Layout Pattern:** Globális `Layout` komponens (`Navbar` + `Footer` wrapper), ami minden oldalon biztosítja a konzisztens megjelenést.
- **Project Structure:** A fájlok logikus mappaszerkezetbe rendezve (`components/common`, `components/sections`, `components/ui`).

## Telepítési útmutató

Töltsd le a forráskódot a GitHubról a saját gépedre:

1. git clone [https://github.com/adam-torok/ship4ward-demo.git](https://github.com/adam-torok/ship4ward-demo.git)
2. cd ship4ward-demo
3. npm install
4. npm run dev

## Projekt Struktúra

```bash
src/
├── assets/             # Képek, logók, ikonok
├── components/
│   ├── common/         # Navbar, Footer
│   ├── layout/         # Layout wrapper
│   ├── sections/       # Hero, Orders, Faq, Logos (Landing oldal részei)
│   └── ui/             # Kisebb UI elemek (pl. CountrySelect, OrderStat)
├── App.tsx             # Fő belépési pont
├── index.css           # Tailwind beállítások és CSS változók
└── main.tsx            # React DOM renderelés

