import Image from 'next/image';

const StudioImage = ({
  model,
  maker,
  width = 200,
  height = 200,
  zoomType = 'relative',
  priority = false,
  className,
}) => {
  const imgModel = (() => {
    switch (model) {
      case '3 e-tense':
        return '3';
      case 'Leaf 2018':
        return 'Leaf';
      case 'e-Up':
        return 'eup';
      default:
        return model;
    }
  })();
  return (
    <Image
      alt=""
      src={`https://cdn.imagin.studio/getImage?customer=${process.env.NEXT_PUBLIC_IMAGES}&make=${maker}&modelFamily=${imgModel}&width=${width}&margins=0&zoomType=${zoomType}`}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};

export default StudioImage;
