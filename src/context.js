import React, { Component } from "react";
import { storeProducts, detailProducts } from "./data";
const ProductContext = React.createContext();
class ProductProvider extends Component{
    state={
        products:storeProducts,
        detailProduct: detailProducts
    }
    handleDetail = () => {
        console.log("handel deatils");
    };

addToCart = () =>{
    console.log("handel add to cart");
}
    render(){
        return(
            <ProductContext.Provider value=
            {{ ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}
            >
               {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };