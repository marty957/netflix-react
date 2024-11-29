import { Component } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import SingleRow from "./SingleRow";
import { Container } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import { Grid3x3 } from "react-bootstrap-icons";

class MainSection extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="my-4 fw-bold display-5">TV Shows</h2>
            <div className="btn-group d-flex align-items-center" role="group">
              <Dropdown className="ms-4 mt-3">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="align-items-centers my-4">
            <Grid className=" bi icons mt-3" />
            <Grid3x3 className="icons mt-3" />
          </div>
        </div>
        <Container fluid>
          <SingleRow title="Batman" />
          <SingleRow title="Alien" />
          <SingleRow title="Hulk" />
        </Container>
      </div>
    );
  }
}

export default MainSection;
