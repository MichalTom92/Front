Dokumentacja Strony Internetowej "BudujemyPro"
==============================================

Data utworzenia: 2024-05-21

Opis Projektu
-------------

"BudujemyPro" to nowoczesna, w pełni responsywna strona typu "one-page" (jednostronicowa), stworzona jako wizytówka dla firmy budowlanej. Strona została zaprojektowana z myślą o przejrzystości, łatwości nawigacji i nowoczesnym wyglądzie. Zaimplementowano na niej szereg dynamicznych funkcjonalności, aby poprawić doświadczenie użytkownika (UX).


Technologie
-----------

*   **HTML5**: Semantyczna struktura dokumentu, zoptymalizowana pod kątem SEO i dostępności.
*   **CSS3**: Nowoczesne style, w tym:
    *   Zmienne CSS (Custom Properties) dla łatwego zarządzania motywami.
    *   Flexbox i Grid Layout do budowy elastycznych i responsywnych układów.
    *   Efekt "Glassmorphism" dla eleganckiego wyglądu.
    *   Animacje i przejścia (transitions) dla dynamicznego interfejsu.
    *   Media Queries dla pełnej responsywności na różnych urządzeniach.
*   **JavaScript (ES6+)**: Logika strony, w tym:
    *   Manipulacja DOM bez użycia zewnętrznych bibliotek (Vanilla JS).
    *   Obsługa zdarzeń, interakcji użytkownika.
    *   Wykorzystanie `localStorage` do zapamiętywania preferencji użytkownika.
    *   API `IntersectionObserver` do animacji podczas przewijania.
    *   API `Fetch` do asynchronicznego wysyłania danych z formularza.


Funkcjonalności
---------------

1.  **Przełącznik Motywu (Light/Dark Mode)**
    *   Użytkownik może przełączać się między jasnym a ciemnym motywem kolorystycznym.
    *   Wybrany motyw jest zapisywany w `localStorage`, dzięki czemu preferencja jest pamiętana podczas kolejnych wizyt.
    *   Logika znajduje się w `script.js` i operuje na atrybucie `data-theme` w tagu `<body>`.

2.  **Wielojęzyczność (PL/EN)**
    *   Strona obsługuje dwie wersje językowe: polską i angielską.
    *   Wybrany język jest zapisywany w `localStorage`.
    *   Tłumaczenia przechowywane są w obiekcie `translations` w pliku `script.js`. Teksty na stronie są podmieniane dynamicznie na podstawie atrybutów `data-key`.

3.  **Responsywne Menu Mobilne**
    *   Na urządzeniach mobilnych (poniżej 768px szerokości) tradycyjne menu jest zastępowane ikoną "hamburgera".
    *   Kliknięcie ikony rozwija pełnoekranowe menu nawigacyjne.
    *   Menu zamyka się automatycznie po kliknięciu w dowolny link.

4.  **Animacje podczas Przewijania**
    *   Elementy takie jak tytuły sekcji, karty usług i zdjęcia w galerii pojawiają się z subtelną animacją (fade-in/slide-up), gdy użytkownik przewinie do nich stronę.
    *   Funkcjonalność zrealizowana jest za pomocą `IntersectionObserver` dla optymalnej wydajności.

5.  **Formularz Kontaktowy z Integracją Web3Forms**
    *   Formularz kontaktowy pozwala na wysyłanie wiadomości bezpośrednio ze strony.
    *   Dane są wysyłane asynchronicznie (bez przeładowania strony) do serwisu `web3forms.com`, który następnie przesyła je na zdefiniowany adres e-mail.
    *   Użytkownik otrzymuje informację zwrotną o statusie wysyłki (wysyłanie, sukces, błąd).
    *   **Ważne:** Aby formularz działał, należy w pliku `script.js` podać własny klucz dostępowy w stałej `WEB3FORMS_ACCESS_KEY`.

6.  **Galeria Zdjęć z Lightboxem**
    *   Kliknięcie na zdjęcie w galerii otwiera je w trybie "lightbox" (na pełnym ekranie z przyciemnionym tłem).
    *   Użytkownik może nawigować między zdjęciami za pomocą strzałek (poprzednie/następne) oraz zamknąć widok.

7.  **Przycisk "Wróć na Górę" (Scroll to Top)**
    *   Przycisk pojawia się w prawym dolnym rogu ekranu, gdy użytkownik przewinie stronę w dół.
    *   Kliknięcie przycisku powoduje płynne przewinięcie strony na samą górę.

