const prompt = require("prompt-sync")();

const welcomeAndGetName = () => {
  console.log("Hello there!");
  const usersName = prompt("Please enter your name: ");
  const trimmed = usersName.trim();
  console.log(`Thank you, ${trimmed}.`);
  return trimmed;
};

const showOptions = () => {
  console.log("Here are your options:");
  console.log("1 - play a guessing game");
  console.log("2 - words of wisdom");
  console.log("3 - cheer you on!");
  console.log("Any other key - exit");
};

const getUserChoice = () => {
  const userChoice = prompt("Your selection: ");
  const trimmed = userChoice.trim();
  const userNumber = Number(trimmed);
  return userNumber;
};

const goodBye = (usersName) => {
  const userAnswer = prompt(
    "Are you sure you'd like to quit? (1 - yes / 2 - no): "
  );
  if (userAnswer == "1") {
    console.log(`Ok then. Have a nice day, ${usersName}`);
  } else {
    console.log("Alright, let's continue then.");
    showOptions();
    getUserChoice();
  }
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const handleGuessingGame = (usersName) => {
  console.log(`Ok ${usersName}, let's set a range to guess from.`);
  const userMin = Number(prompt("Pick a guessing range starting number: "));
  const userMax = Number(prompt("Pick a guessing range ending number: "));
  const computerNumber = getRandomNumber(userMin, userMax);
  const usersGuess = Number(
    prompt(
      `Ok ${usersName}, now pick a number between ${userMin} and ${userMax}.`
    )
  );
  if (computerNumber === usersGuess) {
    console.log("That is a match! You win!");
  } else {
    console.log(`The number was ${computerNumber}. Better luck next time.`);
  }
};

const handleWordsOfWisdom = () => {
  const wisdom = [
    "Be kind.",
    "Stay humble.",
    "Take risks.",
    "Work hard.",
    "Be patient.",
    "Stay focused.",
    "Keep learning.",
    "Love deeply.",
    "Think positively.",
    "Embrace change.",
  ];
  let randomNumber = getRandomNumber(0, wisdom.length);
  console.log(wisdom[randomNumber]);
};

const handleCheers = () => {
  const affirmations = [
    "I am strong.",
    "I am capable.",
    "I am worthy.",
    "I am loved.",
    "I am enough.",
    "I am resilient.",
    "I am confident.",
    "I am positive.",
    "I am fearless.",
    "I am growing.",
  ];

  let randomNumber = getRandomNumber(0, affirmations.length);
  console.log(affirmations[randomNumber]);
};

const main = () => {
  const usersName = welcomeAndGetName();
  showOptions();
  const choice = getUserChoice();
  if (choice == 1 || choice == 2 || choice == 3) {
    console.log(`${choice} is a great choice!`);
  }

  switch (choice) {
    case 1:
      handleGuessingGame(usersName);
      break;
    case 2:
      handleWordsOfWisdom();
      break;
    case 3:
      handleCheers(choice);
      break;
    default:
      goodBye(usersName);
  }
};

main();
