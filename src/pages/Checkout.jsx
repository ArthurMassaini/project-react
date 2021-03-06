import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

function Checkout() {
  // const [getState, setState] = useState();
  const [getSubTotal, setSubTotal] = useState();
  const [getFrete, setFrete] = useState();
  const [getTotal, setTotal] = useState();

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem('cart')) || [];

    const calculaValores = () => {
      let subTotal = 0;
      let frete = 0;
      let total;
      games.forEach((game) => {
        subTotal += game.price * game.quantidade;
        frete += 10 * game.quantidade;
      });
      if (subTotal < 250) {
        total = frete + subTotal;
      } else {
        total = subTotal;
      }
      setSubTotal(subTotal.toFixed(2));
      setFrete(frete.toFixed(2));
      setTotal(total.toFixed(2));
    };
    calculaValores();
  }, []);

  return (
    <main>
      <Header type="checkout" />
      <section className="checkout">
        <h1>Subtotal: R$ {getSubTotal}</h1>
        {getSubTotal > 250.0 ? (
          <div>
            <h1>Frete: R$ 0</h1>
            <span>O Frete é grátis para compras acima de 250,00 reais!</span>
          </div>
        ) : (
          <h1>Frete: R$ {getFrete}</h1>
        )}
        <h1>Total: R$ {getTotal}</h1>
      </section>
    </main>
  );
}

export default Checkout;
