import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [index]);

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
        <button className="text-2xl text-[#ffd700] self-stretch hover:bg-[#d4d4d4] active:bg-[#d4d4d4]" onClick={goLeft}>
          <p>&lt;-</p>
        </button>
        <div className="relative">
          {isVideo(images[index].path) ? (
            <video
              key={index}
              src={images[index].path}
              onClick={() => setIsModalOpen(true)}
              onWaiting={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              autoPlay
            />
          ) : (
            <img key={index} src={images[index].path} onClick={() => setIsModalOpen(true)} onLoad={() => setIsLoading(false)} />
          )}
          {isLoading && <div className="absolute inset-0 p-16 flex justify-center items-center bg-[#1e1e1e]" />}
        </div>
        <button className="text-2xl text-[#ffd700] self-stretch hover:bg-[#d4d4d4] active:bg-[#d4d4d4]" onClick={goRight}>
          <p className="text-nowrap">-&gt;</p>
        </button>
      </div>
      <p className="my-2 text-[#9cdcfe] text-center">{images[index].caption}</p>
    </>
  );
};

export default Carousel;
