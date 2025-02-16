// app/page.js
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Form/Input";

export default function Home() {
  return (
    <div className="grid">
      <div className="grid__col-12 grid__col-md-8">
        <Card
          header={<h2>Welcome</h2>}
          footer={<Button variant="primary">Learn More</Button>}
        >
          <p>Content goes here...</p>
        </Card>
      </div>
      <div className="grid__col-12 grid__col-md-4">
        <form>
          <Input 
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}

// export default function Home() {
//   return (
//     <div className="animate-fadeIn">
//       <AnimatedList items={['Home', 'About', 'Contact']} />
//       <Card className="animate-scaleIn">
//         <h1>Welcome</h1>
//       </Card>
//     </div>
//   )
// }