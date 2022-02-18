


import './carousel.css';


function Carousel() {

    return (
        <>
            <h1> Carrussel  </h1>
            <hr />
             <div className = 'sliderContainer'>
                <img src ='images/dog-2.jpg' alt= 'dog-2' className='img-thumbnail imageCarousel'/>
                <img src ='images/dog-3.jpg' alt= 'dog-2' className='img-thumbnail imageCarousel'/>
                <img src ='images/dog-4.jpg' alt= 'dog-2' className='img-thumbnail imageCarousel'/>
                <img src ='images/dog-5.jpg' alt= 'dog-2' className='img-thumbnail imageCarousel'/>
                <img src ='images/dog.jpg' alt= 'dog-2' className='img-thumbnail imageCarousel'/>
            </div> 
        </>
    )
}

export default Carousel;