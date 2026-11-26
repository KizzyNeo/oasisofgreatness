
import { siteContent } from "../data/siteContent";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

function Footer() {
  const socialLinks = Object.entries(siteContent.socialLinks)
    .filter(([, url]) => url.trim() !== "");

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          {siteContent.websiteName}
        </div>

        <p className="footer-tagline">
          {siteContent.tagline}
        </p>

        {socialLinks.length > 0 && (
          <div className="social-links">

            {socialLinks.map(([platform, url]) => {
              const Icon = socialIcons[platform];

              if (!Icon) return null;

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${platform}`}
                >
                  <Icon size={19} />
                </a>
              );
            })}

          </div>
        )}

        <div className="footer-divider"></div>

        <p className="copyright">
          © {new Date().getFullYear()} {siteContent.websiteName}.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
