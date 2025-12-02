// Highlight a variable, line, or entire code block then hit Command + .
// to open the Quick Fix menu

const randomPercentage = Math.random() * 100;
const randomPercentageString = `${randomPercentage.toFixed(2)}%`;

const func = () => {
  // Refactor this to be its own function
  const randomPercentage = randomPercentageString;

  console.log(randomPercentage);
};
