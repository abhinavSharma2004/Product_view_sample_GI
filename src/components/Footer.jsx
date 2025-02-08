const Footer = ({ companyName }) => {
  return (
    <footer className="bg-[#1DA5B1] text-white text-xl p-4 text-center">
      <p
        className="text-xl cursor-pointer "
        onClick={() => window.open("https://www.growindigo.co.in/")}
      >
        {companyName}
      </p>

      <div className="text-sm flex justify-center space-x-2 mt-2">
        <i
          className="fa-brands fa-x-twitter text-white text-xl transition-transform duration-200 hover:scale-120 cursor-pointer"
          onClick={() =>
            window.open("https://x.com/GrowIndigo/status/1676922715448410114")
          }
        ></i>

        <i
          className="fa-brands fa-square-facebook text-white text-xl transition-transform duration-200 hover:scale-120 cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/GrowindigoBiological/")
          }
        ></i>

        <i
          className="fa-brands fa-linkedin text-white text-xl transition-transform duration-200 hover:scale-120 cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/growindigo.co.in/?hl=en")
          }
        ></i>
      </div>
    </footer>
  );
};

export default Footer;
