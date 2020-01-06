import React from 'react'

const ImageSlideItem = ({image}) => {
    const styles = {
        backgroundImage: `url(${image.image_url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return (
        <div className="image-slide" style={styles}>
            
        </div>
    )
}

export default ImageSlideItem
