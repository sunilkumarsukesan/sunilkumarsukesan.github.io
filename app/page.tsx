import { About } from "@/components/about";
import { Accomplishments } from "@/components/accomplishments";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { GithubRepos } from "@/components/github-repos";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Accomplishments />
        <GithubRepos />
        <Education />
      </main>
      <Footer />
    </>
  );
}
