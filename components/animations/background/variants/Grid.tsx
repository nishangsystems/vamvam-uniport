const Grid = () => {
  return (
    <div
      className="absolute inset-0 animate-grid-scroll"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(234, 179, 8) 1px, transparent 1px), linear-gradient(to bottom, rgb(234, 179, 8) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
};

export default Grid;