import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import categories from './categories'; 
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Row } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <img src='/Group 1.png' className='home--banner' />
      <div className='featured-product-continer container mt-4'>
        <h2>Recent Products</h2>
        {/* Add the rest of your featured products content */}
      </div>

      <div className='text-right'>
        <Link to="/category/all" style={{ textDecoration: "none" }}>
          See more &gt;&gt;
        </Link>
      </div>

      <div className='sale_banner--container mt-4'>
        <img
          src='/fresh-vegetable-facebook-social-media-cover-design-template-premium-vector_530246-113.jpg'
          alt='Sale Banner'
          className='second--banner'
        />
      </div>
      <div className='recent-products-container container mt-4'>
        <h2 className='recent-products-container-title'>Categories</h2>
        <Row>
        {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLowerCase()}`} 
              key={category.name} 
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className='category-title'
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;

