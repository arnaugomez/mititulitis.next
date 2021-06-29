import MaxWidth from "../atoms/MaxWidth";
import Button from "../atoms/Button";

interface HeaderProps {}

const Header = (props: HeaderProps): JSX.Element => (
  <header className="sticky w-full px-4 py-2.5 bg-stone text-white">
    <MaxWidth className="flex justify-between items-stretch">
      <h1 className="flex items-center">MiTitulitis.com</h1>
      <div className="flex justify-between items-stretch space-x-3">
        <Button variant="secondary-white">Log in</Button>
        <Button variant="white" className="text-stone">
          Join
        </Button>
      </div>
    </MaxWidth>
  </header>
);

export default Header;
