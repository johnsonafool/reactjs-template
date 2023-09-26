import { useTheme } from "@/hooks/use-theme";
import { useTranslation } from "react-i18next";

export default function FooPage() {
  const { setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("lang")}</h1>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
    </div>
  );
}
