import React,{Component} from 'react';

import api from '../../service/api';

import './style.css';

export default class Main extends Component{
    state ={
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async() =>{
        const response = await api.get('/products');

        this.setState({products : response.data});

        console.log(response.data);
    };
    render(){
        // return (<h1>Contagem de Produtos: {this.state.products.length}</h1>);
        
        return(
            <div className="product-list">
                {this.state.products.map(product =>(<article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>

                <a href={product.url}>Acessar</a>
                </article>))}

            </div>

        )
    }
}