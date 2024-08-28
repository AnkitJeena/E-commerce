import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

/* eslint-disable react/prop-types */
const ProductItem = ({id,image,name,price,search}) => {

    const {currency} = useContext(ShopContext);

    const highlightText = (text, highlight) => {
      if (!highlight) return text;
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="bg-yellow-200">{part}</span>
        ) : (
          part
        )
      );
    };

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
            <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="image" />
        </div>
        <p className="pt-3 pb-1 text-sm">{highlightText(name, search)}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;