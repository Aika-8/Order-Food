import React, { useState } from "react";
import "./Main.css";
import MealsPhoto from "../assets/images/meals.png";
import Adding from "../assets/images/Adding.png";
import { FormInput } from "./UI/FormInput";
import { Button } from "./UI/Button";
export const Main = ({ addFood }) => {
  const [amounts, setAmounts] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const menuItems = [
    {
      id: 1,
      title: "Sushi",
      price: 22.99,
    },
    {
      id: 2,
      title: "Schnitzel",
      price: 16.0,
    },
    {
      id: 3,
      title: "Barbecue Burger",
      price: 12.99,
    },
    {
      id: 4,
      title: "Green Bowl",
      price: 19.99,
    },
  ];
  const handleAmountChange = (id, value) => {
    if (value === "" || value === "0") {
      setAmounts((prev) => ({ ...prev, [id]: null }));
    } else {
      setAmounts((prev) => ({
        ...prev,
        [id]: parseInt(value, 10),
      }));
    }
  };
  const handleAddFood = (item) => {
    if (amounts[item.id] > 0) {
      addFood({ ...item, amount: amounts[item.id] });
    }
  };
  return (
    <>
      <main>
        <img src={MealsPhoto} alt="mealse" className="photoMeals" />
        <div className="description">
          <h2 className="title">Delicious Food, Delivered To You</h2>
          <p className="p1">
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p className="p1">
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by  experienced chefs!
          </p>
        </div>
        <section className="menu">
          {menuItems.map((item) => (
            <div className="title-cost" key={item.id}>
              <div className="titleDiv">
                <p className="titleOfFood">{item.title}</p>
                <p className="structure">Finest fish and veggies</p>
                <p className="cost">${item.price}</p>
              </div>
              <div className="amountBrn">
                <FormInput
                  lableText="Amount"
                  inputType="number"
                  id={`amount-${item.id}`}
                  value={amounts[item.id]}
                  onChange={(e) => handleAmountChange(item.id, e.target.value)}
                />
                <Button variant={"add"} onClick={() => handleAddFood(item)}>
                  <img src={Adding} alt="add" className="adding" /> Add
                </Button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
