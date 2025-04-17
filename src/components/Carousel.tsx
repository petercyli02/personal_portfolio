import { MouseEvent, useState } from "react";

interface Props {
  images: {
    path: string;
    caption: string;
  }[];
}

const Carousel = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const goRight = () => {
    setIndex((index + 1) % images.length);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX } = event;
    const { left, width } = event.currentTarget.getBoundingClientRect();

    if (clientX - left < width / 2) {
      goLeft();
    } else {
      goRight();
    }
  };

  return (
    <>
      <img src={images[index].path} onClick={handleClick} />
      <p className="my-2 text-[#9cdcfe] text-center">{images[index].caption}</p>
    </>
  );
};

export default Carousel;
