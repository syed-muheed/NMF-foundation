import React from "react";
import Header2 from "../header2";
import { useLocation } from "react-router-dom";

export default function Navbar2(props) {
  const [scroll, setScroll] = React.useState(0);
  const location = useLocation();

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
      <Header2 hclass={props.hclass} Logo={props.Logo} topbarNone={props.topbarNone} />
    </div>
  );
}