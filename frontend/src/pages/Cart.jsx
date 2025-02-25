import { useState } from 'react'
import { pizzaCart } from '../utils/pizzas.js'
import { formateaNumero } from '../utils/utiles.js'

const Cart = () => {
  const [cartItems, setCartItems] = useState(pizzaCart)
  const [total, setTotal] = useState(pizzaCart.reduce((tot, item) => tot + item.count * item.price, 0))

  const handleRestar = (id) => {
    const nuevaCart = cartItems
      .map((item) => item.id === id ? { ...item, count: item.count - 1 } : item)
      .filter((item) => item.count > 0)

    setCartItems(nuevaCart)
    calcularTotal(nuevaCart)
  }

  const handleSumar = (id) => {
    const nuevaCart = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
    setCartItems(nuevaCart)
    calcularTotal(nuevaCart)
  }

  const calcularTotal = (nuevoCarrito) => {
    const nuevoTotal = nuevoCarrito.reduce((tot, item) => tot + item.count * item.price, 0)
    setTotal(nuevoTotal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container mt-2 mb-2 p-3 bg-muted border border-1 border-secondary' style={{ width: '30rem' }}>
      <div className='d-flex flex-column'>
        <h4>Detalle del pedido:</h4>
        <form onSubmit={handleSubmit}>
          <div className='d-flex flex-column gap-2 mt-2 mb-2'>
            {cartItems.map((cart) => (
              <div key={cart.id} className='d-flex flex-row align-items-center gap-2'>
                <img
                  className='border border-1 border-muted'
                  src={cart.img}
                  alt={cart.name}
                  style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />

                <div className='d-flex justify-content-between flex-grow-1 m-2'>
                  <p className='fw-bold m-0'>{cart.name}</p>
                  <p className='fw-bold m-0'>${formateaNumero(cart.price)}</p>
                </div>

                <div className='d-flex'>
                  <button
                    style={{ width: '30px', height: '30px', fontSize: '10px' }}
                    className='btn btn-outline-danger'
                    onClick={() => handleRestar(cart.id)}
                  >-
                  </button>

                  <input
                    type='text'
                    value={cart.count}
                    readOnly
                    className='border-0 fw-bold text-center'
                    style={{ width: '30px', height: '30px', fontSize: '13px' }}
                  />

                  <button
                    style={{ width: '30px', height: '30px', fontSize: '10px' }}
                    className='btn btn-outline-primary'
                    onClick={() => handleSumar(cart.id)}
                  >+
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='d-flex mt-4 mb-4 p-0'>
            <h4 className='m-0'>Total: $ {formateaNumero(total)}</h4>

          </div>

          <div className='d-flex flex-column'>
            <button
              type='submit'
              className='btn btn-dark' style={{ width: '90px', height: '45px', fontSize: '15px' }}
            >Pagar
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Cart
