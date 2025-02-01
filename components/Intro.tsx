import Navigation from './Navigation';

const Intro = () => {
  return (
    <section className="intro__wrapper">
      <Navigation />
      <div className="intro">
        <div className="intro__content">
          <div className="intro__texts">
            <h1 className="intro__name">Shashank Neupane</h1>
            <p className="intro__job intro__job-main">
              Full Stack Web Developer
            </p>

            <p className="intro__job mt-2">
              Hello! I&apos;m Surya Shashank Neupane a Full-Stack Web Developer based in Nepal who
              loves bringing ideas to life through design and code.
            </p>

            
          </div>
          <div className="intro__image">
            <img
              width="795"
              height="796"
              src="/images/profile.png"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
