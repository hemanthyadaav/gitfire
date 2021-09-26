import React, { useContext } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Redirect } from "react-router";

export default function Authentication() {
  const context = useContext(UserContext);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = res.user;
        context.setUser(user);
        toast("Login Successful", {
          type: "success",
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast(errorCode + " " + errorMessage, {
          type: "error",
        });
        console.log(errorMessage);
      });
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  } else
    return (
      <Container className="text-center">
        <Row>
          {" "}
          <Col className="md-6">
            {" "}
            <Button
              outline
              className="my-5 p-3"
              block
              color="info"
              onClick={handleGoogleSignIn}
            >
              Click to Sign In with Google
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    );
}
