import axios from "axios"
import { useState } from "react"


const useUpdateProduct = () => {
    const [loading, setLoading] = useState(false)

    const updateProduct = async (productId, productData) => {
        setLoading(true)
        try {
            const res = await axios.put(`http://localhost:5000/api/products/${productId}`, productData)
            if (res.data.success) {
                alert("Update Successful")
                window.location.reload()
                return true;
            }
        } catch (error) {
            alert("axios error")
            console.log("Axios Error" || error.message)
            return false;
        } finally {
            setLoading(false)
        }
    }
    return { loading, updateProduct }
}
export default useUpdateProduct;