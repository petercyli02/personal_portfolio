import { useState } from "react";
import MediaDisplay from "./MediaDisplay";


interface Props {
  images: {
    path: string;
    caption: string;
  }[];
}

const Carousel = ({ images }: Props) => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goLeft = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const goRight = () => {
    setIndex((index + 1) % images.length);
  };

  const isVideo = (path: string) => path.endsWith('.mp4');

  if (isModalOpen) {
    return (
      <MediaDisplay path={images[index].path} goLeft={goLeft} goRight={goRight} setIsModalOpen={(isModalOpen: boolean) => setIsModalOpen(isModalOpen)} caption={images[index].caption} />
    );
  }

  return (
    <>
      <div className="flex justify-center items-center gap-2 ml-6">
        <button className="text-2xl text-[#ffd700] py-8 hover:bg-[#d4d4d4] active:bg-[#d4d4d4]" onClick={goLeft}>
          <p>&lt;-</p>
        </button>
        {isVideo(images[index].path) ? (
          <video
            src={images[index].path}
            onClick={() => setIsModalOpen(true)}
            autoPlay
          />
        ) : (
          <img src={images[index].path} onClick={() => setIsModalOpen(true)} />
        )}
        <button className="text-2xl text-[#ffd700] py-8 hover:bg-[#d4d4d4] active:bg-[#d4d4d4]" onClick={goLeft}>
          <p className="text-nowrap">-&gt;</p>
        </button>
      </div>
      <p className="my-2 text-[#9cdcfe] text-center">{images[index].caption}</p>
    </>
  );
};

export default Carousel;
