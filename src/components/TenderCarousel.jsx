import { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const TenderCarousel = () => {
	const TenderSlides = [
        "./Tender/Home_Page.png",
        "./Tender/filter.png",
        "./Tender/restaurants.png",
        "./Tender/users.png",
        "./Tender/Like_Dislike_Save.png",
        "./Tender/Review.png"
    ];
	
	const [current, setCurrent] = useState(0);

	const prevSlide = () => {
		if (current === 0) {
			setCurrent(TenderSlides.length - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	const nextSlide = () => {
		if (current === TenderSlides.length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};

	return (
		<div className="overflow-hidden relative">
			<div
				className={`flex transition ease-out duration-400`}
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{TenderSlides.map((s, idx) => {
					return <img key={idx} src={s} alt="project images"/>;
				})}
			</div>

			<div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-4xl">
				<button onClick={prevSlide}>
					<FaCircleArrowLeft></FaCircleArrowLeft>
				</button>
				<button onClick={nextSlide}>
					<FaCircleArrowRight></FaCircleArrowRight>
				</button>
			</div>

			<div className="flex absolute bottom-0 justify-center py-3 w-full gap-5">
				{TenderSlides.map((s, idx) => {
                    return <div onClick={()=> {setCurrent(idx)}} key={"circle" + idx} className={`rounded-full w-5 h-5 cursor-pointer ${ idx == current ? "bg-white" : "bg-gray-400"}`}></div>
                })}
			</div>
		</div>
	);
};

export default TenderCarousel;
