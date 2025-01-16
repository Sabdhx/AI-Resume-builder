import React, { useEffect, useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";
import { createNewResume } from "../../../services/GlobalApi";


type ResumeData = {
  data: {
    title: string;
    ResumeId: string;
    UserEmail: string | undefined;
    userName: string | null | undefined;
  };
};
function AddResume() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const dataFetching = async () => {
      
    };

    dataFetching(); // Execute the fetch function
  }, [Data]);

  const onCreate = async () => {
    const id = uuidv4();
    setLoading(true);
  
    const ResumeData:ResumeData = {
      data: {
        title: title,
        ResumeId: id,
        UserEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };
  createNewResume(ResumeData).then(
      (res) => {
        console.log(res);
        if (res) {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error)
        setLoading(false);
      }
    );
  };
  


  return (
    <div>
      <div className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all duration-400 hover:shadow-md cursor-pointer border-dashed">
        <PlusSquare onClick={() => setOpen(true)} />
      </div>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p className="my-2"> Add a scale for your new Resume</p>
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5 py-3">
              <Button onClick={onCreate} disabled={!title || loading}>
                {loading ? <Loader2 className="animate-spin" /> : "create"}
              </Button>
              <Button onClick={() => setOpen(false)}>cancel</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
