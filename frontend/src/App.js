import React from 'react';
import ProductForm from './components/ProductForm';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Registro de Productos en eCommerce de Ropa</h1>
            <ProductForm />
        </div>
    );
};

export default App;