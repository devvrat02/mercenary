import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

class BlobCarousel extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            options:{
                autoplay: true,
	            autoplayTimeout: 3000,
	            loop: true,
	            rewind: false,                
	            center: true,               
	            items: 1,
	            margin: 10,
	            nav: false,
	            dots: false,                
            }
        }
    }
    

    render() {
        return (
            <OwlCarousel
                className="owl-theme"
                {...this.state.options}
            >
                <div><img className="blob-img-plumber" src="/assets/Plumber.svg" alt="blob-img"/></div>
                <div><img className="blob-img-elect" src="/assets/Electrician.svg" alt="blob-img"/></div>
                <div><img className="blob-img-mech" src="/assets/ac_mechanic.svg" alt="blob-img"/></div>
                <div><img className="blob-img-elect" src="/assets/Electrician.svg" alt="blob-img"/></div>
            </OwlCarousel>
        )
    }
}

export default BlobCarousel