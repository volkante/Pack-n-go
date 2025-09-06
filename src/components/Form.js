import { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your adventure?</h3>
      <select
        value={
          quantity
        } /* value'yü kullanıyoruz. Aşağıda input'ta da aynı şekilde. Çünkü bu alanları güncellediğimizde ilk
        değer'de güncellensin istiyoruz. Bizim bu iki örneğimizde submit yapınca bunu 1 yapıyoruz aşağıdaki
        input örneğinde iste boş string yapıyoruz mesela. Daha başka örnekte kullanıcı submit yaptıktan sonra mesela formda
        istediğimiz şeyi gösterebiliriz value ile. Çünkü ilk değer bu value. Reddit'de aynı soruyu sormuş bu value'ye ne gerek var
        diye birisi. sonuçta onchange işini yapıyor diye. Şöyle cevaplanmış:
        At the moment, it's just acting like an initial value, but say name was set elsewhere, if you'd want the input to use this newly set value,
        you would need to keep the value attribute. Bende de böyle yapıyor şu an. Submit edip basınca form içini ilk hale getiriyor State ile.
        İstersen value'yü çıkar ve dene. Value'ye state koymak bizim örneğimideki gibi controlled bir element yapıyor yani elamanı. React'ın
        kontrolüne geçiyor yani bizim kontrolümüze. State ile istediğimizi koyabiliyoruz.*/
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (
            num /* 20 sayılı bir array oluşturma ve ondan 20 tane options oluşturma map ile. Böyle bir metot var. */
          ) => (
            <option value={num} key={num}>
              {num}
            </option>
          )
        )}
      </select>
      <input
        placeholder="Enter item here…"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>add</button>
    </form>
  );
}
