import React from 'react'
import Product from "./Product";
import { productData, responsive } from "./Utilis/Data";

export default function Testimonials(props) {

    const btnpressprev = () => {
        const box = document.getElementById("product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    };

    const btnpressnext = () => {
        const box = document.getElementById("product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    const product = productData.map((item) => (
        <Product
            name={item.name}
            designation={item.designation}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));
    return (

        <div className='container'>
            <div>
                <hr className="hr-left" />
                <hr className="hr-right" />
                &nbsp;&nbsp;
                <h1 className="testimonials-text">{props.value}</h1>
                &nbsp;&nbsp;
            </div>
            <div className="product-carousel">
                <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
                <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

                <div className="product-container" id="product-container" responsive={responsive} >
                    {product}
                </div>
            </div>
        </div>


    );
}

