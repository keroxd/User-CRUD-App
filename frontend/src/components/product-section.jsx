import ProductCard from "./product-card";
import AddProductCard from "./add-product-card";
import EditProductCard from "./edit-product-card";
import { useProduct } from "../hooks/product-context";
import { useState } from "react";

const ProductSection = ({ data }) => {
    const {currentProduct, setCurrentProduct} = useProduct()
    const [isAddCardOpen, setIsAddCardOpen] = useState(false)
    const [IsEditCardOpen, setIsEditCardOpen] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(data.length / itemsPerPage)

    return (
        <>
            {isAddCardOpen && (
                <div className='bg-black/80 fixed inset-0 z-999 flex items-center justify-center'>
                    <AddProductCard close={() => setIsAddCardOpen(false)} />
                </div>
            )}

            {IsEditCardOpen && (
                <div className='bg-black/80 fixed inset-0 z-999 flex items-center justify-center'>
                    <EditProductCard currentProduct={currentProduct} close={() => setIsEditCardOpen(false)}></EditProductCard>
                </div>
            )}
            <div className='bg-transparent h-165 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-auto'>
                {currentItems.map((item) => (
                    <ProductCard onClick={() => {
                        setIsEditCardOpen(true);
                        setCurrentProduct(item)
                    }}
                        key={item._id} name={item.name} price={item.price} image={item.image}></ProductCard>
                ))}
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                >
                    Previous
                </button>

                <span className="font-medium">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>

        </>
    )
}

export default ProductSection;