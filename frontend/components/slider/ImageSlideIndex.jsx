import React, { Component } from 'react';
import ImageSlideItem from './ImageSlideItem';

export default class ImageSlideIndex extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [
                
            ],
            currentItem: 0,
            translateValue: 0
        }
        this.nextImage = this.nextImage.bind(this)
    }

    componentDidMount() {
        this.fetchImages()
    }
    
    nextImage() {
        if (this.state.currentItem === this.state.images.length - 1){
            this.setState(() => ({
                currentItem: 0,
                translateValue: 0
            }));
        } else {
            this.setState(prevState => ({
                currentItem: prevState.currentItem + 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
            }));
        }

    }
    
    fetchImages(){
        return $.ajax({
            url: "https://api-g.weedmaps.com/discovery/v1/homepage?latlng=37.9257851%2C-122.3220782&include%5B%5D=carousel",
            method: "GET",
            dataType: "JSON"
        }).then(response => {
            const carousel = Object.values(response.data.carousel)
            if (!carousel.length){ 
                this.fetchImages();
            } else {
                this.setState(
                    {
                        images: Object.values(response.data.carousel)
                    }, 
                    () => setInterval(this.nextImage, 5000)
                )
            }
        })
    }
    slideWidth() {
        return document.querySelector('.image-slide').clientWidth
    }

    render() {
        return (
            <div className="image-slider">
                <div className="image-slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}
                >
                    {this.state.images.map(image => {
                        return <ImageSlideItem image={image} key={image.ad_id}/>
                    })}
                </div>
            </div>
        )
    }
}
