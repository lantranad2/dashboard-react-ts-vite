import { Link } from "react-router-dom";
import "../sass/components/brand.scss";

const Brand = () => {
  return (
    <Link className="brand" to="/">
      lam<span className="brand__secondary">dev</span>
    </Link>
  );
};

export default Brand;
