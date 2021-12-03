import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center w-screen px-4 py-2 h-18 shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        className="hidden md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="article" size="5xl" color="yellow"></Icon>
      <h1 className="ml-2 text-gray-700 text-3xl ">Docinator</h1>
      <div className="md:mx-20 flex flex-grow items-center px-5 py-2 mx-5 bg-gray-100 text-gray-500 rounded-lg text-base focus-within:shadow-md">
        <Icon name="search" size="3xl" color="yellow"></Icon>
        <input
          type="text"
          placeholder="Search"
          size="3xl"
          className="flex flex-grow px-5 bg-transparent outline-none"
        ></input>
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:inline-flex ml-5 md:ml-20  h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray"></Icon>
      </Button>
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2 hidden md:inline-flex"
        src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg"
      ></img>
    </div>
  );
}

export default Header;
