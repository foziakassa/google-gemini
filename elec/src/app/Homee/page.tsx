import classes from './Home.module.css'
export default function Homee() {
  return (
    <div className={classes.home}>
      <section className="w-full">
        <div className="w-full h-[550px] relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center "
            style={{
              // backgroundImage: `url('https://i.pinimg.com/564x/67/0c/15/670c15988e6badbc4976ac42f4fa778b.jpg')`,
              backgroundImage: `url('https://i.pinimg.com/564x/67/0c/15/670c15988e6badbc4976ac42f4fa778b.jpg')`,


            }}
          >
            <div className="absolute top-0 left-0 w-full h-full inset-0 bg-gradient-to-t from-black via-black/80"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
              {/* Discover Your New Home */}
              Powering Your Digital Life
            </h1>
            <h1
            style={{
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
              animation: 'float 2s infinite',
            }}
             className=" mb-12 mx-20 my-7 animate__animated text-white text-center xl:text-3xl  md:text-3xl sm:text-2xl xs:text-xl font-semibold  p-2 bg-opacity-40 rounded-sm">Trust us to
               keep your devices running smoothly and efficiently</h1>

               
            
        <div className="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6">
          <div className="rounded-full shadow">
            <button
              type="button"
              className=" my-7 flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-teal-400 border border-transparent rounded-full text-md hover:bg-teal-300 md:py-4 md:text-2xl md:px-10"
            >
              Start with us
            </button>
          </div>
        </div>
            <form>
              <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 mx-4">
                {/* <input
                  type="text"
                  className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                  placeholder="search"
                /> */}
                {/* <button
                  type="submit"
                  className="px-[10px] p-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
                >
                  Search
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    // <div className="">
    //   <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full h-[430px] relative">
    //     <img
    //       src="https://i.pinimg.com/564x/67/0c/15/670c15988e6badbc4976ac42f4fa778b.jpg"
    //       alt="University of Southern California"
    //       className="absolute inset-0 h-full w-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    //     <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
    //     <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
    //       City of love
    //     </div>
    //   </article>
    // </div>
  );
}
