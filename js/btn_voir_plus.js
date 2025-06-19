// Configuration
const PRODUCTS_PER_LOAD = 6;  // Nombre de produits à afficher par chargement

// Sélection des éléments du DOM
const plusProduits = document.querySelectorAll('.plusProduits');
const btnPlusProduits = document.getElementById('button_produit');

// Variables de contrôle
let currentIndex = 0;

function showMoreProducts() {
    const start = currentIndex;
    const end = Math.min(currentIndex + PRODUCTS_PER_LOAD, plusProduits.length);
    
    for (let i = start; i < end; i++) {
        plusProduits[i].classList.remove('hidden');
    }
    
    currentIndex = end;
    
    if (currentIndex >= plusProduits.length) {
        btnPlusProduits.style.display = 'none';
    }
}

if (btnPlusProduits) {
    btnPlusProduits.addEventListener('click', showMoreProducts);
}