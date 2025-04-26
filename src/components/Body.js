import React, { lazy, Suspense } from "react";
const SignInSignUp = lazy(() => import("signInSignUpInHost/SignInSignUp"));

const Body = () => {
  return (
    <div className="app-body">
      <Suspense fallback={<p>Loading...</p>}>
        <SignInSignUp />
      </Suspense>
    </div>
  );
};

export default Body;
