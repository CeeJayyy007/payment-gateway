export const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export const years = Array.from({ length: 10 }, (_, i) => ({
  value: `${new Date().getFullYear() + i}`,
  label: `${new Date().getFullYear() + i}`,
}));

export const cardTypes = [
  { type: "visa", pattern: /^4/ },
  { type: "mastercard", pattern: /^5[1-5]/ },
  { type: "amex", pattern: /^3[47]/ },
  { type: "discover", pattern: /^6(?:011|5)/ },
];

export const banksList = [
  { value: "CIBC", label: "CIBC" },
  { value: "TD Bank", label: "TD Bank" },
  { value: "BMO", label: "BMO" },
  { value: "Scotiabank", label: "Scotiabank" },
  { value: "RBC", label: "RBC" },
];
