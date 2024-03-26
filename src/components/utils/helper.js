export const handleCardNumberChange = (e, setCardType, setCardNumber) => {
  const input = e.target.value.replace(/\D/g, "");
  let formattedInput = "";

  for (let i = 0; i < input.length; i++) {
    formattedInput += input[i];
    if ((i + 1) % 4 === 0 && i !== input.length - 1) {
      formattedInput += "-";
    }
  }

  setCardNumber(formattedInput.slice(0, 19));
  setCardType(detectCardType(formattedInput));
};

const detectCardType = (input) => {
  // Regular expressions for detecting card types
  const cardTypes = [
    { type: "visa", pattern: /^4/ },
    { type: "mastercard", pattern: /^5[1-5]/ },
    { type: "amex", pattern: /^3[47]/ },
    { type: "discover", pattern: /^6(?:011|5)/ },
  ];

  for (const card of cardTypes) {
    if (input.match(card.pattern)) {
      return card.type;
    }
  }

  return null;
};
