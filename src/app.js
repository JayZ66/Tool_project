
/*
Document est un objet spécial fourni par le navigateur web.
C'est une interface JS qui représente la structure HTML de la page chargée dans le navigateur.
==> On call ça le Document Object Model (DOM)

Si la page est chargée dans le navigateur > Celui-ci génère un objet document qui permet à JS d'intéragir avec la page HTML.
*/

// To be sure that our HTML content is completely loaded.
document.addEventListener("DOMContentLoaded", function() {
    // Select bouton via son id
    const   addBlockButton = document.getElementById("addBlockButton");

    //Select le conteneur où les blocs seront added.
    const container = document.getElementById("container");

    // Add event "click" sur le bouton > pour rendre le bouton interactif, quand le user clique, une action spé (add un bloc) est déclenchée.
    // Add un gestionnaire d'event à addBlockButton() > Ici clique donc on crée un new block
    addBlockButton.addEventListener("click", function() {
        const newBlock = document.createElement("div"); // Crée new div (élément HTML) pour représenter un bloc.
        // document.createElement() > Cette méthode est used pour créer dynamiquement des éléments HTML via JS.

        newBlock.className = "block"; // Attribue la classe CSS "block" au nouveau <div> donc le style

        newBlock.textContent = "New block"; // Définie le texte à display dans le nouveau bloc

        container.appendChild(newBlock); // Add le nouveau bloc (newBlock) comme un child au conteneur (container)
    });
});

/*
addBlockButton.addEventListener => C'est une fonction définie à l'intérieur de document.addEventListener() donc
elle n'est accessible qu'à l'intérieur de cette dernière.
*/