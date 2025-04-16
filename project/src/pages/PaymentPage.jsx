import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import OrderItem from "../components/OrderItem";
import Checkbox from "../components/Checkbox";
import { setIsCustomPaid } from "../slices/cartSlice";
import {
  selectUnpaidOrderedTotal,
  setRemainingAmount,
  markItemsPaid,
} from "../slices/cartSlice";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderedItems = useSelector((state) => state.cart.orderedItems);

  const unpaidItems = useMemo(
    () => orderedItems.filter((it) => !it.paid),
    [orderedItems]
  );

  const remainingAmount = useSelector((state) => state.cart.remainingAmount);

  const [selectedItems, setSelectedItems] = useState(
    unpaidItems.map((it) => it.id)
  );

  useEffect(() => {
    setSelectedItems(unpaidItems.map((it) => it.id));
  }, [unpaidItems]);

  const [customAmount, setCustomAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const isPaidByCustom = useSelector((state) => state.cart.isCustomPaid);
  const [isCustomAmount, setIsCustomAmount] = useState(isPaidByCustom);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const toggleItemSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  useEffect(() => {
    setCustomAmount(remainingAmount);
  }, [isCustomAmount]);
  /* update displayed amount whenever choices change */
  useEffect(() => {
    let error = "";
    let value = 0;

    if (isCustomAmount) {
      if (customAmount === "") {
        error = "";
      } else if (customAmount > remainingAmount) {
        error = `Amount cannot exceed ${remainingAmount}€`;
      } else {
        value = Number(customAmount);
      }
    } else if (selectedItems.length) {
      value = selectedItems.reduce((sum, id) => {
        const it = unpaidItems.find((i) => i.id === id);
        return it ? sum + it.price * it.count : sum;
      }, 0);
    }

    setAmountError(error);
    setSelectedAmount(value);
  }, [
    isCustomAmount,
    customAmount,
    selectedItems,
    unpaidItems,
    remainingAmount,
  ]);

  /* ---------------- PAYMENT BUTTON ---------------- */
  const handlePayment = () => {
    if (selectedAmount === 0 && !amountError) {
      setAmountError("Please write or select an amount to pay.");
      return;
    }
    if (isCustomAmount) {
      dispatch(setIsCustomPaid(true));
      // setIsPaidByCustom(true);
    }
    /* debit from remaining */

    dispatch(setRemainingAmount(remainingAmount - selectedAmount));

    /* if paying exact items (not custom), mark them as paid */
    if (!isCustomAmount && selectedItems.length > 0) {
      dispatch(markItemsPaid(selectedItems));
      setSelectedItems([]); // reset local state
    }

    /* if balance cleared, mark everything + go to rating */
    if (remainingAmount - selectedAmount === 0) {
      dispatch(setIsCustomPaid(false));
      localStorage.setItem("custom", JSON.stringify(false));
      localStorage.setItem("remaining", JSON.stringify(0));

      const allIds = unpaidItems.map((it) => it.id);
      if (allIds.length) dispatch(markItemsPaid(allIds));
      navigate("/rating");
    }
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div className="text-dark">
      <h1 className="text-3xl font-bold font-title text-center mt-5 mb-6">
        My Order
      </h1>

      {/* choose‑items vs custom‑amount toggle */}
      {
        <div
          className={`${
            isPaidByCustom ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <div className="px-4 mb-4">
            <label className="flex items-center justify-center text-dark text-lg font-medium mb-2">
              <Checkbox
                disabled={isPaidByCustom}
                checked={!isCustomAmount}
                onChange={() => setIsCustomAmount(!isCustomAmount)}
              />
              Choose the item that you want to pay
            </label>
          </div>
          <div className="border-t border-1 rounded border-light-dark mx-4 mb-4"></div>
          {/* list of still‑unpaid items */}
          <ul className="mb-4">
            {unpaidItems.length ? (
              unpaidItems.map((it) => (
                <OrderItem
                  key={it.id}
                  item={it}
                  isSelected={!isCustomAmount && selectedItems.includes(it.id)}
                  onToggleSelect={toggleItemSelection}
                />
              ))
            ) : (
              <p className="text-center text-light-dark py-4">
                All items paid – thank you!
              </p>
            )}
          </ul>{" "}
        </div>
      }

      <div className="border-t border-1 rounded border-light-dark mx-4 mb-4"></div>

      {/* custom‑amount box */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between">
          <label className="flex items-center text-dark">
            <Checkbox
              checked={!isPaidByCustom ? isCustomAmount : true}
              onChange={
                !isPaidByCustom
                  ? () => setIsCustomAmount(!isCustomAmount)
                  : () => setIsCustomAmount(true)
              }
              className="mr-2"
            />
            <span>Or customize amount</span>
          </label>
          <input
            type="number"
            className={`focus:outline-none focus:ring-1 focus:ring-red border-[2px] rounded-md px-2 py-1 w-20 text-center ${
              isCustomAmount ? "border-dark" : "border-light-dark"
            }`}
            disabled={!isCustomAmount}
            value={isCustomAmount ? customAmount : ""}
            onChange={(e) =>
              setCustomAmount(
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
            max={remainingAmount}
            min={0}
            placeholder="0€"
          />
        </div>
        {amountError && (
          <div className="relative">
            <p className="text-red text-sm mt-1 text-right absolute top-0 right-0 z-50 ">
              *{amountError}
            </p>
          </div>
        )}
      </div>

      {/* totals */}
      <div className="flex justify-between ml-4 mr-4 text-lg font-bold mb-4">
        <span className="font-title">Total left:</span>
        <span className="font-body">{remainingAmount}€</span>
      </div>
      <div className="flex justify-between ml-4 mr-4 text-lg font-bold mb-20">
        <span className="font-title">Selected amount:</span>
        <span className="font-body">{selectedAmount}€</span>
      </div>

      {/* pay button */}
      <div className="fixed max-w-md bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 px-4">
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
