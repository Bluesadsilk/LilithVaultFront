import { useState, useEffect } from 'react';
import Product from './components/Product';
import './App.css';

function App() {
  const apiUrl = "/api"; // URL del backend
  const [totalVisualized, setTotalVisualized] = useState(3); // Mostrar 3 productos inicialmente
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [max, setMax] = useState(0); // Para almacenar el total de productos disponibles
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Obtener el número total de productos desde el backend
  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetch(`${apiUrl}/products/count`); // Hacer el GET a la API
        if (!response.ok) {
          throw new Error('Error al obtener el conteo de productos');
        }
        const data = await response.json(); // Asumimos que la API devuelve { "count": X }
        setMax(data.count); // Actualiza el estado con el conteo de productos
      } catch (error) {
        setError(error.message); // Maneja el error
      } finally {
        setLoading(false); // Detiene el estado de carga
      }
    };

    fetchProductCount(); // Llamar a la función al montar el componente
  }, [apiUrl]); // Dependencia de apiUrl para que se actualice si cambia

  // Función para manejar la visualización de más productos
  const handleTotalVisualized = () => {
    if (totalVisualized+3 >= max) {
      setShowMoreButton(false); // Ocultar el botón si no hay más productos para cargar
    }
    else{
    
    setTotalVisualized(totalVisualized+3);
    }
   
  };

  if (loading) return <p>Cargando...</p>; // Mensaje de carga mientras se obtiene el conteo
  if (error) return <p>Error: {error}</p>; // Muestra el mensaje de error si ocurre

  return (
    <>
      <h1>Lilith Vault</h1>
      <div className='productsGrid'>
      {[...Array(totalVisualized)].map((_, index) => (
        <Product key={index} productId={index + 1} url={apiUrl} />
      ))}
      </div>
      {/* Mostrar el botón si aún se pueden cargar más productos */}
      {showMoreButton && <button onClick={handleTotalVisualized}>Cargar más</button>}
    </>
  );
}

export default App;
