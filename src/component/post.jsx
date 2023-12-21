import { Typography } from "@material-tailwind/react";
import {
  TrashIcon,	HeartIcon ,	ChatBubbleLeftIcon
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useStateContext } from "../../context/context";
import { Tooltip } from "@material-tailwind/react";

export function ImgWithBlurredCaption({blog}) {
  const { handleOpen } = useStateContext();

  return (
    <figure className="relative h-90 w-full lg:w-1/2 shadow-lg bg-gray-200 rounded-2xl">
      <div className="absolute right-2 top-2">
      <Button className="absolute bg-transparent right-2 top-2">
        <TrashIcon width={30} className="text-black" height={30}/>
      </Button>
      </div>
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={blog.image}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
          {blog.des}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <div className="flex flex-col">
        <Typography variant="h5" color="blue-gray">
            <HeartIcon width={30} className="text-red-400" height={30}/>
        </Typography>
        <Tooltip content="Commenntaire">
        <Typography onClick={() => handleOpen({size:"md",commentaire:blog.commentaire})} variant="h5" color="blue-gray">
          <	ChatBubbleLeftIcon width={30} className="text-black" height={30}/>
        </Typography>
        </Tooltip>

        </div>
      
      </figcaption>
    </figure>
  );
}