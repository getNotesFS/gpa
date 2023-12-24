'use client';
import React from 'react';
import { FaShareAlt } from 'react-icons/fa'; // Usando react-icons para el ícono de compartir

const FloatingShareButton = () => {
 

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Calculadora de GPA',
                url: window.location.href
            }).catch((error) => console.log('Error al compartir', error));
        } else {
            // Fallback para navegadores que no soportan la Web Share API, solo copia el enlace
            navigator.clipboard.writeText(window.location.href);
            alert('Enlace copiado al portapapeles');

            
        }
    };

    return (
        <button onClick={handleShare} className="fixed bottom-5 right-5 z-10 p-3 bg-primary text-white rounded-full">
            <FaShareAlt className='dark:fill-black'/>

        </button>
    );
};

export default FloatingShareButton;
