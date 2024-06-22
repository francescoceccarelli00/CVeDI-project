let prevScrollpos = window.scrollY - 126; // Inizializzo prevScrollpos con 126px già scrollati
let scrolledPastInitialHeight = false; // Flag per indicare se abbiamo superato i primi 126px

window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    // Verifica se siamo tornati in cima alla pagina
    if (currentScrollPos < 63) {
        document.getElementById("navbar").style.top = "0";
    } else if (scrolledPastInitialHeight) {
        // Solo se abbiamo superato i primi 126px di altezza, gestiamo la barra di navigazione
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-126px";
        }
        prevScrollpos = currentScrollPos;
    } else {
        // Se non abbiamo ancora superato i primi 126px, non gestiamo la barra di navigazione
        prevScrollpos = currentScrollPos;
    }

    // Verifica se abbiamo superato i primi 126px di altezza
    if (!scrolledPastInitialHeight && currentScrollPos > 63) {
        scrolledPastInitialHeight = true;
        prevScrollpos = currentScrollPos; // Aggiorniamo prevScrollpos alla nuova posizione
    }
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
}); 

VanillaTilt.init(document.querySelector(".image-key-hero"),{
    max: 15,
    speed: 1500
}); 


//CHIAMANDO VANILLA TILT SI DA L'EFFETTO ALL'ELEMENTO CON LA CLASSE SELEZIONATA

// Quando un bottone di apertura viene cliccato
document.querySelectorAll('[class="polaroid-hover workit"]').forEach(function(button) {
    button.addEventListener('click', function() {
        let target = document.querySelector(this.getAttribute('data-bs-target')); // Ottieni l'elemento target

        // Chiudi tutti gli altri elementi di collapse tranne quello attualmente aperto
        document.querySelectorAll('.collapse').forEach(function(collapse) {
            if (collapse !== target && collapse.classList.contains('show')) {
                collapse.classList.remove('show'); // Rimuovi la classe 'show' per chiudere l'elemento
            }
        });
    });
});

