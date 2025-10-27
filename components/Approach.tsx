"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-center text-[40px] font-bold md:text-5xl lg:text-6xl">
        My <span className="text-purple-300">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card
          title="Planning and Strategy"
          des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          icon={<AceternityIcon order="Phase 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          icon={<AceternityIcon order="Phase 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          icon={<AceternityIcon order="Phase 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [isActive, setIsActive] = React.useState(false);

  // Toggle state for click/tap on mobile
  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  // Detect if device is likely mobile based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onClick={isMobile ? handleToggle : undefined}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] rounded-3xl relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 w-full mx-auto flex items-center justify-center ${
            isActive ? "opacity-0 -translate-y-4" : "opacity-100"
          }`}
        >
          {icon}
        </div>
        <h2
          className={`text-center dark:text-white text-3xl relative z-10 text-black mt-4 font-bold transition duration-200 ${
            isActive ? "opacity-100 -translate-y-2 text-white" : "opacity-0"
          }`}
        >
          {title}
        </h2>
        <h2
          className={`text-sm text-center dark:text-white relative z-10 text-black mt-4 font-bold transition duration-200 ${
            isActive ? "opacity-100 -translate-y-2 text-white" : "opacity-0"
          }`}
          style={{ color: "#efecff" }}
        >
          {des}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

type IconProps = React.SVGProps<SVGSVGElement>;

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
