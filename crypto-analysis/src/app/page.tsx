import "./page.css";
import Logo from "@/base/logo/logo";

// import { Button } from "@/components/ui/button"
export default function Home() {
  // page logic
  // page render
  return (
    <div className="home-page">
      <div className="home-page-left">
        <div className="home-l-logo">
          <Logo />
        </div>
        <div className="home-l-nav"></div>
      </div>
      <div className="home-page-right">
        <div className="home-r-top"></div>
        <div className="home-r-content"></div>
      </div>
    </div>
  );
}