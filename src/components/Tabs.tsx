import React from "react";
import { useSearchParams } from "react-router-dom";
import qs from "query-string";

import Tab from "./Tab";
import tabsData from "../db/tabs.json";
import { type TabData, type TabsParams } from "../types";

const Tabs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = qs.parse(
    searchParams.toString()
  ) as unknown as TabsParams;

  const [activeTab, setActiveTab] = React.useState<string>(
    currentParams.tab ?? tabsData[0].id
  );
  const [activePath, setActivePath] = React.useState<string>("");

  const handleChangeTab = React.useCallback(
    (tabId: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      setSearchParams(qs.stringify({ tab: tabId }));
    },
    []
  );

  React.useEffect(() => {
    if (!!Object.keys(currentParams).length) {
      const path = tabsData.find((tab) => tab.id === currentParams.tab)?.path;

      if (path) {
        setActivePath(path);
      }

      setActiveTab(currentParams.tab);
    } else {
      setActiveTab(tabsData[0].id);
      setActivePath(tabsData[0].path);
    }
  }, [currentParams]);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-x-4">
      <ul className="flex flex-col gap-4 col-span-1">
        {tabsData
          .sort((a, b) => a.order - b.order)
          .map((tab: TabData) => (
            <li key={tab.id}>
              <button
                onClick={handleChangeTab(tab.id)}
                className={activeTab === tab.id ? "font-semibold" : ""}
              >
                {tab.title}
              </button>
            </li>
          ))}
      </ul>
      <div className="col-span-4">
        <Tab path={activePath} />
      </div>
    </div>
  );
};

export default Tabs;
