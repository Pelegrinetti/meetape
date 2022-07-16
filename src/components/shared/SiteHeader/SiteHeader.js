import Media from "react-media";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const SiteHeader = () => (
  <Media query={{ maxWidth: 960 }} defaultMatches>
    {(match) => (match ? <HeaderMobile /> : <HeaderDesktop />)}
  </Media>
);

export default SiteHeader;
