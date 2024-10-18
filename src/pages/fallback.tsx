import { Construction } from "@carbon/icons-react";
import { Link } from "react-router-dom";

const Fallback = () => (
  <main id="fallback">
    <Construction size="40%" />
    <p>Page is under construction</p>
    <p>
      <Link to="/">Go to home page</Link>
    </p>
  </main>
);

export default Fallback;
