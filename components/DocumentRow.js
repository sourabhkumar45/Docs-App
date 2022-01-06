import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <div
      className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer"
      onClick={() => router.push(`/doc/${id}`)}
    >
      <Icon name="article" size="3xl" color="green"></Icon>
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toDateString()}</p>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
      ></Button>
    </div>
  );
}

export default DocumentRow;
