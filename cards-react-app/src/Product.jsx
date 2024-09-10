import "./Product.css";
import Price from './Price.jsx'

function Product({title,idx}){
    let oldPrice = ["35931","48688","156324","218458"]
    let newPrice = ["30000","44000","150000","200000"]
    let description = [["A watch","best to track time"], ["A T.V","a big one"], ["A Laptop","affordable"], ["A Laptop","best produce"]]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}

export default Product;