import React from "react";
import { Skeleton } from "../ui/Skeleton";

const TabSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 flex flex-col gap-4">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <div className="flex items-center space-x-4" key={i}>
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </div>
          ))}
      </div>
      <div className="col-span-2">
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
};

export default TabSkeleton;
