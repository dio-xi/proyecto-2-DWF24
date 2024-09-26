import React, { useState, useEffect } from 'react';
import productImages from './ProductImages.js';

function ImageGallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [Lightbox, setLightbox] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openLightBox = (index) => {
        setSelectedImageIndex(index);
        setLightbox(true);
    };

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };

    const previousImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
    };

    const closeLightbox = () => {
        setLightbox(false);

    };

    return (
        <div className="product-image-gallery">
            {!isMobile && (
                <div className="main-image">
                    <img
                        src={productImages[selectedImageIndex]}
                        alt="Product"
                        onClick={() => openLightBox(selectedImageIndex)}
                    />
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
                            <img src='./src/images/icon-previous.svg' alt="Previous" />
                        </button>
                        <button className="next-button" onClick={nextImage}>
                            <img src='./src/images/icon-next.svg' alt="Next" />
                        </button>
                    </div>
                )}
            </div>
            {!isMobile && Lightbox && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeLightbox}>X</button>
                        <div className="lightbox-main-image">
                            <img src={productImages[selectedImageIndex]} alt="Product Lightbox" />
                        </div>
                        <div className="lightbox-thumbnail-images">
                            {productImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className={selectedImageIndex === index ? 'active' : ''}
                                    onClick={() => setSelectedImageIndex(index)}
                                />
                            ))}
                        </div>
                        <div className="navigation-buttons">
                            <button className="prev-button" onClick={previousImage}>
                                <img src='./src/images/icon-previous.svg' alt="Previous" />
                            </button>
                            <button className="next-button" onClick={nextImage}>
                                <img src='./src/images/icon-next.svg' alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGallery;
