const Header = () => {
  return (
    <>
      <div className="overflow-hidden h-screen w-full">
        <h2 className="power absolute max-sm:z-10 text-white example px-[35px] top-[300px]">
          <i>The</i> Narrative
          <p className="ml-[36.5em] max-sm:ml-0">
            An exploration of the Synthetic Era.
          </p>
        </h2>
        <img
          className="px-[450px] py-[120px] left-[700px] relative max-sm:p-0 max-sm:left-0 max-sm:top-[100px] max-sm:ml-[200px]"
          src="/img/2.png"
          alt=""
        />
      </div>
      <div className="h-[70vh] w-full px-[25vh] mt-[170px] text-white max-sm:h-[65vh] max-sm:px-[5vh] max-sm:py-0 max-sm:mt-0 ">
        <p className="text-large max-sm:text-[9.5vw]">
          As data conglomerates reveled in the opulence of cognitive wealth, a
          silent underclass manifested, condemned to the digital periphery.
        </p>
      </div>
    </>
  );
};

export default Header;
