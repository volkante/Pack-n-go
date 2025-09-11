export function Stats({ items }) {
  /*
  Eğer hiç item eklememişsek, yani en başta boşsa listemiz aşağıdaki hesaplamalara gerek yok
  O yüzden şöyle bir metinle o hesaplamaları da yaptırmadan hoş bir şekilde karşılayabiliriz kullanıcıyı */
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items for your camp ⛺️
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  /* bu üç değişken için  ayrı state'e gerek yok. Çünkü ilk state'den hesaplanabiliyor. Gereksiz re-render olur ayrı state. */
  return (
    <footer className="stats">
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage === 100 ? "#76c7ad" : "#e5771f",
            fontSize: percentage === 100 ? "inherit" : "1.4rem",
          }}
        >
          {percentage > 0 ? `${percentage}%` : ""}
        </div>
      </div>
      {percentage === 100
        ? "You got everything! Ready to go 🚀"
        : `🎒 You have ${numItems} items on your list, and you've already packed
          ${numPacked} (${percentage}%)`}
    </footer>
  );
}
