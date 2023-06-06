import React from "react";

function Followers() {
  return (
    <div className="container mw-75">
      <div className="row">
        <div className="col-1 col-md-2">%- include("../partials/sidebar") %</div>
        <div className="col-11 col-md-6 col-lg-5">
          <div className="container-sm mw-50">
            <div className="d-flex flex-row align-items-center">
              <div className="mx-3">
                <a className="text-black" href="/<%= locals.user.username %>">
                  <i className="fas fa-arrow-left fa-lg"></i>
                </a>
              </div>
              <div>
                <h1 className="mb-0 mt-3 fs-2">%= user.firstname %%= user.lastname %</h1>
                <small className="text-body-tertiary">%= user.username%</small>
              </div>
            </div>
            <div className="d-flex justify-content-between ml-2 my-3">
              <h3 className="fs-4">
                <a className="text-black text-decoration-none" href="./followers">
                  Followers
                </a>
              </h3>
              <h3 className="fs-4">
                <a className="text-black text-decoration-none" href="./following">
                  Following
                </a>
              </h3>
            </div>

            {/* <!-- tarjeta FOLLOWERS --> */}
            {/* <% for (const userFollower of user.followers){ %> */}
            <div className="card-footer bg-white">
              <div className="row mb-3 g-0">
                <div className="col-1">
                  <div className="d-flex justify-content-end align-items-center">
                    <img
                      src="/img/icons/generic_avatar.PNG"
                      className="img-fluid rounded-circle w-50 mb-2"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="card-body px-3">
                    <h5 className="card-title mb-0 p-0 fs-6">
                      %= userFollower.firstname %%= userFollower.lastname %
                    </h5>
                    <p className="card-text">
                      <small className="text-body-tertiary">%= userFollower.username%</small>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  {/* <% if (userFollower.followers.includes(user._id)) { %> */}
                  <div className="text-end">
                    <form
                      action="/unfollow/<%=userFollower.id %>?_method=PATCH"
                      method="post"
                      className="d-inline"
                    >
                      <button
                        className="btn mt-1 btn-outline-dark rounded-pill px-3 fw-bold"
                        type="submit"
                      >
                        Following
                      </button>
                    </form>
                  </div>

                  {/* // <% } else { %> */}
                  <div className="text-end">
                    <form
                      action="/followFollower/<%=userFollower.id%>?_method=PATCH"
                      method="post"
                      className="d-inline"
                    >
                      <button
                        className="btn mt-1 rounded-pill px-3 fw-bold followBtn"
                        type="submit"
                      >
                        Follow
                      </button>
                    </form>
                  </div>
                  {/* // <% } %> */}
                </div>
              </div>
            </div>

            {/* //   <!-- tarjeta FOLLOWERS --> */}
          </div>
        </div>
        <div className="col-md-4">%- include("../partials/sidebarRight") %</div>
      </div>
    </div>
  );
}

export default Followers;