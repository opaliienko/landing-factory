const Hero = ({ content }) => {
  return (
    <section
      className={
        "w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      }
      style={{ backgroundImage: `url(${content.imageUrl})` }}
    >
      <div className="container mx-auto text-center text-black">
        <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl mb-6">{content.subtitle}</p>
        <button className="hero__button px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
          {content.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
