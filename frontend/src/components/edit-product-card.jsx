import { IoCloseSharp, IoTrashBin } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import TextInput from "./input";
import { useState } from "react";
import useUpdateProduct from "../hooks/useUpdateProduct.js";
import useDeleteProduct from "../hooks/useDeleteProduct.jsx";

const EditProductCard = ({ close, currentProduct }) => {
    const {deleteProduct} = useDeleteProduct()
    const [product, setProduct] = useState(currentProduct)
    const {updateProduct} = useUpdateProduct()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((product) => ({
            ...product, [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        console.log(product)
        e.preventDefault();
        await updateProduct(product._id, product)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteProduct(product._id)
    }


    return (<>
        <form  className="bg-white w-180 h-auto border border-neutral-300 rounded-xl">
            <div className="bg-transparent w-full h-10 pt-6 flex items-center justify-between">
                <h1 className="text-xl font-bold ml-5 w-auto">Edit Product</h1>
                <button type="button"
                    onClick={close}
                    className="bg-transparent flex items-center justify-center w-15 h-10 cursor-pointer "><IoCloseSharp size={24} /></button>
            </div>

            <section className="w-auto flex mt-3 p-4">
                <img
                    className="min-w-64 h-84  object-top object-cover rounded-lg"
                    src={currentProduct.image}
                    alt="Product Preview"
                />
                <div className="w-full">
                    <div className="bg-transparent w-full h-auto px-5 mt-8">
                        <TextInput name={"name"} onChange={handleChange}
                            value={product.name} title={"Product Name"} placeholder={"Enter Product Name"} type={"text"} />
                        <TextInput name={"price"} onChange={handleChange}
                            value={product.price} title={"Price"} placeholder={"Enter Price"} type={"number"} />
                        <TextInput name={"image"} onChange={handleChange}
                            value={product.image} title={"Image URL"} placeholder={"Enter Image URL"} type={"text"} />
                    </div>

                    <div className="bg-transparent flex items-center w-full h-20 px-5">
                        <button onClick={handleDelete}
                        type="button" className="bg-red-200 w-14 h-12 flex justify-center items-center rounded-md cursor-pointer">
                            <IoTrashBin size={24} className="text-red-600"></IoTrashBin>
                        </button>
                        <button onClick={handleSubmit} type="submit"
                        className="bg-emerald-200 text-emerald-600 font-semibold w-full h-12 ml-3 py-3 rounded-md cursor-pointer">
                            <div className="flex items-center justify-center gap-2">
                                <FaSave></FaSave>
                                <span className="text-sm">Save Product</span>
                            </div>

                        </button>
                    </div>
                </div>
            </section>
        </form>
    </>)
}

export default EditProductCard;