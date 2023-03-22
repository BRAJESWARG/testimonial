import React, { useState } from 'react'
import Product from "./Product";
import { productData, responsive } from "./Utilis/Data";

export default function Testimonials(props) {

    const [productCount, setProductCount] = useState(0);

    const btnpressprev = () => {
        const ele = document.getElementById("product-container");
        let width = ele.clientWidth;
        ele.scrollLeft = ele.scrollLeft - width;
        console.log(width)
        setProductCount(productCount - 1);
    };

    const btnpressnext = () => {
        const ele = document.getElementById("product-container");
        let width = ele.clientWidth;
        ele.scrollLeft = ele.scrollLeft + width;
        console.log(width)
        setProductCount(productCount + 1);
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
                <button className="pre-btn" id='pre-btn' onClick={btnpressprev} disabled={productCount <= 0} ><p>&lt;</p></button>
                <button className="next-btn" onClick={btnpressnext} disabled={productCount >= 3} ><p>&gt;</p></button>
                
                <div className="product-container" id="product-container" responsive={responsive} >
                    {product}
                </div>
            </div>
        </div>


    );
}

