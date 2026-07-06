import site from "../../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {site.author.name}. All rights
          reserved.
        </p>

        <p className="footer__tagline">{site.author.tagline}</p>
      </div>
    </footer>
  );
}
