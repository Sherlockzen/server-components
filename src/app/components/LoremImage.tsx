import Image from "next/image";

export function LoremImage({ id, author, width, height, url }:
  { id: number, author: string, width: number, height: number, url: string }) {
  return (
    <li className=" flex flex-col max-w-[13rem] items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3">
      <Image
        src={`https://picsum.photos/id/${id}/5000/3333`}
        width={96}
        height={96}
        alt={author}
      />
      {author}
    </li>
  )
};