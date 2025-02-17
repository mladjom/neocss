// app/about/page.js
import { teamMembers } from '@/content/team';
import Card from "@/components/Card";

export default function About() {
    return (
      <>
        <section className="about__header">
          <div className="container">
            <h1>About Us</h1>
            <p className="text-lg">Learn about our mission and values</p>
          </div>
        </section>
  
        <section className="about__content">
          <div className="container">
            <div className="about__content-grid">
              <div className="about__content-main">
                <h2>Our Story</h2>
                <p>Detailed content about the company history...</p>
                
                <h2 className="mt-8">Our Mission</h2>
                <p>Information about company mission and goals...</p>
              </div>
              
              <div className="about__content-sidebar">
                <Card>
                  <h3>Quick Facts</h3>
                  <ul className="list-none space-y-4">
                    <li>Founded: 2024</li>
                    <li>Location: Global</li>
                    <li>Team: 50+ experts</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
  
        <section className="about__team">
          <div className="container">
            <h2 className="text-center mb-8">Our Team</h2>
            <div className="about__team-grid">
              {teamMembers.map((member, index) => (
                <Card 
                  key={member.id}
                  className="text-center"
                >
                  <img 
                    src={`/api/placeholder/200/200`}
                    alt={member.name}
                    className="rounded-full mx-auto mb-4"
                    width={100}
                    height={100}
                  />
                  <h3>{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }