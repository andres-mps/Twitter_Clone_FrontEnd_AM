import React from "react";
import { Link } from "react-router-dom";

function FollowersNav() {
  return (
    <div className="d-flex justify-content-around mt-4 mb-0">
      <h3 className="follow-text">
        <Link className="text-black text-decoration-none" to="/followers">
          Followers
        </Link>
      </h3>
      <h3 className="follow-text">
        <Link className="text-black text-decoration-none" to="/following">
          Following
        </Link>
      </h3>
    </div>
  );
}

export default FollowersNav;