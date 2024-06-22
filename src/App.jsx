
import Slide from './components/Slide'
import CardProduct from './components/CardProduct'
import CardService from './components/CardService'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './page/Loading/Loading'

function App() {

  const [products, setProduct] = useState([]);
  const [iLoading , setLoading] = useState(false);
  const navigate = useNavigate();
  const LoadingPage = [1,2,3,4,5,6,7,8]




  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products)
        setLoading(false)
      })
      .catch((Error) => console.log(Error))
  }, [])

  
  const handleClick = (product) => {
    navigate("/card-Detail" , {state:product})
    // console.log(product)
  }
  


  return (
    <>
      <header className='w-[75%] m-auto p-[20px] mt-5 '>
        <Slide />
      </header>
      <main className='max-w-screen-xl mx-auto '>
        <h2 className='text-4xl font-semibold text-gray-900 dark:text-white p-5 bg-gray-100'>Product</h2>
        <section className="p-5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {iLoading && LoadingPage.map(() => <Loading/>)}
          {!iLoading && products.slice(0, 8).map((product,index) => {
              return (
                <>                     
                  <CardProduct 
                    key={index}
                    img={product.images[0]} 
                    title={product.title}
                    handleClick={()=>handleClick(product)}
                    />

                </>
 
              )
            })}
        </section>
        <h2 className='text-4xl font-semibold text-gray-900 dark:text-white p-5  bg-gray-100'>Service</h2>
        <section className='grid xl:grid-cols-2 sm:grid-cols-1 gap-5 p-[20px]'>
          <CardService />
          <CardService />
        </section>

      </main>

    </>
  )
}

export default App
