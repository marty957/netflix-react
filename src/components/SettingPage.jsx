import { Button } from "react-bootstrap";

const SettingPage = () => {
  return (
    <main>
      <div className="container w-75 mt-4">
        <h1 className="fw-normal fs-2 border-bottom">Account</h1>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div>
              <h3 className="fs-6 opacity-50 mt-2">MEMBERSHIP & BILLING</h3>
              <Button variant="dark" type="button">
                Cancel Membership
              </Button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div>
                  <p className="fw-medium my-0">student@strive.school</p>
                  <p className="fw-normal opacity-50 my-1">Passowrd *********</p>
                  <p className="fw-normal opacity-50">Phone 321044 1279</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 offset-md-4">
                <div className="text-end">
                  <p className="my-0">
                    <a className="text-decoration-none " href="#">
                      Change account email
                    </a>
                  </p>
                  <p className="my-0">
                    <a className="text-decoration-none " href="#">
                      Change password
                    </a>
                  </p>
                  <p>
                    <a className="text-decoration-none " href="#">
                      Change phone number
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-sm-6 col-md-5">
                <p className="my-1 fw-bold fst-italic">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paypal" viewBox="0 0 16 16">
                    <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
                  </svg>
                  PayPal <span className="fw-medium ms-3 fst-normal "> admin@strive.school</span>
                </p>
              </div>
              <div className="col-sm-6 col-md-4 offset-md-3">
                <div className="text-end">
                  <p className="my-0">
                    <a className="text-decoration-none " href="#">
                      Update payment info{" "}
                    </a>
                  </p>
                  <p>
                    <a className="text-decoration-none" href="#">
                      Billing details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row border-top">
              <div className="col-sm-8 col-md-5 offset-md-7">
                <div className="text-end">
                  <p className="my-0">
                    <a className="text-decoration-none" href="#">
                      Redeem gift card or promo code
                    </a>
                  </p>
                  <p>
                    <a className="text-decoration-none " href="#">
                      Where to buy gift cards
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top border-bottom pt-2">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <h3 className="fs-6 opacity-50 mt-2">PLAN DETAILS</h3>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="mt-2">
                <p className="fw-bold ">
                  Premium{" "}
                  <span className="border border-black border-1 px-1 rounded-1 shadow-sm ms-1 font-monospace">
                    ULTRA <span className="fw-bold">HD</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 offset-md-3">
              <div className="text-end">
                <p>
                  <a className="text-decoration-none" href="#">
                    Change plan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top border-bottom pt-2">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <h3 className="fs-6 opacity-50 mt-2">SETTINGS</h3>
            </div>
            <div className="col col-md-4">
              <div>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Parental controls
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Test participation
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none " href="#">
                    Manage download devices
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Activate a device
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Recent device streaming activity
                  </a>
                </p>
                <p>
                  <a className="text-decoration-none" href="#">
                    Sign out all device
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3 className="fs-6 opacity-50 mt-2">MY PROFILE</h3>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <div className="mt-2">
                  <img src="../src/assets/avatar.png" alt="avatar" width="28" />
                  <span className="ms-1 fw-bold">Strive Student</span>
                </div>
              </div>

              <div className="col-3 offset-5">
                <div className="text-end">
                  <p className="my-0">
                    <a className="text-decoration-none" href="#">
                      Manage profiles
                    </a>
                  </p>
                  <p className="my-0">
                    <a className="text-decoration-none" href="#">
                      Add profile email
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Language
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Playback settings
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Subtitle appearance
                  </a>
                </p>
              </div>
              <div className="col-5">
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Viewing activity
                  </a>
                </p>
                <p className="my-0">
                  <a className="text-decoration-none" href="#">
                    Ratings
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SettingPage;
