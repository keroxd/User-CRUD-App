import axios from "axios";
import { useState } from "react"


const useDeleteProduct = () => {
    const [loading, setLoading] = useState(false)

    const deleteProduct = async (productId) => {
        setLoading(true);
        try{
            const res = await axios.delete(`http://localhost:5000/api/products/${productId}`)
            if(res.data.success){
                alert("Deleted Successfully!")
                window.location.reload()
                return true;
            }
        } catch(error) {
            alert("Axios Error")
            console.log("Error during deleting product")
            return false;
        } finally{
            setLoading(false)
        }
    }
    return {loading, deleteProduct}
}
export default useDeleteProduct;