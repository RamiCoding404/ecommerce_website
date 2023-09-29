import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemAmount, Setitemamount] = useState(0);

  const [Total, Settotal] = useState(0);

  useEffect(() => {
    const Total = cart.reduce((accumlator, currentItem) => {
      return accumlator + currentItem.price * currentItem.amount;
    }, 0);
    Settotal(Total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumlator, currentItem) => {
        return accumlator + currentItem.amount;
      }, 0);
      Setitemamount(amount);
    }
  }, [cart]);

  const addtocart = (product, id) => {
    const newitem = { ...product, amount: 1 };
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newcart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newcart);
    } else {
      setCart([...cart, newitem]);
    }
  };

  const removefromcart = (id) => {
    const newcart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newcart);
  };
  const clearcart = () => {
    setCart([]);
  };

  const increaseamount = (id) => {
    const cartitem = cart.find((item) => item.id === id);
    addtocart(cartitem, id);
  };

  const decreaseamount = (id) => {
    const cartitem = cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newcart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newcart);
    }
    if (cartitem.amount < 2) {
      removefromcart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addtocart,
        removefromcart,
        clearcart,
        increaseamount,
        decreaseamount,
        itemAmount,
        Total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
