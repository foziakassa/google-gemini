export default function ProductList({ imag, title, des }: any) {
    return (
      <div className="relative flex w-100 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-10 shadow-2xl ;">
        <div
          className="relative mx-4 -mt-6 h-90 overflow-hidden rounded-xl text-white shadow-lg bg-cover bg-center"
         
        >
          {/* Your content goes here */}
          <img className="full object-fill h-100 w-96" src={imag.src}  alt="Bonnie Green image"/>
  
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
         
        </div>
        <div className="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </button>
        </div>
      </div>
    );
  }