import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1> GifExpertApp </h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};





//* Comentarios
/*  NOTES:
categories.push(newCategory) --> evitar
 En las key no usar el indice, 
el equipo de React no lo recomienda, recomienda usar un identificador o id */
