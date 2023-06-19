import RootLayout from "../app/layout";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <RootLayout>
      <div className="contact--container">
        <Contact />
      </div>
    </RootLayout>
  );
}
