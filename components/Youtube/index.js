export const Youtube = ({ embedId }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="aspect-video w-full absolute left-0 top-0"
      title="Embedded youtube"
    />
  );
};
