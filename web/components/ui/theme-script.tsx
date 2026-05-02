export function ThemeScript() {
  const code = `
    (() => {
      try {
        const stored = localStorage.getItem("afkar-theme");
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = stored || (systemDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.dataset.theme = theme;
      } catch (error) {
        document.documentElement.classList.remove("dark");
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
