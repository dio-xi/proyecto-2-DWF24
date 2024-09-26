import React, { useState, useEffect } from 'react';
import productImages from './ProductImages.js';

function ImageGallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };

    const previousImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
    };

    return (
        <div className="product-image-gallery">
            {!isMobile && (
                <div className="main-image">
                    <img src={productImages[selectedImageIndex]} alt="Product" />
                </div>
            )}
            <div className="thumbnail-images">
                {isMobile ? (
                    <img
                        src={productImages[selectedImageIndex]}
                        alt={`Thumbnail ${selectedImageIndex}`}
                        className="active"
                    />
                ) : (
                    productImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className={selectedImageIndex === index ? 'active' : ''}
                            onClick={() => handleImageClick(index)}
                        />
                    ))
                )}
                {isMobile && (
                    <div className="navigation-buttons">
                        <button className="prev-button" onClick={previousImage}>
                            <a href="#"><img src='./src/images/icon-previous.svg' alt="Previous" /></a>
                        </button>
                        <button className="next-button" onClick={nextImage}>
                            <a href="#"><img src='./src/images/icon-next.svg' alt="Next" /></a>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageGallery;
