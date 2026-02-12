export default function Iframe({ videoId }: { videoId: string }) {
  if (!videoId) return null;

  return (
    <>
      <iframe
        width={100}
        height={200}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Youtube video player"
        allowFullScreen
      />
    </>
  );
}
