"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ListDesign = ({ list }: any) => {
	useGSAP(() => {
		gsap.fromTo(
			".list",
			{ y: -20, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.05,
				scrollTrigger: {
					trigger: ".scroll-div",
					start: "top bottom",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<>
			<div className="w-11/12 mx-auto mt-2 scroll-div lg:w-9/12">
				<ul className="flex flex-wrap justify-center gap-8">
					{list.map((li: string, i: any) => (
						<li key={i} className="py-1 px-4 rounded-full shadow-lg list">
							{li}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ListDesign;
