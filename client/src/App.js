import "./styles/index.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext, lazy, Suspense } from "react";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFound from "./components/pageErrors/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const PostDetails = lazy(() => import("./pages/PostDetails"));
const Chat = lazy(() => import("./pages/Chat"));

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const PrivateRoute = () => {
    return currentUser?.accessToken ? (
      <Outlet />
    ) : (
      <Navigate to="/accounts/login" />
    );
  };

  return (
    <SkeletonTheme baseColor="#dbdbdb" highlightColor="#dbdbdb" enableAnimation>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/:username"
              element={
                <Suspense>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/posts/:postId"
              element={
                <Suspense>
                  <PostDetails />
                </Suspense>
              }
            />
            <Route
              path="/chat"
              element={
                <Suspense>
                  <Chat />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/accounts/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/accounts/sign-up"
            element={
              <Suspense>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </SkeletonTheme>
  );
};

export default App;