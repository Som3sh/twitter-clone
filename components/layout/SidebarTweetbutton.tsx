import exp from "constants";
import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SidebarTweetbutton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div
        className="
      mt-6
      lg:hidden
      rounder-full
      h-14
      w-14
      p-4
      flex
      items-center
      justify-center
      bg-sky-80
      transition
      cursor-pointer
      "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="mt-6
      hidden
      lg:block
      px-4
      py-2
      rounded-full
      bg-sky-500
      hover:bg-opacity-90
      curson-pointer
      transition
      "
      >
        <p
          className="
        hidden
        lg:block
        text-center
        font-semibold
        text-white
        text-[20px]

        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};
export default SidebarTweetbutton;
