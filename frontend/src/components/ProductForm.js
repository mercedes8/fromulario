import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        gender: '',
        material: '',
        season: [],
        brand: '',
        model: '',
        sizes: [],
        colors: '',
        style: '',
        design: '',
        price: '',
        discountPrice: '',
        discountType: '',
        discountStartDate: '',
        discountEndDate: '',
        stock: '',
        preSale: false,
        restockTime: '',
        images: null,
        video: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'preSale') {
                setProduct({ ...product, [name]: checked });
            } else if (name === 'season' || name === 'sizes') {
                setProduct({ ...product, [name]: checked ? [...product[name], value] : product[name].filter(item => item !== value) });
            }
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setProduct({ ...product, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in product) {
                if (Array.isArray(product[key])) {
                    formData.append(key, JSON.stringify(product[key]));
                } else {
                    formData.append(key, product[key]);
                }
            }
            await axios.post('http://localhost:5001/api/products', formData, { // Cambiar el puerto a 5001
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Producto registrado con éxito');
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
    };

    return (
        <div className="product-form-container">
            <form onSubmit={handleSubmit}>
                <h2>Información General del Producto</h2>
                <input type="text" name="name" placeholder="Nombre del producto" onChange={handleChange} />
                <textarea name="description" placeholder="Descripción detallada" onChange={handleChange}></textarea>
                <select name="category" onChange={handleChange}>
                    <option value="">Categoría</option>
                    <option value="Camisetas">Camisetas</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Vestidos">Vestidos</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Otros">Otros</option>
                </select>
                <div>
                    <label>Género:</label>
                    <label><input type="radio" name="gender" value="Hombre" onChange={handleChange} /> Hombre</label>
                    <label><input type="radio" name="gender" value="Mujer" onChange={handleChange} /> Mujer</label>
                    <label><input type="radio" name="gender" value="Unisex" onChange={handleChange} /> Unisex</label>
                    <label><input type="radio" name="gender" value="Niños" onChange={handleChange} /> Niños</label>
                </div>
                <input type="text" name="material" placeholder="Tipo de tela/material" onChange={handleChange} />
                <div>
                    <label>Temporada:</label>
                    <label><input type="checkbox" name="season" value="Primavera" onChange={handleChange} /> Primavera</label>
                    <label><input type="checkbox" name="season" value="Verano" onChange={handleChange} /> Verano</label>
                    <label><input type="checkbox" name="season" value="Otoño" onChange={handleChange} /> Otoño</label>
                    <label><input type="checkbox" name="season" value="Invierno" onChange={handleChange} /> Invierno</label>
                </div>
                <input type="text" name="brand" placeholder="Marca" onChange={handleChange} />
                <input type="text" name="model" placeholder="Modelo/Referencia" onChange={handleChange} />

                <h2>Variantes del Producto</h2>
                <div>
                    <label>Tallas disponibles:</label>
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Otros'].map(size => (
                        <label key={size}>
                            <input type="checkbox" name="sizes" value={size} onChange={handleChange} /> {size}
                        </label>
                    ))}
                </div>
                <input type="text" name="colors" placeholder="Colores disponibles" onChange={handleChange} />
                <div>
                    <label>Estilo:</label>
                    {['Casual', 'Deportivo', 'Elegante', 'Urbano', 'Otros'].map(style => (
                        <label key={style}>
                            <input type="radio" name="style" value={style} onChange={handleChange} /> {style}
                        </label>
                    ))}
                </div>
                <div>
                    <label>Diseño:</label>
                    {['Liso', 'Estampado', 'Rayas', 'Cuadros', 'Otros'].map(design => (
                        <label key={design}>
                            <input type="radio" name="design" value={design} onChange={handleChange} /> {design}
                        </label>
                    ))}
                </div>

                <h2>Precios y Descuentos</h2>
                <input type="number" name="price" placeholder="Precio unitario" onChange={handleChange} />
                <input type="number" name="discountPrice" placeholder="Precio con descuento (si aplica)" onChange={handleChange} />
                <div>
                    <label>Tipo de descuento:</label>
                    <label><input type="radio" name="discountType" value="Porcentaje" onChange={handleChange} /> Porcentaje %</label>
                    <label><input type="radio" name="discountType" value="Monto fijo" onChange={handleChange} /> Monto fijo $</label>
                </div>
                <input type="date" name="discountStartDate" onChange={handleChange} />
                <input type="date" name="discountEndDate" onChange={handleChange} />

                <h2>Stock y Disponibilidad</h2>
                <input type="text" name="stock" placeholder="Cantidad disponible por talla y color" onChange={handleChange} />
                <div>
                    <label>¿Se permite preventa?</label>
                    <label><input type="checkbox" name="preSale" onChange={handleChange} /> Sí</label>
                </div>
                <input type="text" name="restockTime" placeholder="Tiempo estimado de reposición en caso de agotarse" onChange={handleChange} />

                <h2>Imágenes y Videos del Producto</h2>
                <input type="file" name="images" onChange={handleFileChange} />
                <input type="file" name="video" onChange={handleFileChange} />

                <button type="submit">Registrar Producto</button>
            </form>
        </div>
    );
};

export default ProductForm;