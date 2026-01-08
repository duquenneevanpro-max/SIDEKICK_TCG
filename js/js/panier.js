let panier = [];

function ajouterAuPanier(produitId) {
  const produit = produits.find(p => p.id === produitId);
  if(!produit) return;
  panier.push(produit);
  alert(produit.nom + " ajouté au panier !");
}

function commander() {
  if(panier.length === 0) {
    alert("Votre panier est vide !");
    return;
  }

  let message = "Commande SIDEKICK :%0D%0A";
  panier.forEach(p => {
    message += `- ${p.nom} : ${p.prix}€%0D%0A`;
  });

  window.location.href = "mailto:contact@sidekick-tcg.fr?subject=Commande SIDEKICK&body=" + message;
}
