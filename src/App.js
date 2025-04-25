import React, { lazy } from "react";
import AppLayout from "./components/AppLayout";

const ButtonFromMFE1 = lazy(() => import("mfe1/Button"));

const App = () => (
  <div className="host-app">
    <AppLayout />
    <React.Suspense fallback={<div>Loading........!</div>}>
      <ButtonFromMFE1 />
    </React.Suspense>
  </div>
);

export default App;
