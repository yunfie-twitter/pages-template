export type ProfileLink = {
  name: string;
  url: string;
  label: string;
  text: string;
  kind: string;
  icon: string;
  accent: string;
};

export const profileLinks: ProfileLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    label: "GitHubを開く",
    text: "github.com/username",
    kind: "Code",
    icon: "https://cdn.simpleicons.org/github/ffffff",
    accent: "#24292f"
  },
  {
    name: "X",
    url: "https://x.com/username",
    label: "Xを開く",
    text: "x.com/username",
    kind: "Social",
    icon: "https://cdn.simpleicons.org/x/ffffff",
    accent: "#111111"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@username",
    label: "YouTubeを開く",
    text: "youtube.com/@username",
    kind: "Video",
    icon: "https://cdn.simpleicons.org/youtube/ffffff",
    accent: "#e62117"
  },
  {
    name: "note",
    url: "https://note.com/username",
    label: "noteを開く",
    text: "note.com/username",
    kind: "Writing",
    icon: "https://cdn.simpleicons.org/note/ffffff",
    accent: "#41c9b4"
  },
  {
    name: "misskey.io",
    url: "https://misskey.io/@username",
    label: "Misskeyを開く",
    text: "misskey.io/@username",
    kind: "Social",
    icon: "https://cdn.simpleicons.org/misskey/ffffff",
    accent: "#86b300"
  },
  {
    name: "Ko-fi",
    url: "https://ko-fi.com/username",
    label: "Ko-fiを開く",
    text: "ko-fi.com/username",
    kind: "Support",
    icon: "https://cdn.simpleicons.org/kofi/ffffff",
    accent: "#ff5f5f"
  }
];

export const featuredLinkNames = ["GitHub", "X", "YouTube", "note"];
