/**
 * 
 ** Passing and Reading Props
Learning Goal: Practice sending data into a component and reading it back out.

1. Create a ProductCard.tsx component that accepts productName (string) and price(number) as typed props.
 In App.tsx, render at least 3 ProductCard components, each with different prop values.


3. Rewrite your ProductCard component two ways: once reading props.propertyName, and
once using destructuring in the function signature.
4. Add a 4th prop called inStock (boolean) and display 'Available' or 'Out of Stock' based on its value.
 * 
 * 
 */

interface ProductCardPropType {
  productName: string;
  price: number;
}

export default function ProductCard(props: ProductCardPropType) {
  console.log("props is", props);
  return (
    <>
      <h3>Product Name: {props.productName}</h3>
      <p>Product Price: {props.price} </p>
    </>
  );
}
// export default function ProductCard({
//   productName,
//   price,
// }: ProductCardPropType) {
//   return (
//     <>
//       <h3>Product Name: {productName}</h3>
//       <p>Product Price: {price} </p>
//     </>
//   );
// }
