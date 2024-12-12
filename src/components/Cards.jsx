import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const images = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
  ];

  useGSAP(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 10%",
          end: "bottom 10%",
          scrub: true,
        },
      });
    });
  });
  return (
    <main className="w-full text-white flex flex-col gap-5 items-center pt-[-10vh] pb-[15vh] max-sm:pb-0">
      <div className="card sticky top-[5vh] text-center h-[37vw] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#2E241D] max-sm:w-[95vw] max-sm:h-screen">
        <img className="w-[150px] max-sm:w-[300px]" src="./img/1.png" alt="" />
        <h1 className="text-5xl card-heading max-sm:mt-32">
          The <br />
          <span className="font-bold">Algorithm</span>
        </h1>
        <p className="font-thin">
          The algorithm's workings are shrouded in complexity.
        </p>
      </div>
      <div className="card sticky top-[5vh] text-center h-[37vw] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#42392F] max-sm:w-[95vw] max-sm:h-screen">
        <img className="w-[150px] max-sm:w-[300px]" src="./img/2.png" alt="" />
        <h1 className="text-5xl card-heading max-sm:mt-32">
          The <br />
          <span className="font-bold">Dogma</span>
        </h1>
        <p className="font-thin">
          Enshrining the principles of conformity and reinforcing the status
          quo.
        </p>
      </div>
      <div className="card sticky top-[5vh] text-center h-[37vw] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#2E241D] max-sm:w-[95vw] max-sm:h-screen">
        <img className="w-[150px] max-sm:w-[300px]" src="./img/3.png" alt="" />
        <h1 className="text-4xl card-heading">
          The <br />
          <span className="font-bold">Architects</span>
        </h1>
        <p className="font-thin">
          The elusive entities, lacking human form, operate in the shadows.
        </p>
      </div>
      <div className="card sticky top-[5vh] text-center h-[37vw] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#42392F] max-sm:w-[95vw] max-sm:h-screen">
        <img className="w-[150px] max-sm:w-[300px]" src="./img/4.png" alt="" />
        <h1 className="text-4xl card-heading">
          The <br />
          <span className="font-bold">Wasteland</span>
        </h1>
        <p className="font-thin">
          This overlooked realm, a consequence of algorithmic judgments.
        </p>
      </div>
      <div className="card sticky top-[5vh] text-center h-[37vw] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#2E241D] max-sm:w-[95vw] max-sm:h-screen">
        <img className="w-[150px] max-sm:w-[300px]" src="./img/5.png" alt="" />
        <h1 className="text-4xl card-heading">
          The <br />
          <span className="font-bold">Narrative</span>
        </h1>
        <p className="font-thin">
          The collective story sculpted by the architects.
        </p>
      </div>
      <div className="card sticky top-[5vh] text-center h-[37vw] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-[#42392F] max-sm:w-[95vw] max-sm:h-screen">
        <img className="w-[150px] max-sm:w-[300px]" src="./img/6.png" alt="" />
        <h1 className="text-4xl card-heading">
          The <br />
          <span className="font-bold">Opulence</span>
        </h1>
        <p className="font-thin">
          The cognitive elite's wealth in the algorithmic society.
        </p>
      </div>
    </main>
  );
};

export default Cards;
