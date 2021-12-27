import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { signIn } from "next-auth/client";
import plusImage from "../public/favicon.png";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={plusImage}
        hiehgt="700"
        width="550"
        objectFit="contain"
      ></Image>
      <h1 className="ml-2 text-gray-700 text-3xl">Docinator</h1>
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
