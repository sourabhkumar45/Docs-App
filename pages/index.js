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
      <section className="bg-[#F8F9FA] pb-10 px-10">
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
            <div className="relative h-45 w-40">
              <Image
                src={plusImage}
                width={150}
                height={150}
                className="border-1 bg-white"
              />
            </div>
            <p>Blank</p>
          </div>
        </div>
      </section>
    </div>
  );
}
