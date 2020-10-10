import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Message/>
            ) : ( <> <Container className="ml-3"><h1>Welcome to iravimar</h1></Container>
                <Row>
                    {products.map( product =>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))}
            </Row> </>)}
        </>
    )
}

export default HomeScreen
