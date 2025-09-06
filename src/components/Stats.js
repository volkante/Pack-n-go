export function Stats({ items }) {
  /*
  Eğer hiç item eklememişsek, yani en başta boşsa listemiz aşağıdaki hesaplamalara gerek yok
  O yüzden şöyle bir metinle o hesaplamaları da yaptırmadan hoş bir şekilde karşılayabiliriz kullanıcıyı */
  if (!items.length)
    return (
      <footer className="stats">
        <em> Start adding some items for your camp ⛺️</em>
      </footer>
    );

  const numItems = items.length;
  // console.log(items);
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  /* bu üç değişken için  ayrı state'e gerek yok. Çünkü ilk state'den hesaplanabiliyor. Gereksiz re-render olur ayrı state. */
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🚀"
          : `🎒 You have ${numItems} items on your list, and you've already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
