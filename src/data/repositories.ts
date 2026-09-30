export type RepositoryLink = {
  name: string;
  url: string;
  label: string;
  displayUrl: string;
  image: string;
};

export const repositories: RepositoryLink[] = [
  {
    name: "portfolio-template",
    url: "https://github.com/username/portfolio-template",
    label: "username/portfolio-templateを開く",
    displayUrl: "github.com/username/portfolio-template",
    image:
      "https://opengraph.githubassets.com/1/username/portfolio-template"
  },
  {
    name: "awesome-project",
    url: "https://github.com/username/awesome-project",
    label: "username/awesome-projectを開く",
    displayUrl: "github.com/username/awesome-project",
    image:
      "https://opengraph.githubassets.com/1/username/awesome-project"
  }
];
