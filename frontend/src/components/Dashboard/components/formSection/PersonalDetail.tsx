import { useState } from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Resume } from "../../../../../dummyData/dummy";
import { useResume } from "../../../../context/ResumeContext";
import axios from "axios";
import GlobalUpdate from "../../../../../services/GlobalApi";

type Props = {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function PersonalDetail({ resume, setResume, id, isOpen, setIsOpen }: Props) {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
  });

  const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    console.log("formData...", { ...formdata });
    setIsOpen(true);
    GlobalUpdate.uploadPersonalInformation({ id, data: { ...formdata } }).then(
      (prev: any) => {
        console.log(prev);
        setLoading(false);
      },
      (error: any) => {
        setLoading(false);
        console.log(error.message);
      }
    );
  };
  console.log("ideeeee", id);
  return (
    <div className=" px-3 ">
      <form onSubmit={handleSave}>
        <h1 className="text-2xl font-medium">Personal Detail</h1>
        <h1 className="text-xl ">Get Started with the information</h1>
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="First Name">First Name</label>
            <Input
              type="text"
              required
              name="firstName"
              className=""
              id="First Name"
              value={resume.firstName || formdata.firstName}
              onChange={(e) => {
                const { value, name } = e.target;
                setResume({ ...resume, [name]: value });
                setFormData({ ...formdata, [name]: value });
              }}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="Last Name">Last Name</label>
            <Input
              type="text"
              required
              className=""
              value={resume.lastName}
              id="last Name"
              name="lastName"
              onChange={(e) => {
                const { value, name } = e.target;

                setResume({ ...resume, [name]: value });
                setFormData({ ...formdata, [name]: value });
              }}
            />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="Job Title">Job Title</label>
          <Input
            type="text"
            required
            className=""
            value={resume.jobTitle}
            id="Job Title"
            name="jobTitle"
            onChange={(e) => {
              const { value, name } = e.target;

              setResume({ ...resume, [name]: value });
              setFormData({ ...formdata, [name]: value });
            }}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="Address">Address</label>
          <Input
            type="text"
            required
            className=""
            value={resume.address}
            id="Address"
            name="address"
            onChange={(e) => {
              const { value, name } = e.target;

              setResume({ ...resume, [name]: value });
              setFormData({ ...formdata, [name]: value });
            }}
          />
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="phone">Phone</label>
            <Input
              type="text"
              required
              className=""
              value={resume.phone}
              id="Phone"
              name="phone"
              onChange={(e) => {
                const { value, name } = e.target;

                setResume({ ...resume, [name]: value });
                setFormData({ ...formdata, [name]: value });
              }}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              required
              className=""
              id="email"
              value={resume.email}
              name="email"
              onChange={(e) => {
                const { value, name } = e.target;

                setResume({ ...resume, [name]: value });
                setFormData({ ...formdata, [name]: value });
              }}
            />
          </div>

          <div className="flex justify-between my-6">
            <div></div>
            <div>
              <Button className="bg-purple-500" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
