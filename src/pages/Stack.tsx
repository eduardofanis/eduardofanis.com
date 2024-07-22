import AnimatedContainer from "@/components/animated-container";
import { useTranslation } from "react-i18next";

export default function Stack() {
  const [t] = useTranslation("global");

  return (
    <AnimatedContainer className="mt-6">
      <h1 className="font-medium text-3xl mb-8">{t("stack.title")}</h1>
    </AnimatedContainer>
  );
}
