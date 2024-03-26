import React from "react";
import { Link, useLocation } from "react-router-dom"; // If using React Router
import { CheckCircledIcon } from "@radix-ui/react-icons"; // Import the CheckIcon component from Radix Icons

const SuccessPage = () => {
  // Get the transaction details from the payment gateway
  const location = useLocation();
  const data = location.state;

  const transactionDetails = {
    amount: 100,
    currency: "USD",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CheckCircledIcon className="text-green-500 w-16 h-16 mb-6" />{" "}
      <h1 className="text-3xl font-semibold text-center mb-4">
        Transaction Successful!
      </h1>{" "}
      <p className="text-lg text-center mb-4">
        Your payment of {transactionDetails.amount}{" "}
        {transactionDetails.currency} has been processed successfully.
      </p>{" "}
      <p className="text-lg text-center mb-4">Thank you for your purchase!</p>{" "}
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        Return to Home
      </Link>{" "}
      <div className="mt-[50px] flex flex-col items-center justify-center text-xs">
        <p>You submitted the following values:</p>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 text-xs">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default SuccessPage;
