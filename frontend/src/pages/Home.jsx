import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

import { useEffect, useState } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)

  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()

    return setPizzas(data)
  }

  useEffect(() => {
    getPizzas()
    setLoading(false)
  }, [])

  return (
    <>
      <Header />

      <div className='container p-3'>
        {
        loading
          ? (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
              <div className='spinner-border text-primary' role='status' />
            </div>
            )
          : (
            <div className='d-flex justify-content-center gap-3 flex-wrap p-0 m-0'>
              {pizzas.map(pizza => (
                <CardPizza
                  key={pizza.id}
                  img={pizza.img}
                  ingredients={pizza.ingredients}
                  name={pizza.name}
                  price={pizza.price}
                />
              ))}
            </div>
            )
        }
      </div>
    </>
  )
}

export default Home
