export type Track = {
  title: string;
  youtubeId: string;
  date: string;
  description?: string;
  thumbnail?: string; // カスタムサムネイルURL（省略時はYouTubeサムネイルを使用）
};

export const tracks: Track[] = [
  {
    title: "Sample Track 01",
    youtubeId: "dQw4w9WgXcQ",
    date: "2026.01.01",
  },
  {
    title: "Sample Track 02",
    youtubeId: "dQw4w9WgXcQ",
    date: "2026.01.15",
  },
];

export const getYoutubeThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const getYoutubeHref = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;
