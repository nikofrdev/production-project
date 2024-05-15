import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import { Navbar} from "./Navbar";
import { Sidebar } from "widjets/Sidebar/ui";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers";

function App() {
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
}

export default App;
