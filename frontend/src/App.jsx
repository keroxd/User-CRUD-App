import { useState } from 'react'
import useGetProducts from './hooks/useGetProducts'
import ProductSection from './components/product-section'
import { useEffect } from 'react'
import AddProductCard from './components/add-product-card'
import EditProductCard from './components/edit-product-card'
import { useProduct } from './hooks/product-context'


function App() {
  
  const {currentProduct, setCurrentProduct} = useProduct()
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const { data, loading, error, refetch } = useGetProducts()


  return (
    <>
      <div className='bg-neutral-100 p-2 flex justify-center h-full'>

        {isAddCardOpen && (
          <div className='bg-black/80 fixed inset-0 z-999 flex items-center justify-center'>
            <AddProductCard close={() => setIsAddCardOpen(false)} />
          </div>
        )}

        <section className=''>
          <div className='bg-transparent py-2 flex justify-between w-full h-15 my-7'>
            <span>
              <h1 className='text-2xl font-bold'>Product Management</h1>
              <p className='text-sm text-neutral-500'>Manage your product inventory with ease</p>
            </span>

            <button className='bg-purple-200 text-purple-800 hover:brightness-90 w-40 h-10 text-sm font-semibold rounded-md cursor-pointer
            transition-all duration-150' onClick={() => setIsAddCardOpen(true)}>+ Add New Product</button>
          </div>
          <ProductSection data={data}></ProductSection>
        </section>
        
      </div>

    </>
  )
}

export default App

// http://localhost:5000/api/users