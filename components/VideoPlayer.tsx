"use client";

interface VideoPlayerProps {
  src: string;
  title?: string;
  poster?: string;
}

export default function VideoPlayer({ src, title, poster }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      <video
        src={src}
        poster={poster}
        className="h-full w-full"
        controls
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
        </div>
      )}
    </div>
  );
}
