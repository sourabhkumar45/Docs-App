import { useState } from "react";
import Image from "next/image";
import { getSession, useSession } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import "firebase/firestore";
import { firestore } from "../firebase";
import firebase from "firebase/app";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import plusImage from "../public/assets/images/plus-icon.png";
import Header from "../components/Header";
import Login from "../components/Login";
import DocumentRow from "../components/DocumentRow";

export default function Home() {
  const [session] = useSession(); // session is null if not logged in

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");
  const [snapshot] = useCollectionOnce(
    firestore
      .collection("userDocs")
      .doc(session?.user.email)
      .collection("docs")
      .orderBy("timeStamp", "desc")
  );
  // We will run into error if we put these hooks below if(!session statement) statement
  // for more details
  // https://stackoverflow.com/questions/57397395/react-has-detected-a-change-in-the-order-of-hooks-but-hooks-seem-to-be-invoked
  // https://reactjs.org/docs/hooks-rules.html
  if (!session) {
    return <Login />;
  }
  const createDocument = () => {
    if (!input) return;

    firestore
      .collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .add({
        fileName: input,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput("");
    setShowModal(false);
  };

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none w-full border-10"
          placeholder="Enter name of the
          Document..."
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        ></input>
      </ModalBody>
      <ModalFooter>
        <Button
          color="yellow"
          buttonType="link"
          onClick={() => setShowModal(false)}
          ripple="black"
        >
          Cancel
        </Button>
        <Button color="yellow" onClick={() => createDocument()} ripple="light">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  );
  return (
    <div>
      {modal}
      <Header></Header>
      <section className="bg-[#F8F9FA] pb-10 px-10 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new Document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            <div
              onClick={() => setShowModal(true)}
              className="relative flex items-center justify-center h-45 w-40 hover:shadow-md bg-white"
            >
              <Image
                src={plusImage}
                width={150}
                height={150}
                className=" bg-white border-0 hover:!bg-[#bdc1c6] rounded-full"
              />
            </div>
            <p className="ml-2 pt-2 font-semi-bold text-sm text-gray-600">
              Blank New Document
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0 ">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Data Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
          {snapshot?.docs.map((doc) => {
            console.log(doc.data().fileName);
            return (
              <DocumentRow
                key={doc.id}
                id={doc.id}
                fileName={doc.data().fileName}
                date={doc.data().timeStamp}
              ></DocumentRow>
            );
          })}
        </div>
      </section>
    </div>
  );
}

//
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
