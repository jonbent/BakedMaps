import React, { Component } from 'react';
import ImageSlideItem from './ImageSlideItem';

export default class ImageSlideIndex extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images: [],
            currentItem: 0,
            translateValue: 0,
            ready: false
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
                        images: Object.values(response.data.carousel),
                        ready: true
                    }, 
                    () => this.interval = setInterval(this.nextImage, 3000)
                )
            }
        })
    }
    slideWidth() {
        return document.querySelector('.image-slide').clientWidth
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    

    render() {
        if (!this.state.ready) return null
        return (
            <div className="image-slider-container" style={{ backgroundColor: this.state.images[this.state.currentItem].background_color}}>
                <div className="image-slider">
                    <div className="image-slider-wrapper">
                        {this.state.images.map((image, idx) => {
                            return <ImageSlideItem key={idx} image={image} opacity={idx === this.state.currentItem ? 1 : 0}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
