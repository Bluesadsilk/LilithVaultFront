import React, { useState } from 'react';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Cash from './Cash/Cash';
import Clients from './Clients/Clients';
import Providers from './Providers/Providers';
import Bills from './Bills/Bills';
import Home from './Home'; // Asegúrate de importar el componente Home
import '../App.css'; // Asegúrate de importar el archivo de estilos

function Layout() {
  const [activePage, setActivePage] = useState('home'); // Estado para la página activa
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  const handleNavigation = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // Cierra el menú cuando se navega a una página
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'cash':
        return <Cash />;
      case 'clients':
        return <Clients />;
      case 'providers':
        return <Providers />;
      case 'bills':
        return <Bills />;
      case 'home':
      default:
        return <Home />; // Página por defecto (puedes cambiarla si lo deseas)
    }
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo" onClick={() => handleNavigation('home')}>
            Lilith Vault
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <span
                className={activePage === 'home' ? 'active' : ''}
                onClick={() => handleNavigation('home')}
              >
                Inicio
              </span>
            </li>
            <li>
              <span
                className={activePage === 'products' ? 'active' : ''}
                onClick={() => handleNavigation('products')}
              >
                Productos
              </span>
            </li>
            <li>
              <span
                className={activePage === 'orders' ? 'active' : ''}
                onClick={() => handleNavigation('orders')}
              >
                Pedidos
              </span>
            </li>
            <li>
              <span
                className={activePage === 'cash' ? 'active' : ''}
                onClick={() => handleNavigation('cash')}
              >
                Caja
              </span>
            </li>
            <li>
              <span
                className={activePage === 'clients' ? 'active' : ''}
                onClick={() => handleNavigation('clients')}
              >
                Clientes
              </span>
            </li>
            <li>
              <span
                className={activePage === 'providers' ? 'active' : ''}
                onClick={() => handleNavigation('providers')}
              >
                Proveedores
              </span>
            </li>
            <li>
              <span
                className={activePage === 'bills' ? 'active' : ''}
                onClick={() => handleNavigation('bills')}
              >
                Facturas
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">
        {renderContent()} {/* Renderiza el contenido según la página activa */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Lilith Vault. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Layout;
