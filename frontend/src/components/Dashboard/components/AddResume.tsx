import React, { useEffect, useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../ui/button";
import { useUser } from "@clerk/clerk-react";
import SpecificResume from "../resume/[id]/edit/SpecificResume";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import ResumeCards from "./ResumeCards";
export type ResumeData = {
  data: {
    title: string;
    ResumeId: string;
    UserEmail: string | undefined;
    UserName: string | null | undefined;
  };
};
function AddResume() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const [resume, setResume] = useState([]);
  const navigate=useNavigate()


  const getUsers =async () => {
const email=user?.primaryEmailAddress?.emailAddress
    const response = await axios.get(`http://localhost:1337/api/user-resumes?filter[email][$eq]=${email}`);
    setResume(response?.data?.data)
    console.log(response?.data?.data)
  };
  useEffect(() => {
    getUsers();
  }, [user]);

  const onCreate = async () => {
    try {
      setLoading(true);
      const uuid = uuidv4();
      const data: ResumeData = {
        data: {
          title: title,
          ResumeId: uuid,
          UserEmail: user?.primaryEmailAddress?.emailAddress,
          UserName: user?.fullName,
        },
      };
  
      const resp =await axios.post("http://localhost:1337/api/user-resumes", data);
      console.log("done",resp.data.data.documentId)
      if (resp) {
        setOpen(false);
        navigate(`/Dashboard/resume/${resp.data.data.documentId}/edit`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  
  return (
    <div>
      
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
      <div className="flex">
      <div className="p-14 px-[100px] border items-center m-2 bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all duration-400 hover:shadow-md cursor-pointer border-dashed flex justify-center items-center">
        <PlusSquare onClick={() => setOpen(true)} />
      </div>
      {
         resume?.map((item)=>{
             return(  
              <>
              <ResumeCards id={item.ResumeId} resume={item}/>
              </>
             )
        })
      }
      </div>
     
    </div>
  );
}

export default AddResume;