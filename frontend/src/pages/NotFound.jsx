import { Link } from "react-router-dom"
import notFoundImage from '../assets/img/error-404.jpg'

const NotFound = () => {
  return (
    <main className='container text-center mt-5'>
      <img src={notFoundImage} alt='Pagina no encontrada' className='img-fluid w-50' />
      <h2 className='text-muted'>Oops! Pagina no encontrada</h2>
      <p className='text-muted'>Parece que la pagina que buscas no existe</p>
      <Link to='/' className='btn btn-primary mt-3'>
        Volver al inicio
      </Link>
    </main>
  )
}
export default NotFound
