import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container className="text-center">
        <h1>Welcome to Iravimart</h1>
        <HomeScreen/>
      </Container>

    </main>
    <Footer/>
    </>
  );
}

export default App;
