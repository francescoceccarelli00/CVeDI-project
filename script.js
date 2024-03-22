let prevScrollpos = window.scrollY; // GESTIONE NAVBAR ALLO SCROLL 
    window.onscroll = function() {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > (currentScrollPos)) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-126px"; /* Altezza della barra di navigazione */
        }
        prevScrollpos = currentScrollPos;
    };

VanillaTilt.init(document.querySelector(".quill"),{
    max: 10,
	speed: 1000
});

VanillaTilt.init(document.querySelector(".envelope"),{
    max: 15,
    speed: 1500
});

VanillaTilt.init(document.querySelector(".glass"),{
    max: 15,
    speed: 1500
}); //CHIAMANDO VANILLA TILT SI DA L'EFFETTO ALL'ELEMENTO CON LA CLASSE SELEZIONATA
