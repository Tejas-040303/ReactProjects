import Product from './Product.jsx'
function ProductTab() {
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "center",
        alginItems:"center"
        // placeItems: "center"
    };
  return (
    <div style={styles}>
      <Product title="Apple watch2.o" idx={0}/>
      <Product title="Samsung T.V." idx={1}/>
      <Product title="HP Laptop" idx={2}/>
      <Product title="Mac2" idx={3}/>
    </div>
  );
}

export default ProductTab;