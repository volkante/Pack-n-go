import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

/* 
Dummy data for state at the beginning

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
]; 
*/

export default function App() {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem("items");
      const parsed = stored ? JSON.parse(stored) : [];
      return parsed.map((it) => ({ ...it, packed: Boolean(it.packed) }));
    } catch (err) {
      console.error("Failed to parse items from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("items", JSON.stringify(items));
    } catch (err) {
      console.error("Failed to save items to localStorage:", err);
    }
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleReset() {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onResetItems={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
