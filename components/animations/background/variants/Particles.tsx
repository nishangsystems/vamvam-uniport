const PARTICLE_COUNT = 18;

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const size = random(4, 10);
        const left = random(0, 100);
        const duration = random(10, 25);
        const delay = random(0, 10);
        const opacity = random(0.1, 0.4);

        return (
          <span
            key={i}
            className="absolute w-2 h-2 bg-primary-600 rounded-full opacity-0 dark:opacity-10 animate-particle-bounce"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
            //   bottom: `-10%`,
            top: `${random(0, 60)}%`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;