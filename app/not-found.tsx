import NotFoundContent from "@/app/components/NotFoundContent";

export const metadata = {
  title: "404 - Seite nicht gefunden | Elkaza",
  description: "Die angeforderte Seite wurde nicht gefunden.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
