import { FaInstagram, FaTiktok } from "react-icons/fa6";
import site from "../../data/site";

export default function SocialLinks({
  variant = "full",
  heading = "Follow the Investigation",
  description = "",
}) {
  const links = [
    {
      name: "Instagram",
      href: site.author.instagram,
      icon: FaInstagram,
    },
    {
      name: "TikTok",
      href: site.author.tiktok,
      icon: FaTiktok,
    },
  ].filter((link) => link.href);

  if (!links.length) return null;

  if (variant === "compact") {
    return (
      <div className="social-links social-links--compact">
        {links.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Follow D.C. Dahlia on ${name}`}
            title={name}
          >
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <section className="social-panel">
      <div className="social-panel__header">
        <p className="eyebrow">Social Surveillance</p>
        <h2>{heading}</h2>

        {description && <p>{description}</p>}
      </div>

      <div className="social-links social-links--full">
        {links.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            className="social-link-card"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-link-card__icon">
              <Icon aria-hidden="true" />
            </span>

            <span>
              <small>Evidence Channel</small>
              <strong>{name}</strong>
            </span>

            <span className="social-link-card__arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
