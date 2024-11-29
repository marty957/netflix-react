import { Button, Dropdown } from "react-bootstrap";

const EditPage = () => {
  return (
    <>
      <div className="container-sm d-flex flex-column w-50 mt-5">
        <h1 className="border-bottom">Edit Profile</h1>
        <div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="position-relative">
                <img src="../src/assets/avatar.png" alt="avatar" className="img-fluid" />
                <div
                  height="16"
                  width="21"
                  className="position-absolute bottom-0 start-0 translate-middle-y shadow-lg border border-white border-1 bg-black rounded-circle ms-1 px-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 19">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-8">
              <div className="border-bottom">
                <h3 className="fs-6 bg-secondary bg-opacity-50 mt-2 px-2 py-1 fw-normal">Strive Student</h3>
                <p className="mb-0 fs-6">Language:</p>
                <Dropdown className="my-3">
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">French</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="mt-3 border-bottom">
                <h3 className="fw-normal fs-6">Maturity Settings:</h3>
                <span className="fw-medium fs-8 bg-secondary bg-opacity-50 p-1">ALL MATURITY RATINGS</span>
                <p className="fs-8 mt-2">Show titles of all maturity ratings for this profile</p>
                <button className="btn border rounded-0 mb-3 text-secondary px-4 py-1">EDIT</button>
              </div>
              <div className="mt-3">
                <h3 className="fs-6 fw-normal">Autoplay controls</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check-lg text-secondary border"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  <span className="fs-9"> Autoplay next episode in a series on all devices </span>
                </div>
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check-lg text-secondary border"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  <span className="fs-9"> Autoplay previews while browsing on all devices </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container border-top mt-2">
          <div className="row gw-5">
            <div className="col-6 col-sm-6 col-md-2">
              <button className="btn btn-light mt-2 me-sm-3 px-sm-1 px-lg-3 rounded-0 fs-6 fs-md-4 fw-medium">SAVE</button>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <Button variant="dark" className="btn border rounded-0 ms-sm-0 mt-2 me-md-1 px-sm-1 px-lg-3 fs-6 fw-medium" color="#f5f5f1">
                CANCEL
              </Button>
            </div>
            <div className="col-6 col-sm-6 col-md-5">
              <Button variant="dark" className="btn border rounded-0 ms-sm-2 mt-2 px-sm-1 mx-lg-4 fs-6 fw-medium">
                DELETE PROFILE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
