import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) => {
                const {id, company, img, info, price, title, inCart} = value.detailProduct
                return (
                    <div className="container py-5">
                        {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/* end of title  */}
                        {/* product image */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="image-fluid" alt="product"></img>
                            </div>
                        {/* product text  */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model : {title}</h2>
                                <h3 className="text-muted mt-3 mb-2"> 
                                Made By: <span className="text-uppercase">{company}</span>
                                </h3>
                                <h4 className="text-green">
                                    <strong> 
                                        price: <span>$</span> {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">product info</p>
                                <p className="text-muted lead">{info}</p>
                                {/* buttons */}
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                    </Link>   
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
            </ProductConsumer>
        )
    }
}
