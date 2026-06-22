import { useState } from 'react'

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("food");
  const [errors, setErrors] = useState({ description: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    const newErrors = { description: "", amount: "" };

    if (!description.trim()) newErrors.description = "Description is required";
    if (isNaN(parsedAmount) || parsedAmount <= 0) newErrors.amount = "Enter a valid amount greater than 0";

    if (newErrors.description || newErrors.amount) {
      setErrors(newErrors);
      return;
    }

    onAdd({
      id: Date.now(),
      description,
      amount: parsedAmount,
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    });

    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("food");
    setErrors({ description: "", amount: "" });
  };

  const errorList = [errors.description, errors.amount].filter(Boolean);

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      {errorList.length > 0 && (
        <div className="validation-box">
          {errorList.map((msg) => <p key={msg}>{msg}</p>)}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          className={errors.description ? "input-error" : ""}
          onChange={(e) => { setDescription(e.target.value); setErrors(prev => ({ ...prev, description: "" })); }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          className={errors.amount ? "input-error" : ""}
          onChange={(e) => { setAmount(e.target.value); setErrors(prev => ({ ...prev, amount: "" })); }}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm
