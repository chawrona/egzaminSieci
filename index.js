const btn = document.querySelector(".btn")
const audio = document.querySelector("audio")
const subpasek = document.querySelector(".subpasek")
const span = document.querySelector(".XD")
const git = document.querySelector(".git")
const ogar = document.querySelector(".ogar")
const nieogar = document.querySelector(".nieogar")
const procent = document.querySelector(".procent")
const forward = document.querySelector(".forward")

const mute = document.querySelector(".mute")
let isSwap = -1

mute.addEventListener("click", swap)

function swap() {
    if (isSwap > 0) {
        mute.classList.add("fa-music")
        mute.classList.remove("fa-volume-xmark")
        audio.volume = 1;
    } else {
        mute.classList.add("fa-volume-xmark")
        mute.classList.remove("fa-music")
        audio.volume = 0;
    }
    isSwap *= -1
}


let i = 100;

const pytanie = document.querySelector(".pytanie")

const indeksy = JSON.parse(localStorage.getItem("indeksy")) ?? [24,25]
console.log(indeksy);

let isClicked2 = false;

let isFirst = false;

    

function setLocalStorage() {
    localStorage.setItem("indeksy", JSON.stringify(indeksy))
    ogar.innerHTML = indeksy.length
    procent.innerText = ((indeksy.length/pytania.length) * 100).toFixed(2) + "%";
}

