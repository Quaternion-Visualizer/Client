
const Hero = ()=> {
  return (
    <section id="hero" className="h-full w-full">
      <div
        className="flex justify-center items-center w-full h-[calc(100vh_*_.66)] bg-cover text-white"
        style={{backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75)),url(/blender-cropped.jpg)"}}
      >
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-6xl">Lorem Ipusm</h1>
          <h2 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// <img src="blender-sphere-bg.jpg" className="object-cover w-full h-[calc(100vh_*_.66)]"></img>
// {backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.75)),url(/blender-sphere-bg.jpg)"}