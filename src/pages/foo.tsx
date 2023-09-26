import { useTheme } from "@/hooks/use-theme";

export default function FooPage() {
  const { setTheme } = useTheme();

  return (
    <div>
      <h1>Foo</h1>
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
