const Orbs = () => (
  <>
    {/* Yellow Orb */}
    <div
      className="
        absolute 
        top-20 
        left-10 
        w-72 
        h-72 
        rounded-full 
        bg-yellow-200/20
        blur-3xl
        mix-blend-multiply
        animate-float1
      "
    />

    {/* Dark Orb */}
    <div
      className="
        absolute 
        top-40 
        right-10 
        w-96 
        h-96 
        rounded-full 
        bg-gray-900/10
        blur-3xl
        mix-blend-multiply
        animate-float2
      "
    />
  </>
);

export default Orbs;