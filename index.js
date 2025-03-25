let lista = $(".lista");
let clicca = $(".clicca");
let data = $(".data");
let lang = $(".lang");
let language = 0;

lang.on("click", ()=> {
    if (language === 0) {
        language = 1;
        lista.html("Lista Nozze");
        data.html("14 Settembre 2025")
        lang.html("english");
        clicca.html("Clicca se non puoi scansionare")
    } else {
        language = 0;
        lista.html("Wedding List");
        data.html("September 14th")
        lang.html("italiano");
        clicca.html("Click if you can't scan")
    }
})
