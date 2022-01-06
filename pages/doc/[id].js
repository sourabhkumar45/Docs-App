import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { firestore } from "../../firebase";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { useSession, signOut, signIn } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

import Login from "../../components/Login";

function Doc() {
  const [session] = useSession();
  const router = useRouter();

  if (!session) return <Login />;
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
        >
          <Icon name="description" size="5xl" color="green" />
        </span>
      </header>
    </div>
  );
}

export default Doc;
