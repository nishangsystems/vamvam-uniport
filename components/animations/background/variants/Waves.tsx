const Waves = ({ position = "top" }: { position?: "top" | "bottom" }) => {
  return (
    <div
      className={`absolute left-0 right-0 overflow-hidden pointer-events-none ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
    >
      <div
        className={`
          absolute
          w-[120%]
          h-32
          ${position === "top" ? "animate-wave-right" : "animate-wave-left"}
        `}
      >
        <div
          className="w-full h-full"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(234,179,8,0.15) 0%,
                rgba(234,179,8,0.15) 60%,
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