import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container className='main'>
      <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
