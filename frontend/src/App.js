import data from './data';


function App() {
  return (
    <div className="App">
      <header>
        <a href="/">E-shope</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
            {data.products.map(product=>(
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.img} alt={product.name} />
                  </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p><strong>{product.name}</strong></p>
                    </a>
                  <p>{product.prize}</p>
                  <button>Add to cart</button>
             </div>
        </div>))

        }
        </div>
        </main>
    </div>
  );
}

export default App;