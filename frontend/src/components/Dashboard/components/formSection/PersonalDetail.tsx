import { useState } from "react";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { useResume } from "../../../../context/ResumeContext";
import GlobalUpdate from "../../../../../services/GlobalApi";
import { useParams } from "react-router-dom";

function PersonalDetail() {
  const { majorResume, setMajorResume, setIsOpen } = useResume();
  const { id } = useParams() as { id: string };
 

  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setIsOpen(true);
    console.log(majorResume);
    GlobalUpdate.uploadPersonalInformation({
      id,
      data: {
        firstName: majorResume.firstName,
        lastName: majorResume.lastName,
        jobTitle: majorResume.jobTitle,
        address: majorResume.address,
        phone: majorResume.phone,
        email: majorResume.email,
      },
    }).then(
      (prev: any) => {
        console.log(prev);
        setLoading(false);
      },
      (error: any) => {
        setLoading(false);
        console.log(error.message);
      }
    );
    setIsOpen(true);
  };
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
              value={majorResume.firstName}
              onChange={(e) => {
                const { value, name } = e.target;
                setMajorResume({ ...majorResume, [name]: value });
              }}
            />
          </div>

          <div className="flex-1">
            <label htmlFor="Last Name">Last Name</label>
            <Input
              type="text"
              required
              className=""
              value={majorResume.lastName}
              id="last Name"
              name="lastName"
              onChange={(e) => {
                const { value, name } = e.target;

                setMajorResume({ ...majorResume, [name]: value });
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
            value={majorResume.jobTitle}
            id="Job Title"
            name="jobTitle"
            onChange={(e) => {
              const { value, name } = e.target;

              setMajorResume({ ...majorResume, [name]: value });
            }}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="Address">Address</label>
          <Input
            type="text"
            required
            className=""
            value={majorResume.address}
            id="Address"
            name="address"
            onChange={(e) => {
              const { value, name } = e.target;

              setMajorResume({ ...majorResume, [name]: value });
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
              value={majorResume.phone}
              id="Phone"
              name="phone"
              onChange={(e) => {
                const { value, name } = e.target;

                setMajorResume({ ...majorResume, [name]: value });
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
              value={majorResume.email}
              name="email"
              onChange={(e) => {
                const { value, name } = e.target;

                setMajorResume({ ...majorResume, [name]: value });
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
