import { Header } from "@/components/Header";
import { ProjectArchive } from "@/components/ProjectArchive";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <ProjectArchive />
      <SiteFooter />
    </main>
  );
}
