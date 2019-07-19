// 2 - Il software deve chiedere all’ utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire“ Ciao < nome > “, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;
var askname = prompt("inserisci il tuo nome:");
var asksex = prompt("inserisci il tuo sesso:");
var elemento = document.getElementById("stampa");

if (asksex == "uomo") {

    elemento.innerHTML = "Ciao " + askname + ",benvenuto!";
    elemento.style.color = "blue";
} else
if (asksex == "donna") {
    elemento.innerHTML = "Ciao " + askname + ",benvenuto!";
    elemento.style.color = "red";
};