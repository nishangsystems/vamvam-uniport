
const Waves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div
        className="
          absolute
          top-0
          left-[-90%]
          w-[80%]
          h-68
          animate-wave
        "
      >
        <div
          className="w-full h-full"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(234,179,8,0.15) 0%,
                rgba(234,179,8,0.15) 65%,
                                transparent 100%
              )
            `,
          }}
        />
      </div>

    </div>
  );
};

export default Waves;