const pytania = [
    '1. Czym charakteryzuje się komutacja łączy?',
    '2. Czym charakteryzuje się komutacja pakietów?',
    '3. Proszę porównać komutację łączy i komutację pakietów.',
    '4. Proszę wymienić modele sieci i wyjaśnić powody dla których zostały wprowadzone i są używane.',
    '5. Proszę wymienić warstwy w modelu referencyjnym sieci ISO/OSI',
    '6. Proszę wymienić warstwy w modelu sieci TCP/IP',
    '7. Proszę porównać model referencyjny i model TCP/IP',
    '8. Proszę scharakteryzować warstwę aplikacji w modelu ISO/OSI',
    '9. Proszę scharakteryzować warstwę aplikacji w modelu TCP/IP',
    '10. Prosze opisać warstwe prezentacji w modeli ISO/OSI',
    '11. Proszę opisać warstwę sesji w modelu ISO/OSI',
    '12. Prosze opisać warstwę internetu w modelu TCP/IP',
    '13. Prosze opisać warstwe siec w modelu ISO/OSI',
    '14. Prosze opisać warstwę transportową w modelu ISO/OSI',
    '15. Prosze opisać warstwę transportową w modelu TCP/IP',
    '16. Prosze opisać warstwę łącza danych w modelu ISO/OSI',
    '17. Prosze opisać warstwę dostępu do sieci w modelu TCP/IP',
    '18. Prosze opisać warstwe fizyczną w modelu ISO/OSI',
    '19. Proszę wyjaśnić mechanizm enkapsulacji. W jakim celu i kiedy jest stosowany?',
    '20. Proszę wymienić znane sposoby na zapewnienie poprawności przesyłu danych w warstwie fizycznej.',
    '21. Na czym polega kontrola parzystości? Kiedy się ją stosuje. Zalety, wady. Umiejętność wyliczenia bitu parzystości.',
    '22. Na czym polega “suma kontrolna”? Gdzie się ją stosuje? Przykład, umiejętność wyliczenia.  ',
    '23. Kod Hamminga. Do czego służy? Jakie ma zalety, jakie wady?',
    '24. Kod Hamminga, umiejętność zakodowania ciągu danych. (np. ciągu liter: EXAM, albo 10100011, 1100)',
    '25. Kod Hamminga, umiejętność odkodowania informacji. (np. 000010110000010000001010100110110100111 czy 10101100, 11011)',
    '26. Proszę opisać topologie magistrali (technologie, wady, zalety)',
    '27. Proszę opisać topologie gwiazdy (technologie, wady, zalety)',
    '28. Proszę opisać pojęcie domeny kolizyjnej ',
    '29. Prosze wyjaśnić różnice między fizyczną a logiczną topologią ze szczególnym uwzględnieniem domeny kolizyjnej, na przykładzie: (nie ma zdjęcia, sory)',
    '30. Proszę wyjaśnić pojęcia full-duplex, half-duplex, simplex',
    '31. Proszę opisać jak wygląda adres fizyczny kart sieciowych i wyjaśnić dlaczego powinien być unikalny',
    '32. Proszę podać przykłady protokołów pracujących w warstwie łącza danych',
    '33. Proszę opisać do czego służy protokół ARP',
    '34. Prosze opisać nagłówek ramki ethernetowej',
    '35. Proszę wyjaśnić do czego służy preambuła w ramce ethernetowej',
    '36. Proszę wyjaśnić cel rozszerzenia protokołu ETHERNET o VLAN tagi',
    '37. Proszę wyjaśnić pole Type/Size z nagłówka ramki ethernetowej.',
    '38. Proszę wyjaśnić czym jest funkcjonalność fast switching obecna w switchach.',
    '39. Proszę wyjaśnić funkcję koncentratora sieciowego, znanego też pod nazwą HUB',
    '40. Prosze wyjaśnić funkcje przełącznika sieciowego, znaneto też pod nazwa SWITCH',
    '41. Prosze wyjasnic fukncje urządzenia trasującego, zwanego też potocznie ROUTERem ',
    '42. Proszę wymienić przykłady protokołów warstwy sieci',
    '43. Prosze omówić jak wyglada adres używany w protokole IPv4',
    '44. Co to jest maska i czemu służy.',
    '45. Prosze omówić idee klas adresów IPv4',
    '46. Prosze wyjaśnić cel istnienia adresów prywatnych w puli adresów IPv4',
    '47. Prosze omówć różne sposoby komunikacji realizowane w ramach IPv4 (unicast, multicast, broadcast)',
    '48. Prosze omówić czemu służą takie adresy specjalne jak 0.0.0.0/8, 127.0.0.0/8, 169.254.0.0/16',
    '49. Znając adres hosta i maskę np.: 149.156.90.19/25 prosze: wyliczyć adres sieci, wyliczyć adres rozgłoszeniowy, policzyć ilość hostów w sieci',
    '50. powiedzieć jaki będzie pierwszy i ostatni adres dostępny dla hostów w takiej sieci., określić czy taki adres można przypisać dowolnemu urządzeniu sieciowemu, zapisać maskę w formacie 4-oktetowym',
    '51. Proszę przybliżyć idee dokumentów RFC',
    '52. Proszę wymienić znane wady adresacji IPv4',
    '53. Proszę wyjaśnić czym jest protokół sieciowy.',
    '54. Proszę porównać cechy protokołów połączeniowych i bezpołączeniowych',
    '55. Proszę wytłumaczyć dlaczego skretka jest skrecona?',
    '56. Proszę opowiedzieć czym jest routing w sieciach komputerowych',
    '57. Proszę podać przykłady poleceń systemu linux/windows które przydatne są w szeroko rozumianym troubleshootingu zagadnień sieciowych.',
    '58. Prosze powiedzieć jaki protokoł wykorzystuje polecenie tracert/traceroute i wytłumaczyć zasadę działania, która jest zrealizowana w tym poleceniu',
    '59. Prosze opowiedziec o protokole ICMP i poleceniu ping',
    '60. Proszę o wytłumaczenie pola TTL w nagłówku protokołu IPv4. Jak ta funkcjonalność jest zapewniona w protokole IPv6 ?',
    '61. Prosze wyjaśnic jak działa mechanizm fragmentacji w protokole IPv4 (bity MF, DF i pole offset - czemu służą?).',
    '62. Prosze wyjaśnić jaką role w routingu pakietów odgrywa pojęcie bramy domyślnej',
    '63. Proszę powiedzieć czym jest tablica routingu, jakie polecenia pozwalają zapoznać się z jej zawartością?',
    '64. Prosze wyjaśnic czym jest sniffing i wymienić narzędzia które do niego służą.',
    '65. Prosze wyjasnić czym jest routing statyczny',
    '66. Proszę wyjaśnić czym jest routing dynamiczny',
    '67. Prosze porównac routing statyczny i dynamiczny, wady, zalety.',
    '68. Prosze omówic cechy TCP i UDP, jako przedstawicieli protokołów połączeniowych i bezpołączeniowych',
    '69. W jaki sposób możemy wyświetlić aktualny stan połączeń protokołów warstwy sesji? (Jakie informacje zostaną nam zaprezentowane?)',
    '70. Czym są “dobrze znane” adresy portów, prosze wymienić jakieś.',
    '71. Prosze omówic 3 zakresy portów używanych przez warstwę transportu.',
    '72. Prosze omówić mechanizm przesuwnego okna w protokole TCP',
    '73. Czym są pola SEQ i ACK w protokole TCP',
    '74. Prosze omówć znaczenie 3 wybranych flag z nagłówka TCP',
    '75. Prosze opisac mechanizm nawiązywania połączenia w ramach protokołu TCP (three-way handshake)',
    '76. Prosze omówić mechanizm kontoli przepływu danych w ramach protokłu TCP',
    '77. Proszę omówić mechanizm zakończenia połączenia TCP',
    '78. Prosze wymienić kilka protokołów warstwy aplikacji w modelu TCP/IP i omówić je krótko.',
    '79. Czym jest protokół DNS i do czego służy?',
    '80. Proszę omówić hierarchię usługi DNS. (Za co odpowiedzialne są serwery na różnych poziomach tej hierarchii?)',
    '81. Dlaczego jest tylko 13-cie tzw. root servers w hierarchii serwerów DNS?',
    '82. Prosze omówić działanie DNS',
    '83. Prosze wymienić polecenia które pozwalają odpytywać serwery DNS, umiejętność ich praktycznego użycia, również może zostać sprawdzona.',
    '84. Proszę omówić flagi AA, RA, RR z nagłówka protokołu DNS.',
    '85. Co to jest odpowiedź autorytatywna serwera DNS i czym się różni od pozostałych?',
    '86. Co to jest reverse DNS?',
    '87. prosze omówic protokół DHCP',
    '88. Proszę wymienić jakie informacje mogą być przesyłane za pomocą usługi DHCP do hostów',
    '89. Prosze przedstawić jak wygląda przepływ informacji w ramach protokołu DHCP',
    '90. Prosze omówić do czego służy protokół i usługa SSH',
    '91. Gdzie szukać własnych kluczy prywatnych i publicznych na systemach operacyjnych Windows/Linux i jak je wygenerować?',
    '92. Jakie informacje można znaleźć w pliku known_hosts i czemu służą?',
    '93. Proszę powiedzieć jakie zadania realizuje protokół FTP? W jakiej warstwie operuje?',
    '94. Czym się różni protokół TFTP od FTP? I jakie jest jego główne zastosowanie?',
    '95. Proszę krótko omówić protokół SMTP. Gdzie jest stosowany i do czego służy?',
    '96. Prosze omówić usługi pocztowe POP3 i IMAP, cechy, różnice, wady, zalety.',
    '97. Prosze opisać do czego służy i jakie ma cechy protokół HTTP',
    '98. Prosze omówic klasyfikacje statusów zwracanych przez protokół HTTP ze szczególnym uwzględnieniem statusu 418',
    '99. Prosze powiedzieć jakie polecenie mozna wykonywac w ramach protokołu HTTP i omówić 2-3 wybrane.',
    '100. Czym jest URL, czym jest URI? ',
    '101. Czym jest mechanizm keep alive, w jakim protokole się go stosuje?',
    '102. Prosze omówic rożnice miedzy HTTP a HTTPS. ',
    '103. W oparciu o jakie dodatkowe protokoły świadczy swoje usługi HTTPS?',
    '104. Prosze omowic zadania jakie realizuje router',
    '105. Prosze omowic klasyfikacje protokołów routingu',
    '106. Jak działa router?',
    '107. Prosze opisac jak działa RIP/RIPv2',
    '108. Prosze opisac jak jest tworzona tablica routingu w ramach działania RIP',
    '109. Prosze omowic jak działa protokół OSPF i do czego sluzy',
    '110. Prosze omowić jak jest tworzona tablica routingu w ramach działania OSPF',
    '111. Prosze opisach technikę zalewania rozgłoszeniami LSA, oraz jak została zoptymalizowana',
    '112. Jak często wymieniane są informacje w ramach protokołu RIP i dlaczego',
    '113. Jak często wymieniane są informacje w ramach protokołu OSPF i dlaczego?',
    '114. Prosze krótko porównać protokoły RIP i OSPF',
    '115. Ile czasu potrzebuje RIP aby uznać że router R.I.P. i jakie to ma skutki?',
    '116. Co to takiego czas zbieżności w protokołach routingu i czy lepiej żeby był długi czy krótki? Dlaczego?',
    '117. Czym jest pętla routingu i jak przeciwdziałać?',
    '118. Prosze omowic wybranego reprezentanta z protokołów stanu łącza',
    '119. Prosze omowic wybranego reprezentanata z protokołów wektora odleglosci',
    '120. Prosze wyjaśnic pojecie obszaru w ujeciu protokolu OSPF i jak komunikują się obszary?',
    '121. Prosze wyjaśnic zadania routerów brzegowych w protokole OSPF i jakie są inne rodzaje routerów  tym protokole?',
    '122. Czym są pakiety LSA w protokole OSPF, do czego służą?',
    '123. Jakie zadania realizuje DR - designated router i jak jest wybierany w ramach protokołu OSPF?',
    '124. Jakie zadania realizuje router ASBR w ramach protokołu OSPF?',
    '125. Jaka funkcja jest realizowana przez NAT?',
    '126. Prosze zaproponować adresacje sieciowa w malej firmie skladajacej się z 2 pięter w biurowcu, na każdym z nich do firmy należą 3 pokoje, w każdym z nich jest 5 stanowisk komputerowych.',
    '127. Prosze zastanowic sie jak powinna wygladac adresacja z pytania 127, aby najszybciej wdrożyć kolejny pokój na jednym z pięter, który będzie typowym “print roomem” z zestawem 3 drukarek i skanerem sieciowym',
    '128. Prosze zastanowić się i zaproponowac jak powinna wygladac adresacja zaproponowana w pytaniu 127 aby najszybciej wprowadzić możliwość pracy na dodatkowym piętrze.', '129. Prosze opisac roznice miedzy SourceNAT i DestinationNAT',
    '130. Prosze sprobowac rozwikłać tajemnice kryjące się za pojęciem: maskarada',
    '131. Prosze omowic znane wady adresacji IPv4 bedace motorem do opracowania IPv6',
    '132. Prosze omowic jak wyglada adresacja IPv6',
    '133. Prosze porównac IPv4 i IPv6',
    '134. czym jest znany z IPv6 “Hop limit” i z czym można go porównać?',
    '135. prosze omowic znane uproszczenia zapisu adresacji IPv6',
    '136. Prosze wyjasnic skad wziac identyfikator hosta w IPv6 i co jeszcze będzie potrzebne zeby miec pelny adres?',
    '137. Prosze omowic sposoby komunikacji w ramach IPv6 (unicast, multicast, anycast)',
    '138. prosze omowic sposoby dynamiczne sposoby konfiguracji stosowane w IPv6',
    '139. Jakiego rodzaju informacji nalezy sie spodziewac w tzw. logach audytowych?',
    '140. Prosze opisac jaki jest cel ataku typu DoS',
    '141. Prosze spróbować opisac roznice miedzy atakami typu DDoS a DoS',
    '142. Prosze opisac jak może przebiegać atak polegający na tzw. SYN flooding',
    '143. Prosze opisac jak można przeciążać atakowany system',
]

