import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Contact = () => {
    return (
        <div className="ContactCard">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0100/4303/1637/products/1107-2_1024x.jpg?v=1570733813" />
                <Card.Body>
                    <Card.Title>General informations</Card.Title>
                    <Card.Text>
                        <i className="fas fa-phone colorIcon"></i><p>(+216) 73 3569 258</p>
                        <i className="far fa-envelope colorIcon"></i><p>site@site.com</p>
                    </Card.Text>
                    <Card.Title>Our Location</Card.Title>
                    <Card.Text>
                        <i className="fas fa-search-location colorIcon"></i><p>Immeuble DUSITE, App 23 ,Tunise</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contact
