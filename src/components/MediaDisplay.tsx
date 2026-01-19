import CloseIcon from '../icons/CloseIcon';
import RightArrowIcon from '../icons/RightArrowIcon';
import LeftArrowIcon from '../icons/LeftArrow';
import { useEffect } from 'react';

interface Props {
    path: string;
    goLeft: () => void;
    goRight: () => void;
    setIsModalOpen: (isModalOpen: boolean) => void;
    caption: string;
}

const MediaDisplay = ({ path, goLeft, goRight, setIsModalOpen, caption }: Props) => {
    const isVideo = path.endsWith('.mp4');
    const isMobilePortrait = window.innerWidth < 768 && window.innerHeight > window.innerWidth;


    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [setIsModalOpen]);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#1e2127] z-10 flex"
            style={isMobilePortrait ? {
                transform: 'rotate(90deg)',
                transformOrigin: 'center center',
                width: '100vh',
                height: '100vw',
                position: 'fixed',
                top: '50%',
                left: '50%',
                marginTop: '-50vw',
                marginLeft: '-50vh',
            } : {}}
        >
            {/* Close button - responsive size: 28px on small, 36px on md, 48px on lg */}
            <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2 text-[#7b88a1] hover:bg-[#5a5d5e] active:bg-[#5a5d5e] active:scale-95 rounded-lg transition-all"
                onClick={() => setIsModalOpen(false)}
            >
                <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12">
                    <CloseIcon />
                </div>
            </button>

            <div className="flex flex-[5] justify-center items-center">
                {/* Left arrow - responsive size */}
                <button
                    onClick={goLeft}
                    className="p-2 sm:p-3 md:p-4 py-8 sm:py-10 md:py-12 mx-1 sm:mx-2 text-[#7b88a1] hover:bg-[#5a5d5e] active:bg-[#5a5d5e] active:scale-95 rounded-lg transition-all items-center shrink-0"
                >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                        <LeftArrowIcon />
                    </div>
                </button>

                <div>
                    {isVideo ? (
                        <video src={path} className="max-w-full max-h-[90vh]" controls
                            muted
                            autoPlay
                            loop />
                    ) : (
                        <img src={path} className="max-w-full max-h-[90vh] object-contain" />
                    )}
                </div>

                {/* Right arrow - responsive size */}
                <button
                    onClick={goRight}
                    className="p-2 sm:p-3 md:p-4 py-8 sm:py-10 md:py-12 mx-1 sm:mx-2 text-[#7b88a1] hover:bg-[#5a5d5e] active:bg-[#5a5d5e] active:scale-95 rounded-lg transition-all items-center shrink-0"
                >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                        <RightArrowIcon />
                    </div>
                </button>
            </div>

            <div className="flex-[1] flex items-center bg-[#191c22] p-4 sm:p-6 md:p-8">
                <p className="text-xs sm:text-sm md:text-md leading-relaxed text-[#7b88a1]">
                    {caption}
                </p>
            </div>
        </div>
    )
}

export default MediaDisplay;
