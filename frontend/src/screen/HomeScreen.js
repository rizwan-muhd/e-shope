import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom';
//import data from '../data'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return{...state,products:action.payload,loading:true}
    case 'FETCH_FAIL':
      return{...state,loading:false,error:action.payload}
    default:
      return state;
  }
  
}
function HomeScreen() {
  const [{products }, dispatch] = useReducer(reducer, {
    products:[],
    loading: true,
    error: "",
   })
  // const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const result = await axios.get('/api/products')
        dispatch({type:"FETCH_SUCCESS",payload:result.data})
      } catch(error) {
        dispatch({type:"FETCH_FAIL",payload:error.message})
      }
     
      // setProducts(result.data)
    }
    fetchdata()
  },[])
  return (
      <div>
           <h1>Featured Products</h1>
             <div className="products">
        {
      //     loading ? (<div>Loading...</div>)
      //       : error ? (<div>{error}</div>) :
              
      // (
          products.map(product => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.img} alt={product.name} />
                  </Link> 
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p><strong>{product.name}</strong></p>
                    </Link>
                  <p>{product.prize}</p>
                  <button>Add to cart</button>
             </div>
        </div>))
      
        }
        </div>
    </div>
  )
}

export default HomeScreen;