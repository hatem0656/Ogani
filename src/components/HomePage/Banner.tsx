function Banner() {
  return (
    <div className="md:container mt-8 flex px-7 relative z-10">
      <div className="lg:w-[23%] lg:block hidden"></div>
      <div className="flex-1 lg:ml-6 py-10 px-16 bg-auto bg-center bg-hero-banner lg:h-[430px] h-[400px] flex flex-col justify-center">
        <span className="block uppercase text-primary text-sm font-semibold  tracking-widest">
          Fruit Fresh
        </span>
        <h2 className="text-5xl font-bold mt-4">
          Vegatable
          <br />
          100% organic
        </h2>
        <p className="text-gray-600 font-light text-md mt-3">
          Free Pickup and Delivery Available
        </p>
        <button className=" w-fit text-md bg-primary text-white uppercase font-semibold py-3 px-8 mt-7">
          shop now
        </button>
      </div>
    </div>
  );
}

export default Banner;
