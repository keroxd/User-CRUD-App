import { FaEdit } from "react-icons/fa";



const ProductCard = ({name, price, image, onClick}) => {
    return (
        <>
            <div onClick={onClick}
             className='bg-white relative rounded-xl border border-neutral-300 w-60 h-80 cursor-pointer 
            hover:scale-102 hover:brightness-95 transition-all duration-200'>
                <button className="absolute top-3 right-3">
                    <FaEdit size={20}></FaEdit>
                </button>
                <img className='w-full h-60 rounded-t-xl object-top object-cover'
                src={image} alt="" />
                <div className='px-5 py-3'>
                    <h1 className='text-neutral-800 font-semibold text-sm capitalize'>{name}</h1>
                    <p className='font-medium mt-1'>{`${price.toLocaleString()} Ks`}</p>
                </div>
            </div>
        </>
    );
}; 

export default ProductCard