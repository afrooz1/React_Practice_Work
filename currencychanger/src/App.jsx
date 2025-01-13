import { useState } from "react";
import Input from "./components/Input";
import UseCurrencyinfo from "./hooks/UseCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0); // Default to 0
  const [from, setFrom] = useState("usd"); // Default to a valid currency
  const [to, setTo] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState("");

  const { data: currencyInfo, loading, error } = UseCurrencyinfo(from);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500"
    >
      <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-center text-2xl font-bold text-blue-600 mb-4">
          Currency Converter
        </h1>
        {error && (
          <p className="text-red-500 text-center mb-4">Error: {error}</p>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <Input
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(value) => setAmount(value)}
          />

          {/* Swap Button */}
          <div className="text-center my-4">
            <button
              type="button"
              onClick={swap}
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <Input
            label="To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            AmountDisable={true}
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-4"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
