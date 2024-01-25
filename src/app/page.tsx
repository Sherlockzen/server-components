import Image from "next/image";
import { ImageList } from "./components/ImageList";
import { LoremImage } from "./components/LoremImage";
import { headers } from "next/headers";
import { unstable_noStore } from "next/cache";

type TList = TImage[];

interface TImage {
 id: number;
 author: string;
 width: number;
 height: number;
 url: string;
}

export default async function Home() {
 // unstable_noStore();
 const maxNumber = Math.floor(Math.random() * (80 - 12 + 1) + 12);
 const minNumber = maxNumber - 12;
 const list: TList = await fetch(
  `https://picsum.photos/v2/list?page=1&limit=1000`
 ).then((res) => res.json());
 console.log(maxNumber, minNumber);

 return (
  <main className=" bg-slate-500 w-[100dvw] h-screen">
   {/* <h1 className=' mx-auto my-6 text-5xl'>React Server Components</h1> */}
   <ImageList>
    {list.slice(minNumber, maxNumber + 1).map((i: TImage) => {
     return (
      <LoremImage
       key={i.id}
       id={i.id}
       author={i.author}
       width={i.width}
       height={i.height}
       url={i.url}
      />
     );
    })}
   </ImageList>
  </main>
 );
}
