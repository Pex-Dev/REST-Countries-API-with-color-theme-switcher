import ButtonTheme from "./ButtonTheme";
export default function Header() {
  return (
    <header className="bg-white dark:bg-dark-mode-elements py-6 shadow transition-colors">
      <div className="flex justify-between max-w-[1440px] mx-auto px-5">
        <h1 className="font-nunito-sans font-bold text-xl md:text-2xl dark:text-white">
          Where in the world?
        </h1>
        <ButtonTheme />
      </div>
    </header>
  );
}
