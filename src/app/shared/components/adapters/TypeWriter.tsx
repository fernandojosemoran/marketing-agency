import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const handleType = () => {};
  const handleDone = () => {};

  return (
    <Typewriter
      words={[
        "Brand with Nexus Marketing",
        "Influence with Elevate Agency.",
        "Growth with Momentum Creatives.",
        "Presence with Spark Strategies.",
      ]}
      loop={0}
      cursor={true}
      cursorStyle="_"
      typeSpeed={120}
      deleteSpeed={80}
      delaySpeed={1500}
      cursorBlinking={true}
      onLoopDone={handleDone}
      onType={handleType}
    ></Typewriter>
  );
};

export default TypeWriter;
