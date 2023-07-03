// Esta es funcionalidad de prueba para el API , Se utiliza el componente PostList al final MAC01

import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api/harvardApi';


function ApiImageComponent() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                const fetchedImages = await fetchImages();
                setImages(fetchedImages);
            } catch (error) {
                // Manejar el error
            }
        };

        getImages();
    }, []);

    return (
        <div>
            {/* Mostrar las imágenes */}
            {images.map(image => (
                <img
                    key={image.id}
                    src={image.baseimageurl}
                    //           alt={image.alttext}
                    style={{ width: '230px', height: '230px' }}
                />

            ))}
        </div>
    );
}

export default ApiImageComponent;