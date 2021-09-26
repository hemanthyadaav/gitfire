import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3  mb-4">
      <img
        src={user.avatar_url}
        alt="User Profile Picture"
        className="img-thumbnail"
      />
      <CardBody>
        <div className="text-primary">{user.name}</div>
        <div className="text-primary">
          Website: "{user.blog}"
        </div>
        <div className="text-primary">Location: {user.location}</div>
        <div className="text-primary">Email: {user.email ? user.email : "Not Available"}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-primary">
          Number of Repositories: {user.public_repos}
        </div>
        <div className="text-primary">Followers: {user.followers}</div>
        <div className="text-primary">Following: {user.following}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
