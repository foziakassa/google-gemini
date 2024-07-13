export default function Cart(props?: { products: any[]; }) {
    console.log(props!.products); // access the Arr state here
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {props!.products.map((product) => (
            <li key={product.Name}>{product.Name} - {product.Price}</li>
          ))}
        </ul>
      </div>
    );
  }