import { Link } from "react-router-dom";

const ProductCards= ({ product = [] }) => {

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {
      product.map((product)=>(
        <Link to={`/products/${product.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"> 
               <Link className="block relative h-48 rounded overflow-hidden">
          <img alt={product.title} className="object-contain object-center w-full h-full block" src={product.image}/>
          </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 text-center">{product.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium text-center">{product.title}</h2>
          <p className="mt-1 text-center">${product.price}</p>
        </div>
      </Link>
      ))
    }
      
      
    </div>
  </div>
</section>
  )}
// {/* //           <div className="flex flex-wrap -m-4">
//           <table>
//   <tr>
//     <th>price</th>
//     <th>Contact</th>
//     <th>Country</th>
//   </tr>
//   <tr>
//   {product.map(item => (
             
//     <td  key={item.id}>{item.price}</td>
//     ))}
//   </tr>
  
// </table>
          
            
      
      
export default ProductCards;
