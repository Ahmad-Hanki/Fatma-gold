const MainHeaderReverse = () => {
  return (
    <div className="absolute h-[35vh] top-0 left-0 w-full overflow-hidden bg-transparent z-[-1] p-0 m-0">
      <svg
        className="absolute bottom-0 right-0 w-full h-[50vh]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'gold', stopOpacity: '1' }} />
            <stop offset="100%" style={{ stopColor: 'gold', stopOpacity: '0.3' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default MainHeaderReverse;
