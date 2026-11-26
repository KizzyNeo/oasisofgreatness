import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { siteContent } from "../data/siteContent";
import BooksList from "../components/BooksList";
import { ArrowUpRight } from "lucide-react";
const routeToContent = {
  author: "author",
  engineer: "engineer",
  biographer: "biographer",
  "printer-publisher": "printerPublisher",
  poet: "poet",
  politician: "politician",
  "wellness-expert": "wellnessExpert",
  about: "about"
};

function ProfilePage() {
  const { page } = useParams();

  const contentKey = routeToContent[page];
  const content = siteContent.pages[contentKey];

  useEffect(() => {
    if (content) {
      document.title = `${content.title} | ${siteContent.websiteName}`;
    }

    return () => {
      document.title = `${siteContent.websiteName} | Official Website`;
    };
  }, [content]);

  if (!content) {
    return (
        <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The requested page could not be found.</p>
        <a href="/">Return Home</a>
        </div>
    );
    }

  return (
    <div className="profile-page-wrapper">

      <section id="profile-details" className={content.title === "Author" ? "profile-hero1" 
        : content.title === "Engineer" ? "profile-hero2"
        : content.title === "Biographer" ? "profile-hero3"
        : content.title === "Printer / Publisher" ? "profile-hero4"
        : content.title === "Poet" ? "profile-hero5"
        : content.title === "Politician" ? "profile-hero6"
        : content.title === "Wellness Expert" ? "profile-hero7"
        : "profile-hero"
      }>

        <div className="profile-content">

          <span className="section-subtitle">
            {content.subtitle}
          </span>

          <h1>{content.title}</h1>

          <div className="gold-line"></div>

          <p>{content.description}</p>

        </div>

      </section>

      <section className="profile-details">
        

        <div className="profile-details-container">
          {page === "politician" ? (
            <div className="politician-gallery"> {content.images?.map((image, index) => (
              <div className="political-image" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
        </div>
          ) : (

          content.sections?.map((section, index) => (
            <article
              className="profile-card"
              key={section.heading}
            >

              {/* <span className="profile-number">
                {String(index + 1).padStart(2, "0")}
              </span> */}
              {page === "poet" && section.youtubeLink ? (
                <h2>
                  <a href={section.youtubeLink} target="_blank" rel="noopener no referrer" className="poem-link">
                    {section.heading}
                    <span>
                      <ArrowUpRight size={20} />
                    </span>
                  </a>
                </h2>
              ) : (
                <h2>{section.heading}</h2>
              )}

              {page === "author" && <BooksList />}
              
              <p>{section.content}</p>

            </article>
          ))
          )}
        
        </div>

      </section>

    </div>

  );
}

export default ProfilePage;
