"use client";

import { useEffect, useState } from "react";
import { FiArrowRight, FiGithub, FiStar } from "react-icons/fi";
import { featuredRepos, profile } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [totalRepos, setTotalRepos] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUser}`).then((res) =>
        res.ok ? res.json() : null
      ),
      fetch(
        `https://api.github.com/users/${profile.githubUser}/repos?per_page=100`
      ).then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      }),
    ])
      .then(([userData, allRepos]: [{ public_repos?: number } | null, Repo[]]) => {
        if (cancelled) return;
        const byName = new Map(allRepos.map((r) => [r.name, r]));
        const ordered = featuredRepos
          .map((name) => byName.get(name))
          .filter((r): r is Repo => Boolean(r));
        setRepos(ordered);
        setTotalRepos(userData?.public_repos ?? allRepos.length);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="repos" className="bg-surface/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Open Source" title="GitHub Repositories" />
        </Reveal>

        {error && (
          <p className="text-sm text-muted">
            Couldn&apos;t load repositories right now — visit{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline"
            >
              my GitHub profile
            </a>{" "}
            directly.
          </p>
        )}

        {!error && !repos && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-28 animate-pulse rounded-2xl border border-border bg-surface"
              />
            ))}
          </div>
        )}

        {repos && repos.length > 0 && (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <Reveal key={repo.id} delay={i * 0.05}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-transform hover:-translate-y-1 hover:border-primary"
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <FiGithub size={16} className="text-primary" />
                      {repo.name}
                    </div>
                    <p className="line-clamp-2 flex-1 text-sm text-muted">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="inline-flex items-center gap-1">
                        <FiStar size={12} /> {repo.stargazers_count}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 text-center">
                <a
                  href={`${profile.github}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  Click here to view all{" "}
                  {totalRepos ?? `${featuredRepos.length}+`} repositories
                  <FiArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
