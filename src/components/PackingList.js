import { useState } from "react";
import { ListItem } from "./ListItem";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onResetItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice() /* Slice ile kopyaladım çünkü sort orjinal arrayi yani items'ı değiştirir yoksa! */
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort(
        (a, b) => Number(a.packed) - Number(b.packed)
      ); /* packed property'sinin true-false değerini 1-0 diye rakama dönüştürüyor Number() */

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        {items.length > 0 && <button onClick={onResetItems}>Clear list</button>}
      </div>
    </div>
  );
}
