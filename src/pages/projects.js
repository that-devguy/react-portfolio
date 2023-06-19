import RootLayout from "../app/layout";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <RootLayout>
      <div className="projects--container">
        <Projects />
      </div>
    </RootLayout>
  );
}
