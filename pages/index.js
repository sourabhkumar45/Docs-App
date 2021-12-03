import Head from "next/head";
import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Header from "../components/Header";
import plusImage from "../public/assets/images/plus-icon.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Docinator</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
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
            <div className="relative flex items-center justify-center h-45 w-40 hover:shadow-md bg-white">
              <Image
                src={plusImage}
                width={150}
                height={150}
                className="border-1 bg-white"
              />
            </div>
            <p className="ml-2 pt-2 font-semi-bold text-sm text-gray-600">
              Blank New Document
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Data Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}