nieogar.innerHTML = pytania.length
ogar.innerHTML = indeksy.length
    procent.innerText = ((indeksy.length/pytania.length) * 100).toFixed(2) + "%";

let forwardo = 0;
let isPlaying = false

let currentIndex = 0;

btn.addEventListener("click", () => {
    if (pytania.length === indeksy.length) return alert("Ni ma chuja, że ktoś się tego wszystkiego nauczył XD kłamiesz zwyczajnie, wiesz o tym? Oszukujesz samego siebie, nikt inny Ciebie nie sprawdza")
    if(!isFirst) {
        btn.classList.add("clicked")
    }
    git.classList.add("mam")
    btn.classList.add("hide")
    if (isPlaying) return
    audio.currentTime = 0
    audio.pause()
    isPlaying = true
    i = 100
    span.innerText = "0%"
    pytanie.innerText = ""
    subpasek.style = `transform: translateX(-${i}%)`

    audio.play()
    setTimeout(() => {
        forward.classList.remove("none")
        const interval = setInterval(() => {
            i--;
            span.innerText = `${100 - i}%`
            subpasek.style = `transform: translateX(-${i}%)`
            if (i === 0 || forwardo === 1) {
                i = 0
                if (forwardo === 1) {
                    currentIndex = getRandomInt(pytania.length)
                    while(indeksy.includes(currentIndex)) currentIndex = getRandomInt(pytania.length)
                    pytanie.innerText = pytania[currentIndex]
                    audio.currentTime = 0
                    audio.pause()
                    span.innerText = `${100 - i}%`
                    subpasek.style = `transform: translateX(-${i}%)`
                    isPlaying = false
                }
                    isClicked2 = true;

                clearInterval(interval)

                btn.classList.remove("hide")
                git.classList.remove("mam")
                forward.classList.add("none")
                forwardo = 0
                isPlaying = false
            }
           
            currentIndex = getRandomInt(pytania.length)
            while(indeksy.includes(currentIndex)) currentIndex = getRandomInt(pytania.length)
            pytanie.innerText = pytania[currentIndex]

        }, 60)
    }, 3300)
})

forward.addEventListener("click", ()=> {
    forwardo = 1
    console.log("clicked");
    forward.classList.add("none")
})


git.addEventListener("click", () => {
    if( isClicked2 === true){
    indeksy.push(currentIndex);
    setLocalStorage()
    addLI(currentIndex)
         isClicked2 = false;
    git.classList.add("mam")}
})


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reset() {
    indeksy.length = 0;
    setLocalStorage()
}

const ul = document.querySelector("ul")

function addLI(id) {
    const li = document.createElement("li")
    li.innerHTML = pytania[id];
    ul.appendChild(li)

    li.addEventListener("click", () => {
        toDelete = confirm("Usunąć?")
        if(toDelete) {
            indeksy.splice( indeksy.indexOf(id), 1);
            setLocalStorage()
            li.remove()
        }
        
    })
}

indeksy.forEach(element => {
    addLI(element)
});
