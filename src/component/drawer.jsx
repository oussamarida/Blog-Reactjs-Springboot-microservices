import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useStateContext } from "../../context/context";
import { Avatar } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { 	PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function DialogSizes() {
  const { size, handleOpen, listcommante } = useStateContext();

  return (
    <>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "xl"}
        handler={handleOpen}
      >
        <DialogHeader className="flex flex-row justify-between">
          <div>Commentaire:</div>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen({ size: null, commentaire: null })}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogHeader>
        <DialogBody className="flex flex-col gap-2 overflow-auto ">
          {listcommante?.map((com, index) => (
            <div key={index} className="flex flex-row gap-2">
              <Avatar src={com.user.image} alt="avatar" />
              <div className="flex flex-col">
                <h1 className="text-black font-bold text-md">
                  {com.user.name}
                </h1>
                <h1 className="text-gray-400 text-sm">{com.commentaire}</h1>
              </div>
            </div>
          ))}
        </DialogBody>
        <DialogFooter> 
          <div className="w-full flex flex-row justify-center items-center">
            <Input
              label="write your idea about the blog"
            />
            <Button className="bg-transparent ">
             <	PaperAirplaneIcon className="text-red-400"  width={25} height={25} />
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}
