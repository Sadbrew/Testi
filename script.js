const otsikkoElementti = document.getElementById("otsikko");
const muutaNappi = document.getElementById("muutaNappi");

muutaNappi.addEventListener("click", () => {

    const uusiOtsikko = prompt("syötä uusi otsikko:");

    if (uusiOtsikko && uusiOtsikko.trim() !== "") {
        otsikkoElementti.textContent = uusiOtsikko;
    } else {
        alert("syötä voimassa oleva otsikko.");
    }
});