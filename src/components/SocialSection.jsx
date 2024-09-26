import twitterIcon from "../icons/x-twitter.svg";
import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";

function SocialSection() {
  return (
    <div className="flex space-x-5 px-10">
      <a
        className="transition ease-in-out  hover:bg-white p-1 rounded-md"
        href="https://twitter.com/MEGACINE_SPEZIA"
      >
        <img className="w-4" src={twitterIcon} alt="twitter-logo" />
      </a>
      <a
        className="transition ease-in-out  hover:bg-white p-1 rounded-md"
        href="https://www.facebook.com/megacine"
      >
        <img className="w-4" src={facebookIcon} alt="facebook-logo" />
      </a>
      <a
        className="transition ease-in-out  hover:bg-white p-1 rounded-md"
        href="https://www.instagram.com/megacineufficiale/?hl=it"
      >
        <img className="w-4" src={instagramIcon} alt="instagram-logo" />
      </a>
    </div>
  );
}

export default SocialSection;
