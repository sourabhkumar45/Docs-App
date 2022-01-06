import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { signIn } from "next-auth/client";
import plusImage from "../public/favicon.png";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Image
        src={plusImage}
        hiehgt="700"
        width="550"
        objectFit="contain"
      ></Image>
      <h1 className="mt-10 text-gray-700 text-3xl">Docinator</h1>
      <Button
        className="w-54 mt-10"
        color="green"
        rounded={true}
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login with Google
      </Button>
    </div>
  );
}

export default Login;
