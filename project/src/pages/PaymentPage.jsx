import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import OrderItem from "../components/OrderItem";
import Checkbox from "../components/Checkbox";
import { selectOrderedTotal, setRemainingAmount } from "../slices/cartSlice";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.cart.orderedItems);
  const navigate = useNavigate();
  const total = useSelector(selectOrderedTotal);
  const remainingAmount = useSelector((state) => state.cart.remainingAmount);
  useEffect(() => {
    dispatch(setRemainingAmount(total));
  }, [total]);
  console.log("Remaining Amount", remainingAmount);
  // Payment options state

  // all items pre‑selected:
  const [selectedItems, setSelectedItems] = useState(() =>
    orderedItems.map((item) => item.id)
  );
  const [customAmount, setCustomAmount] = useState(total);
  const [amountError, setAmountError] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  console.log("Selected Amount", selectedAmount);
  const handleChange = (e) => {
    const value = e.target.value;
    // Allow empty string or convert to number
    setCustomAmount(value === "" ? "" : Number(value));
  };
  // Toggle selection for a menu item
  const toggleItemSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  useEffect(() => {
    let nextError = "";
    let nextSelected = 0;

    if (isCustomAmount) {
      if (customAmount === "") {
        nextError = "";
      } else if (customAmount > remainingAmount) {
        nextError = `Amount cannot exceed ${remainingAmount}€`;
      } else {
        nextSelected = Number(customAmount);
      }
    } else if (selectedItems.length) {
      nextSelected = selectedItems.reduce((sum, id) => {
        const item = orderedItems.find((it) => it.id === id);
        return item ? sum + item.price * item.count : sum;
      }, 0);
    }

    setAmountError(nextError);
    setSelectedAmount(nextSelected);
  }, [
    isCustomAmount,
    selectedItems,
    customAmount,
    orderedItems,
    remainingAmount,
  ]);

  // Handle payment process
  const handlePayment = () => {
    if (selectedAmount === remainingAmount) {
      navigate("/rating");
    }
    if (selectedAmount === 0 && !amountError) {
      setAmountError("Please write or select an amount to pay.");
    } else {
      dispatch(setRemainingAmount(remainingAmount - selectedAmount));
    }
  };
  console.log(customAmount);

  return (
    <div className="text-dark">
      <h1 className="text-3xl  font-bold font-title text-center mt-5 mb-6">
        My Order
      </h1>

      <div className="px-4 mb-4">
        <label className="flex items-center justify-center text-dark text-lg font-medium mb-2">
          <Checkbox
            checked={!isCustomAmount}
            onChange={() => {
              setIsCustomAmount(!isCustomAmount);
            }}
          />
          Choose the item that you want to pay
        </label>
      </div>

      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4"></div>

      {/* Menu Items Selection with OrderItem component */}
      <ul className="mb-4">
        {orderedItems.length > 0 ? (
          orderedItems.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              isSelected={!isCustomAmount && selectedItems.includes(item.id)}
              onToggleSelect={!isCustomAmount && toggleItemSelection}
            />
          ))
        ) : (
          <p className="text-center text-light-dark py-4">
            Please order something!
          </p>
        )}
      </ul>

      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4"></div>

      {/* Custom Amount Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between">
          <label className="flex items-center text-dark">
            <Checkbox
              checked={isCustomAmount}
              onChange={() => {
                setIsCustomAmount(!isCustomAmount);
              }}
              className="mr-2"
            />
            <span>Or customize amount</span>
          </label>
          <input
            type="number"
            className={`focus:outline-none focus:ring-1 focus:ring-red border-[2px]  rounded-md px-2 py-1 w-20 text-center ${
              isCustomAmount ? "border-dark" : "border-light-dark"
            }`}
            disabled={!isCustomAmount}
            value={isCustomAmount ? customAmount : ""}
            onChange={handleChange}
            max={total}
            min={0}
            placeholder="0€"
          />
        </div>
        {amountError && (
          <div className="relative">
            <p className="text-red z-40 absolute top-0 right-0 text-sm mt-1 text-right">
              *{amountError}
            </p>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between ml-4 mr-4 text-lg font-bold mb-4">
        <span className="font-title">Total:</span>
        <span className="font-body">{remainingAmount}€</span>
      </div>
      <div className="flex justify-between ml-4 mr-4 text-lg font-bold mb-20">
        <span className="font-title">Selected amount:</span>
        <span className="font-body">{selectedAmount}€</span>
      </div>
      {/* Pay Button */}
      <div className="fixed   max-w-md  bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 px-4 ">
        <Button
          onClick={handlePayment}
          disabled={selectedAmount !== "" && amountError !== ""}
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

export default PaymentPage;
