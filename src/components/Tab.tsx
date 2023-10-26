import React from "react";
import TabSkeleton from "@/components/shells/TabSkeleton";

interface TabProps {
  path: string;
}

const Tab: React.FC<TabProps> = ({ path }) => {
  const Component = React.lazy(() => import(`@/${path}`));

  return (
    <React.Suspense fallback={<TabSkeleton />}>
      <Component />
    </React.Suspense>
  );
};

export default Tab;
