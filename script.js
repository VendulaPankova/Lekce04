/*

const jmeno = "    Vendula    "
const heslo = "jdfuwgqoůind))@123"

console.log(jmeno)

console.log(jmeno.trim()) //Když se spletu metoda trim mi ořeže mezery

//trim(jmeno) - nelze, pouze kdyspozici jenom na objektech, které jsou reprezentovány datovým řetězcem
// jmeno.trim -//-

console.log(heslo.length) // když bych chtěla znát velikots, počet znaků     

*/

/*

let jmeno = "    Vendula    "
const heslo = "jdfuwgqoůind))@123"
   //          01234 - vezmou se mi první tři indexy
const rodneCislo = "825648/1154"
const telCislo = "756852963"
console.log(jmeno)

jmeno = jmeno.trim()
console.log(jmeno.trim()) 

console.log(heslo.length) 
console.log(jmeno.length) 
// když bych chtěla spočítat znaky ve jmenu, tak se mi počítají i mezery, udělám to tak...jinak to počítá i mezery

const castHesla = heslo.slice(0, 4) // zobrazuji si určityý znaky na určené pozici
console.log(castHesla)

console.log(heslo.indexOf("df"))

const poziceLomitka = rodneCislo.indexOf("/")

console.log(rodneCislo.slice(poziceLomitka +1, poziceLomitka + 5))

console.log(jmeno.toLocaleLowerCase())
console.log(jmeno.toLocaleUpperCase())

console.log(telCislo.padStart(13, "+420"))
console.log(telCislo.padEnd(13, "0")) 

    */

/*

const zprava = `
<h1 class="test">Ahoj Světe</h1>
<p>Tve dnesní štastné číslo je ${Math.floor(Math.random() *1000)}</p>
<p>Tvoje myš je právě na souřadnicích ${100 * 100}</p>

`
document.body.innerHTML += zprava

         */

   /*
const title = "Pán prstenů"

const title2 = ` 
<h1>${title}</h1>
<p>Počet znaků v názvu: ${title.length}</p>
<p>Název filmu převedená na velká písmena: ${title.toLocaleUpperCase()}<p>
<p>Zobrazit 5 prvních písmen ${title.slice(0, 6)}<p>
<p>Zobrazit posledních 5 písmen: ${title.slice(-5)}</p>

` 
const email = prompt("Zadejte svůj email:")
const poziceZavinace = email.indexOf("@")
const uzJmeno = email.slice(0, poziceZavinace)
const domena = email.slice(poziceZavinace + 1)

const parsedEmail = {
    uzJmeno: uzJmeno,
    domena: domena,
}

document.body.innerHTML = `
    <p>E-mail: ${email}</p>
    <p>Uživatelské jméno: ${parsedEmail.uzJmeno}</p>
    <p>Doména: ${parsedEmail.domena}</p>
`
const mesto = prompt("Zadejte město:")
const ulice = prompt("Zadejte svou ulici:")
const cisloPopisne = prompt("Zadejte číslo popisné:")
const postIndex = prompt("Zadejte poštovní směrovací číslo")

const address = `

<address>
    <p>ulice a číslo popisné: ${ulice} ${cisloPopisne}</p>
    <p>Město a poštovní směrovací číslo: ${mesto} ${postIndex}</p>
<address> 

                `
 document.body.innerHTML += address           
 
           */

 //podmínky
     /*
 const vek = 18;
 // V operátorech můžeme mít < <= > >= === !==
 if (vek >= 18) {
     document.body.innerHTML = "<h1>Vítejte na naší webové stránce s nejlepším alkoholem ČR</h1>";
     const kategorie = prompt("Jakou kategorii alkoholu si přeješ? (pivo, víno, tvrdé)").toLowerCase()
 
     if (kategorie === "pivo") {
         document.body.innerHTML += "<p>Máme nejlepší piva, třeba StaroBrno</p>";
     } else if (kategorie === "vino") {
         document.body.innerHTML += "<p>Máme nejlepší červená, bílá, i jiná barevná vína</p>";
     } else if (kategorie === "tvrdé") {
         document.body.innerHTML += "<p>Máme nejlepší Becherovku, odebírá od nás i Zeman</p>";
     } else {
         document.body.innerHTML += "<p>Error 404: Alkohol is not found</p>";
     }
 } else {
     document.body.innerHTML = "<h1>Na tuto stránku nemůžeš vstoupit!</h1>";
 }

           */
 /*
 const vek = 18;
 const pravda = true;
 const nepravda = false;
 
 const pizzerie = {
     pizza1: "Hawaii",
     pizzaRozvazka: true
 };


 
 if (pizzerie.pizzaRozvazka) {
     document.body.innerHTML = "<p>Ano, tuto pizzu rozvážíme</p>";
 }
 
 if (pravda === true) {
     console.log("Prošlo to");
 }
 
 if (pravda) {
     console.log("Prošlo to");
 }
   */

 const pizzerie = {
    pizza1: "Hawaii",
    pizzaRozvazka: true,
};

// Varianta 1
if (pizzerie.pizzaRozvazka) {
    document.body.innerHTML += "<p>Ano, tuto pizzu rozvážíme</p>";
} else {
    document.body.innerHTML += "<p>Ne, tuto pizzu nerozvážíme</p>";
}

// Varianta 2
document.body.innerHTML += pizzerie.pizzaRozvazka 
    ? "<p>Ano, tuto pizzu rozvážíme</p>" 
    : "<p>Ne, tuto pizzu nerozvážíme</p>";
   






