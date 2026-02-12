const YOUTUBE_API_KEY = import.meta.env.VITE_SEARCH_YOUTUBE_API_KEY;

export async function searchYoutubeVideo(
  musicTitle: string,
  musicArtist: string,
) {
  const query = encodeURIComponent(`${musicTitle} ${musicArtist}`);

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${query}&key=${YOUTUBE_API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      return null;
    }

    return data.items[0].id.videoId;
  } catch (err) {
    console.error("YouTube search error:", err);
    return null;
  }
}
