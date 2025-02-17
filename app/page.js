// app/page.js
import { features } from '@/content/features';
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <section className="home__hero">
        <div className="container">
          <div className="home__hero-content">
            <div className="home__hero-text">
              <h1>Welcome to Our Platform</h1>
              <p className="text-lg">Discover amazing features and possibilities.</p>
              <Button variant="primary" size="lg">Get Started</Button>
            </div>
            <div className="home__hero-image">
              <img 
                src="/api/placeholder/600/400" 
                alt="Platform preview" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home__features">
        <div className="container">
          <h2 className="text-center mb-8">Our Features</h2>
          <div className="home__features-grid">
          {features.map((feature, index) => (

              <Card 
                key={feature.id}
                className="home__features-card"
                style={{ '--card-index': index }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}