import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../../context/ResumeContext";
import ThemeColor from "./ThemeColor";

function SmallNavbar() {
  const navigate = useNavigate();

  const {
    componentNumber,
    decrementingComponentNumber,
    incrementingComponentNumber,
    isOpen,
  } = useResume();

  console.log(componentNumber);
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div>
          <Button className=" bg-purple-500" onClick={() => navigate("/")}>
            home
          </Button>
        </div>
        <div>
          <ThemeColor />
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <Button
            className="bg-purple-500"
            onClick={() => decrementingComponentNumber()}
          >
            Previous
          </Button>
        </div>
        <div>
          <Button
            disabled={!isOpen}
            className="bg-purple-500"
            onClick={() => incrementingComponentNumber()}
          >
            {" "}
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SmallNavbar;
