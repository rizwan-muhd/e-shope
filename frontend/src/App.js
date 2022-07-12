
import React from 'react';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar'
import LinkCondainer from 'rae'


function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
              <Navbar.Brand>E-shope</Navbar.Brand>
              </LinkContainer>
              
            </Container>
          </Navbar>
      </header>
         <main>
          <Routes>
               <Route path='/product/:slug' element={<ProductScreen/> } />
               <Route path="/" element={<HomeScreen />} />
            </Routes>
         </main>
       </div>
      </Router>
      );
     }

export default App;