8.  **Zabezpieczenia przed kopiowaniem**
    *   Zaimplementowano podstawowe skrypty utrudniające kopiowanie treści i kodu strony.
    *   Obejmuje to blokadę prawego przycisku myszy, zaznaczania tekstu oraz skrótów klawiszowych do narzędzi deweloperskich.
    *   **Uwaga:** Jest to środek odstraszający, a nie w pełni skuteczna ochrona.


Struktura Plików
----------------

*   `index.html`: Główny plik HTML zawierający całą strukturę strony.
*   `style.css`: Arkusz stylów CSS odpowiedzialny za wygląd i responsywność.
*   `script.js`: Plik JavaScript z całą logiką i interaktywnością strony.
*   `pl.svg`, `gb.svg`: Ikony flag używane w przełączniku języków.
*   `budowa.jpg`: Obraz tła w sekcji "hero".
*   `readme.txt`: Niniejszy plik dokumentacji.


Instalacja i Uruchomienie
-------------------------

Strona jest w pełni statyczna. Aby ją uruchomić, wystarczy otworzyć plik `index.html` w dowolnej nowoczesnej przeglądarce internetowej. Nie jest wymagany serwer ani proces budowania.

Aby w pełni korzystać z formularza kontaktowego, należy:
1.  Zarejestrować się na stronie `web3forms.com`, aby uzyskać swój unikalny klucz dostępowy.
2.  W pliku `script.js` podmienić wartość stałej `WEB3FORMS_ACCESS_KEY` na własny klucz.


Dostosowywanie Treści 
------------------------------------

Poniższe instrukcje wyjaśniają, jak samodzielnie zmienić podstawowe elementy na stronie. Wszystkie zmiany należy wprowadzać w odpowiednich plikach, używając edytora kodu (np. darmowego Visual Studio Code).

### 1. Zmiana Tekstów na Stronie

Wszystkie teksty (nagłówki, opisy usług, teksty w formularzu itp.) znajdują się w pliku `script.js`.

1.  Otwórz plik `script.js`.
2.  Znajdź na początku pliku duży obiekt o nazwie `translations`.
3.  Obiekt ten jest podzielony na sekcje `pl` (dla języka polskiego) i `en` (dla języka angielskiego).
4.  Aby zmienić tekst, znajdź odpowiedni klucz (np. `heroTitle` dla głównego nagłówka) i zmień tekst, który znajduje się w cudzysłowie po prawej stronie.

    *Przykład:* Aby zmienić główny nagłówek, zmień:
    `heroTitle: "Budujemy Twoje Marzenia",`
    na:
    `heroTitle: "Nowy Tytuł Twojej Strony",`

5.  Pamiętaj, aby dokonać zmiany w obu wersjach językowych (`pl` i `en`), jeśli strona ma być dwujęzyczna.

### 2. Zmiana Zdjęć w Galerii

Zdjęcia w galerii są zdefiniowane w pliku `index.html`.

1.  Otwórz plik `index.html`.
2.  Znajdź sekcję `<section id="gallery">`.
3.  Wewnątrz tej sekcji znajduje się siatka zdjęć (`<div class="gallery-grid">`). Każde zdjęcie to element `<div class="gallery-item">`.
4.  Aby podmienić zdjęcie, zmień adres URL w atrybucie `src` tagu `<img>`. Możesz wstawić link do zdjęcia z internetu lub ścieżkę do pliku, który umieścisz w folderze z projektem (np. `src="moje-nowe-zdjecie.jpg"`).
5.  Zmień również tekst w atrybucie `alt`, aby opisywał nowe zdjęcie. Jest to ważne dla SEO i dostępności.

    *Przykład:*
    `<img src="https://stary-link-do-zdjecia.com/obraz.jpg" alt="Stary opis zdjęcia">`
    Zmień na:
    `<img src="https://nowy-link-do-zdjecia.com/nowy-obraz.jpg" alt="Nowy, trafny opis zdjęcia">`

Publikacja w Internecie
-----------------------

Aby strona była dostępna publicznie w Internecie, konieczne jest:
1.  **Wykupienie hostingu:** Usługi przechowywania plików strony na serwerze. Dla stron statycznych jak ta, świetnie sprawdzają się darmowe opcje takie jak GitHub Pages, Netlify czy Vercel, a także tradycyjne płatne hostingi.
2.  **Zarejestrowanie domeny:** Unikalnego adresu (np. `www.twojafirma.pl`), pod którym strona będzie widoczna.

Po skonfigurowaniu hostingu i domeny należy wgrać wszystkie pliki projektu na serwer.
