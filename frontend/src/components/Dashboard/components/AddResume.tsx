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
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      const response = await axios.get(
        `http://localhost:1337/api/user-resumes?filters[UserEmail][$eq]=${email}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`, // Add if needed
          },
        }
      );
      setResume(response?.data?.data);
      // console.log("User Resumes:", response?.data?.data);
    } catch (error) {
      console.error("Error fetching user resumes:", error);
    }
  };

  useEffect(() => {
    if (user) getUsers();
  }, [user]);

  console.log(resume);

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

      const resp = await axios.post(
        "http://localhost:1337/api/user-resumes",
        data,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_KEY}`, // Add if needed
          },
        }
      );

      console.log("Resume Created:", resp.data.data);

      if (resp.data && resp.data.data.id) {
        setOpen(false);
        navigate(`/Dashboard/resume/${resp.data.data.id}/edit`);
      } else {
        console.error("Error: Document ID not found in response.");
      }
    } catch (error) {
      console.error("Error creating resume:", error.response?.data || error);
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
              <p className="my-2">Add a title for your new resume</p>
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5 py-3">
              <Button onClick={onCreate} disabled={!title || loading}>
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="flex">
        <div
          className="p-14 px-[100px] border m-2 bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all duration-400 hover:shadow-md cursor-pointer border-dashed flex justify-center items-center"
          onClick={() => setOpen(true)}
        >
          <PlusSquare />
        </div>

        {resume?.map((item:ResumeData) => (
          <ResumeCards key={item.id} resume={item}  />
        ))}
      </div>
    </div>
  );
}

export default AddResume;
