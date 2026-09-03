// *2. Create a component Cart.tsx that accepts an itemCount (number) prop and uses && to show a 'Checkout' button only when itemCount is greater than 0.

import { useState } from "react";

export default function Cart() {
  const [itemCount, setItemCount] = useState(0);

  function handleCount() {
    setItemCount(itemCount + 1);
  }

  return (
    <div>
      <h2>Cart Item</h2>
      <p>Item Count: {itemCount}</p>
      {itemCount > 0 && <button>Checkout</button>}
      <button onClick={handleCount}>add item</button>
    </div>
  );
}
