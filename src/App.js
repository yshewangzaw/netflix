import React, { useState } from 'react';
import './App.css';
import YouTube from 'react-youtube';

const HomePage = () => {
  

  const backgroundImage = process.env.PUBLIC_URL + '/image/background.jpeg';
  const VideoId = 'sY2djp46FeY'; 
  const phoneImage = process.env.PUBLIC_URL + '/image/mobile.jpg';
  const kidsProfileImage = process.env.PUBLIC_URL + '/image/kidsProfileImage.png';

  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <div className="home-page bg-gray-800">
  
      <div
       
      className="relative h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className=" overlay text-white flex justify-between items-center p-8 mb-auto ">
        <div className="flex items-center">
          <h1 className="text-5xl font-bold mb-0 mr-4 text-red-500 px-4 py-2 ">Netflix</h1>
        </div>
          <div className="ml-auto">
            <button className="bg-red-500 px-2 py-2 btn hover:bg-blue-600">Sign Up</button>
          </div>
        </div>
        <div className="content-container flex justify-center p-8 relative mb-6">
          <div className="content text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Unlimited movies, TV shows, and more</h1>
            <p className="mb-4 text-white">Watch anywhere. Cancel anytime.</p>
            <p className="mb-4 text-white">
              Ready to watch? Enter your email or mobile number to create or restart your membership.
            </p>
            <div className="flex justify-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-white w-64 px-4 py-2 rounded-l-md focus:outline-none border border-gray-300 bg-transparent"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md ml-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content-under-hero p-8 flex items-center justify-between mt-2 bg-black">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-4 ml-5">Enjoy on your TV.</h2>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="youtube-video ml-20">
          <YouTube videoId={VideoId} 
 />
        </div>
      </div>

      <div className="content-under-hero bg-black p-8 flex items-center justify-between mt-2">
        <div className="flex items-center">
          <img src={phoneImage} alt="Phone" className="w-1/2 mr-8" />
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Download your shows to watch offline.</h2>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>
      </div>

      <div className="content-under-hero bg-black p-8 flex items-center justify-center h-96 mt-2">
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-4">Watch everywhere.</h2>
          <p>Stream unlimited movies and TV shows</p>
          <p>on your phone, tablet, laptop,</p>
          <p>and TV.</p>
        </div>
      </div>

      <div className="content-under-hero bg-black p-8 flex items-center justify-between mt-2">
        <div className="flex items-center">
          <img src={kidsProfileImage} alt="Kids Profile" className="w-1/2 mr-8" />
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Create profiles for kids.</h2>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="content-under-hero bg-black p-8 flex  justify-center h-auto mt-2">
        <div className="text-white w-full">
          <h2 className="text-2xl font-bold mb-4 item-center">Frequently Asked Questions</h2>
          <button
            className="w-full bg-gray-700 p-8 text-left font-bold mb-2 rounded justefy-center ${
              activeIndex === 0 ? 'bg-gray-600' :"
              onClick={() => handleFAQClick(0)}
              >
            What is Netflix? {activeIndex === 0 ? (
    <span className="float-right">X</span>
  ) : (
    <span className="float-right">+</span>
  )}
          </button>
          {activeIndex === 0 && (
            <p className="mb-4">
             Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </p>
          )}
          <button
            className="w-full bg-gray-700 p-8 text-left font-bold mb-2 rounded  ${
              activeIndex === 1 ? 'bg-gray-600' :"
              onClick={() => handleFAQClick(1)}
              >
            How much does Netflix cost? {activeIndex === 1 ? (
     <span className="float-right">X</span>
  ) : (
    <span className="float-right">+</span>
  )}
          </button>
          {activeIndex === 1 && (
            <p className="mb-4">
             Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.
            </p>
          )}
          <button
            className="w-full bg-gray-700 p-8 text-left font-bold mb-2 rounded  ${
              activeIndex === 2 ? 'bg-gray-600' :"
              onClick={() => handleFAQClick(2)}
              >
            Where can I watch Netflix? {activeIndex === 2 ? (
    'X'
  ) : (
    <span className="float-right">+</span>
  )}
          </button>
          {activeIndex === 2 && (
            <p className="mb-4">
             Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </p>
          )}
          <button
            className="w-full bg-gray-700 p-8 text-left font-bold mb-2 rounded  ${
              activeIndex === 3 ? 'bg-gray-600' :"
              onClick={() => handleFAQClick(3)}
              >
            How do I cancel? {activeIndex === 3 ? (
    <span className="float-right">X</span>
  ) : (
    <span className="float-right">+</span>
  )}
          </button>
          {activeIndex === 3 && (
            <p className="mb-4">
             Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </p>
          )}
          <button
          
            className="w-full bg-gray-700 p-8 text-left font-bold mb-2 rounded  ${
              activeIndex === 4 ? 'bg-gray-600' : "
              onClick={() => handleFAQClick(4)}
              >
            What Can I Watch On Netflix {activeIndex === 4 ? (
    <span className="float-right">X</span>
  ) : (
    <span className="float-right">+</span>
  )}
          </button>
          {activeIndex === 4 && (
            <p className="mb-4">
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </p>
          )}
          <button
            className="w-full bg-gray-700 p-8 text-left font-bold mb-2 rounded  ${
              activeIndex === 5 ? 'bg-gray-600' :"
              onClick={() => handleFAQClick(5)}
              >
          Is Netflix Good For Kids {activeIndex === 5 ?(
    <span className="float-right text-bold">X</span>
  ) : (
    <span className="float-right">+</span>
  )}
          </button>
          {activeIndex === 5 && (
            <p className="mb-4">
               The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </p>
          )}
          <div className="content-container flex justify-center p-8 relative mb-6">
          <div className="content text-center">
          
            <p className="mb-4 text-white">
              Ready to watch? Enter your email or mobile number to create or restart your membership.
            </p>
            <div className="flex justify-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-white w-64 px-4 py-2 rounded-l-md focus:outline-none border border-gray-300 bg-transparent"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md ml-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
</div>
      </div>
      <footer>
  <div className="footer-content bg-black text-white mt-1">
    <div className="footer-links  font-light font-thin underline text-sm">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-20  pb-5 pt-5">
        <li><a href="#">Questions? Contact us.</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Speed Test</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Only on Netflix</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-copyright ml-20 pb-10">
      <p>&copy;Netflix Ethiopia</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default HomePage;