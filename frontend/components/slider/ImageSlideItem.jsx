import React from 'react'
import {Link} from 'react-router-dom'

const ImageSlideItem = ({ image, opacity}) => {
    const styles = image.background_image ? (
        {
            backgroundImage: `url(${image.background_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity
        }
    ) : (
        {
            // backgroundImage: `url(${image.image_url})`,
            // backgroundSize: 'contain',
            // backgroundPosition: 'right bottom',
            // backgroundRepeat: 'no-repeat',
            opacity
        }
    );
    let imageUrlStyles = !!image.image_url ? (
        {
            backgroundImage: `url(${image.image_url})`,
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            zIndex: "1",
            right: "0px",
            gridArea: "1 / 2 / span 6 / span 6",
            backgroundPosition: "right bottom",
            backgroundRepeat: "no-repeat"
        }
    ) : {};

    return (
        <div className="image-slide" style={styles}>
            <div className="options">
                <div className="title">{image.subtitle_text}</div>
                <div className="body">{image.header_text}</div>
                <Link to="/bakeries">{image.button_text}</Link>
            </div>
            {!!image.image_url && <div style={imageUrlStyles}></div>}
        </div>
    )
}

export default ImageSlideItem
