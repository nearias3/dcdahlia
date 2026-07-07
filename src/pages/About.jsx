import Container from "../components/ui/Container";
import site from "../data/site";

export default function About() {
  return (
    <Container>
      <section className="page-header">
        <p className="eyebrow">About the Author</p>
        <h1>{site.author.name}</h1>
        <p>{site.author.tagline}</p>
      </section>

      <section className="about-grid">
        <div className="author-photo-placeholder">
          <span>Insert Author Photo</span>
        </div>

        <div className="about-content">
          <h2>Meet {site.author.name}</h2>
          <p>
            D.C. Dahlia is an emerging author known for her gripping, humorous
            mystery novels. Inspired by classic thrillers and modern suspense,
            Dahlia's storytelling keeps readers on the edge of their seats. She
            writes with a deep passion for unraveling secrets and exploring the
            darker side of human nature.
          </p>

          <p>
            Her debut novel, A Killer Time, has been praised for its intricate
            plot and well-drawn characters. Set in a boarding school, this
            mystery follows a teenage girl as she aims to solve the mystery of
            her classmate's murder. D.C. Dahlia continues to work on new
            projects that promise to be just as thrilling
          </p>

          <p>
            Along with being an author, D.C. Dahlia is an actress, as well as a sommelier. 
            Her inspiration for this series came from her love of murder mysteries - and correctly guessing plot
            twists! When she's not writing stories, she enjoys Gozilla movies,
            eating sushi, and taking naps while cartoons play on the television.
          </p>
        </div>
      </section>
    </Container>
  );
}
