import dynamic from "next/dynamic";

export const OrbStage = dynamic(
  () => import("@/components/orb3d/OrbScene").then((mod) => mod.OrbScene),
  {
    ssr: false,
    loading: () => <div className="orb-fallback h-full min-h-[280px] rounded-full" />,
  },
);
