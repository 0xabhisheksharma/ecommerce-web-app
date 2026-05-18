import Button from "./Button";

function ProductCard({title,price,image}){
    return(
        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>
<div className="p-4">
    <h2 classname="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-zinc-400 mb-4"> ₹{price}</p>
    <Button title="Add to Cart"/>
</div>
        </div>
    )
}

export default ProductCard;