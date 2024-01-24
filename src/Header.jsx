import HeaderBackground from "./HeaderBackground";

export default function Header() {
  return (
    <div>
        <header>
          <HeaderBackground />
          <h1 className="first-heading">Word<span className="first-heading--thin">Analytics</span></h1>
        </header>
    </div>
  );
}
