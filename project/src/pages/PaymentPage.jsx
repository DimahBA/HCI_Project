import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import OrderItem from "../components/OrderItem";
import Checkbox from "../components/Checkbox";


const PaymentPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  // Calculate total price from cart items
  let total = 0;
  cartItems.map((item) => (total = +total + item.price * item.count));

  // Payment options state
  const [selectedItems, setSelectedItems] = useState([]);
  const [customAmount, setCustomAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  // Toggle selection for a menu item
  const toggleItemSelection = (id) => {
    // Clear custom amount when selecting an item
    if (customAmount !== "") {
      setCustomAmount("");
      setAmountError("");
    }

    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  
  // Handle custom amount change
  const handleCustomAmountChange = (e) => {
    // Allow only numeric input
    const value = e.target.value.replace(/[^0-9]/g, '');
    
    // Validate the amount
    if (value) {
      const numValue = parseInt(value, 10);
      
      if (numValue <= 0) {
        setAmountError("Amount must be greater than 0");
      } else if (numValue > total) {
        setAmountError(`Amount cannot exceed ${total}€`);
      } else {
        setAmountError("");
      }
    } else {
      setAmountError("");
    }
    
    setCustomAmount(value);
  };

  // Calculate total based on selections
  const calculateTotal = () => {
    if (customAmount) {
      return parseInt(customAmount);
    }

    let calculatedTotal = 0;
    selectedItems.forEach(id => {
      const item = cartItems.find(item => item.id === id);
      if (item) {
        calculatedTotal += item.price * item.count;
      }
    });

    return calculatedTotal || total;
  };

  // Handle payment process
  const handlePayment = () => {
    // Validate before payment
    if (customAmount && (parseInt(customAmount) <= 0 || parseInt(customAmount) > total)) {
      return; // Don't proceed with payment if custom amount is invalid
    }
    
    // Here you would implement actual payment processing
    alert("Payment successful!");
    // Navigate to confirmation page or home
    navigate("/");
  };

  return (
    <>
      <h1 className="text-4xl font-bold font-title text-center mt-5 mb-6">
        My Order
      </h1>

      <div className="px-4 mb-4">
        <label className="flex items-center text-dark text-lg font-medium mb-2">
          <Checkbox
            checked={customAmount === ""}
            onChange={() => {
              // If this box is being unchecked
              if (customAmount === "") {
                setCustomAmount("0");
                setSelectedItems([]);
              } else {
                // If this box is being checked
                setCustomAmount("");
                setAmountError("");
              }
            }}
            className="mr-2"
          />
          Choose the item that you want to pay
        </label>
      </div>

      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4"></div>

      {/* Menu Items Selection with OrderItem component */}
      <ul className="mb-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <OrderItem
              key={item.id}
              item={item}
              isSelected={selectedItems.includes(item.id)}
              onToggleSelect={toggleItemSelection}
            />
          ))
        ) : (
          <p className="text-center text-light-dark py-4">Your cart is empty</p>
        )}
      </ul>

      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4"></div>

      {/* Custom Amount Section */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between">
          <label className="flex items-center text-dark">
            <Checkbox
              checked={customAmount !== ""}
              onChange={() => {
                if (customAmount) {
                  setCustomAmount("");
                  setAmountError("");
                } else {
                  setCustomAmount("0");
                  setSelectedItems([]);
                }
              }}
              className="mr-2"
            />
            <span>Or customize amount</span>
          </label>
          <input
            type="text"
            className={`border ${amountError ? 'border-red' : 'border-light-dark'} rounded-md px-2 py-1 w-24 text-right`}
            value={customAmount ? `${customAmount}` : ""}
            onChange={handleCustomAmountChange}
            placeholder="0€"
            disabled={customAmount === ""}
            onClick={() => {
              if (customAmount === "") {
                setCustomAmount("0");
                setSelectedItems([]);
              }
            }}
          />
        </div>
        {amountError && (
          <p className="text-red text-sm mt-1 text-right">{amountError}</p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between ml-6 mr-6 text-lg font-bold mb-16">
        <span className="font-title">Total:</span>
        <span className="font-body">{calculateTotal()}€</span>
      </div>

      {/* Pay Button */}
      <div className="fixed w-full max-w-md bottom-24 left-1/2 transform -translate-x-1/2 flex justify-center px-4 mb-4">
        <Button 
          onClick={() => navigate("/rating")}
          disabled={customAmount !== "" && amountError !== ""}
        >
          Pay
        </Button>
      </div>
    </>
  );
};

export default PaymentPage;