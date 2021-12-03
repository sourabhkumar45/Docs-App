import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
//import { signIn } from "next-auth/client";
import plusImage from "../public/favicon.png";

function Login() {
  return (
    <div>
      <Image
        src={plusImage}
        hiehgt="700"
        width="550"
        objectFit="contain"
      ></Image>
    </div>
  );
}

export default Login;
