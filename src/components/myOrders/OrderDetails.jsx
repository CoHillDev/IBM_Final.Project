// Write all the code here

import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Détails de la commande</h1>
        <div>
          <h2>Livraison</h2>
          <p>
            <b>Adresse:</b> sjda 12-32ss dsad
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            <b>Nom:</b> Stuart
          </p>
          <p>
            <b>N° de téléphone:</b> 2131232123
          </p>
        </div>
        <div>
          <h2>État</h2>
          <p>
            <b>Etat de la commande:</b> En cours de traitement
          </p>
          <p>
            <b>Déposée le:</b> samedi 23 février 2002
          </p>
          <p>
            <b>Délivré le:</b> dimanche 23 février 2003
          </p>
        </div>
        <div>
          <h2>Paiement</h2>
          <p>
            <b>Mode de paiement:</b> CB
          </p>
          <p>
            <b>Référence du paiement:</b> #asdasdsadsad
          </p>
          <p>
            <b>Payé le:</b> dimanche 23 février 2003
          </p>
        </div>
        <div>
          <h2>Montant</h2>
          <p>
            <b>Sous-total:</b> $2132
          </p>
          <p>
            <b>Frais de livraison:</b> $200
          </p>
          <p>
            <b>TVA:</b> $232
          </p>
          <p>
            <b>Montant total:</b> ${232 + 200 + 2132}
          </p>
        </div>
        <article>
          <h2>Articles commandés</h2>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>12</span> x <span>$232</span>
            </div>
          </div>
          <div>
            <h4>Vegan Cheese Burger</h4>
            <div>
              <span>10</span> x <span>$500</span>
            </div>
          </div>
          <div>
            <h4>Cheese Burger + Fries</h4>
            <div>
              <span>10</span> x <span>$1800</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sous-total</h4>
            <div style={{ fontWeight: 800 }}>${2132}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;

