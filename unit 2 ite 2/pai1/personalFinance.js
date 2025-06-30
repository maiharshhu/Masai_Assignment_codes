const transactions = [
  { id: 1, type: "income", category: "Salary", amount: 5000, date: "2024-01-10" },
  { id: 2, type: "expense", category: "Groceries", amount: 1200, date: "2024-01-12" },
  { id: 3, type: "expense", category: "Rent", amount: 2000, date: "2024-01-05" },
  { id: 4, type: "income", category: "Freelance", amount: 1500, date: "2024-01-20" },
  { id: 5, type: "expense", category: "Utilities", amount: 500, date: "2024-01-25" }
];

let len = transactions.length
let [
    {type: typ1, category: cat1, amount: amt1 },
    {type: typ2, category: cat2, amount: amt2 },
    {type: typ3, category: cat3, amount: amt3 },
    {type: typ4, category: cat4, amount: amt4 },
    {type: typ5, category: cat5, amount: amt5 },

] = transactions;

let totinc = 0;
let totexp = 0;
transactions.forEach(({type, amount})=>{
    if(type === 'income') totinc+=amount;
    else if(type ==='expense') totexp+=amount;
})

const netBal = totexp+totinc;

const NewArr = transactions.map(({type, category,amount})=> `
${type.charAt(0).toUpperCase()+type.slice(1)}: ${category} - $${amount}`);

const expenseBreakdown = transactions
  .filter(({ type }) => type === "expense")
  .reduce((acc, { category, amount }) => {
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});


console.log(`Total Income: $${totinc}`);
console.log(`Total Expenses: $${totexp}`);
console.log(`Net Balance: $${netBal}`);
console.log("New array of Transactions:", NewArr);
console.log("Expense Breakdown:", expenseBreakdown);