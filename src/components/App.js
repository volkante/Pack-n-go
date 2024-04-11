import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
]; */

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [
      ...items,
      item,
    ]); /* Burada items state'inin içiyle oynamadık. Çünkü stateler immutabledır.
    O yüzden spread operatörü kullandık ve yeni bir array yarattık items'a dokunmadan. Items'ın içi boş olduğu için de 
    sadece item elemanları girdi bu array'a. */
  }

  function handleDeleteItem(id) {
    setItems((items) =>
      items.filter((item) => item.id !== id)
    ); /* Items state'inin içindeki object array'inin içindeki objenin id'si
    aşağıdaki delete button'a basınca gelen id ile eşleşmiyorsa filter ile o id'li objeleri yeni array'a al. Böylece state'i güncelle. */
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
