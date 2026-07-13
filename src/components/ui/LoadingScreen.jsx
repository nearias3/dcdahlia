import { useEffect, useState } from "react";

const LOADING_DURATION = 5000;

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem("case-file-opened") !== "true";
  });

  useEffect(() => {
    if (!isVisible) return undefined;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("case-file-opened", "true");
      setIsVisible(false);
    }, LOADING_DURATION);

    return () => window.clearTimeout(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Opening confidential case file"
    >
      <div className="loading-screen__file">
        <p className="loading-screen__stamp">CONFIDENTIAL</p>

        <h1>D.C. Dahlia Archives</h1>

        <p className="loading-screen__status-label">Case File Status</p>

        <p className="loading-screen__status">Opening Investigation...</p>

        <div className="loading-screen__progress" aria-hidden="true">
          <span />
        </div>

        <p className="loading-screen__footer">Authorized Personnel Only</p>
      </div>
    </div>
  );
}
