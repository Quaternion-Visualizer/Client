import { useNavigate, Link } from 'react-router-dom';

const Hero = ()=> {
  const navigate = useNavigate();

  return (
    <section id="hero" className="h-full w-full pb-32">
      <div
        className="flex justify-center items-center w-full h-[calc(100vh_*_.66)] bg-cover text-white"
        style={{backgroundImage: "radial-gradient(rgba(13, 17, 23, 0.2), rgba(13, 17, 23, 0.75)),url(/blender-cropped.jpg)"}}
      >
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-6xl">Cub3D.JS</h1>
          <h2 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-4 text-[#121212]">
              <div className="">
                <button
                  className="px-10 py-2 bg-[#c997ff] rounded-lg text-lg text-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/register');
                  }}
                  >
                  Register
                </button>
              </div>

              <button
                className="px-10 py-2 bg-[#02dac3] rounded-lg text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/sign-in');
                }}
              >
                Sign In
              </button>
            </div>
            <div>
              <Link to="/demo" className="underline text-sm text-darkmode-text-imp2 hover:text-white">Or Continue for Free</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// <img src="blender-sphere-bg.jpg" className="object-cover w-full h-[calc(100vh_*_.66)]"></img>
// {backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.75)),url(/blender-sphere-bg.jpg)"}

// "radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.75)),url(/blender-cropped.jpg)"

// 17151A
// 81818F