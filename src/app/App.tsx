import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers";
import { AppRouter } from "./providers/router";
import { Navbar } from "widjets/Navbar";
import { Sidebar } from "widjets/Sidebar/ui";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
