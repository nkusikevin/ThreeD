import React, { useState, useRef } from "react";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
//@ts-ignore
import AudioSpectrum from "react-audio-spectrum";

function Music() {
	const [audio, setAudio] = useState<any>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const handlePlayPause = () => {
		if (!audio) return;
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleAudioLoad = () => {
		setAudio(audioRef.current);
	};

	return (
		<div className='absolute  bottom-10 left-0 right-0 mx-auto bg-gray-800 w-[50rem] h-28 rounded  '>
			<audio ref={audioRef} src='music.mp3' onLoadedData={handleAudioLoad} />
			<div className='w-full flex items-center justify-center'>
				<TbPlayerTrackPrev className='text-white text-5xl ' />
				<button onClick={handlePlayPause}>
					{isPlaying ? (
						<BsFillPauseFill className='text-white text-5xl mx-5' />
					) : (
						<BsFillPlayFill className='text-white text-5xl mx-5' />
					)}
				</button>

				<TbPlayerTrackNext className='text-white text-5xl' />
			</div>
			<div>
				{audio && (
					<AudioSpectrum
						audioEle={audio}
						height={200}
						width={800}
						capColor={"#00e5ff"}
						capHeight={2}
						meterWidth={10}
						meterCount={80}
						meterColor={[
							{ stop: 0, color: "#f00" },
							{ stop: 0.5, color: "#0CD7FD" },
							{ stop: 1, color: "red" },
						]}
						gap={4}
					/>
				)}
			</div>
		</div>
	);
}

export default Music;
