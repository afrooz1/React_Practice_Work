import React, { useId } from "react";

function Input({
  label,
  amount = "", // Ensure the default value is a controlled one
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  AmountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="mb-4">
      <label
        htmlFor={amountInputId}
        className="block text-gray-700 font-medium mb-1"
      >
        {label}
      </label>
      <div className="flex items-center gap-2">
        {/* Amount Input */}
        <input
          id={amountInputId}
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          placeholder="Enter amount"
          disabled={AmountDisable}
          className={`w-2/3 border ${
            AmountDisable ? "bg-gray-100" : "bg-white"
          } rounded-md px-3 py-2 outline-none`}
        />
        {/* Currency Dropdown */}
        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
          className="w-1/3 border bg-white rounded-md px-3 py-2 outline-none"
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
