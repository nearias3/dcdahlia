import Container from "../components/ui/Container";
import books from "../data/books";
import Hero from "../components/home/Hero";
import FeaturedBook from "../components/home/FeaturedBook";
import ReviewsPreview from "../components/home/ReviewsPreview";
import AboutPreview from "../components/home/AboutPreview";
import EventsPreview from "../components/home/EventsPreview";
import NewsletterCTA from "../components/home/NewsletterCTA";

export default function Home() {
  const featuredBook = books[0];

  return (
    <Container>
      <Hero />
      <FeaturedBook book={featuredBook} />
      <ReviewsPreview reviews={featuredBook.reviews} />
      <AboutPreview />
      <EventsPreview />
      <NewsletterCTA />
    </Container>
  );
}
