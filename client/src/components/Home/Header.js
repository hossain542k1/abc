import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
   return (
      <section className="header">
         <Container className="header-info d-flex justify-content-center align-items-center">
            <div className="header-content text-center text-uppercase">
               <h1>COMPUTER PROBLEMS?</h1>
               <p>WE HELIP TO FIX ALL PROBLEM!</p>
               <h6>Call Now 1800 123 4567</h6>
               <button className="btn custom-btn mt-3">Read More</button>
            </div>
         </Container>
      </section>
   );
};

export default Header;
