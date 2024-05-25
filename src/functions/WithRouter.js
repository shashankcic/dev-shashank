import { useLocation, useNavigate, useParams } from "react-router-dom";

// This function wraps a component and provides it with router props
const withRouter = (Component) => {
  // This is the component that will be returned
  const ComponentWithRouterProp = (props) => {
    // Get the router props
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    // Pass the router props to the original component
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  // Return the new component
  return ComponentWithRouterProp;
};

export default withRouter;