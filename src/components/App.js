import React from "react";
import Header from "./Header";
import TapRoomControl from "./TapRoomControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Jumbotron>
          <Header />
        </Jumbotron>
        <Card>
          <TapRoomControl />
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;