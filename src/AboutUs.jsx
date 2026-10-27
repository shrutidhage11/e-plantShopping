import { Leaf, Heart, Sprout } from "lucide-react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">ABOUT US</span>
        <h1>Growing a greener everyday life.</h1>
        <p>
          Paradise Nursery is an online plant store created for people who want
          to bring the beauty and calm of nature into their everyday spaces.
        </p>
      </section>

      <section className="about-cards">
        <article>
          <Leaf />
          <h2>Curated Plants</h2>
          <p>We offer a carefully selected collection of plants for homes and workplaces.</p>
        </article>

        <article>
          <Heart />
          <h2>Plant With Purpose</h2>
          <p>Our goal is to make choosing and caring for plants simple and enjoyable.</p>
        </article>

        <article>
          <Sprout />
          <h2>Grow Together</h2>
          <p>Paradise Nursery helps new and experienced plant lovers create greener spaces.</p>
        </article>
      </section>
    </main>
  );
}