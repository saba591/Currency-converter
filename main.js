import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    { name: "To",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.To];
let Amount = user_answer.amount;
let baseAmount = Amount / fromAmount;
let covertedAmount = baseAmount * toAmount;
console.log(Math.round(covertedAmount));
