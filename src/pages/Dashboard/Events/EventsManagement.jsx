import { width } from "@mui/system";
import CardEvent from "./CardEvent";
import Button from "@mui/material/Button";

export default function EventsManagement() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl mb-4 text-start font-bold">Quản lí Sự kiện</h1>
        <a href="/create">
          <Button variant="contained" disableElevation>
            Thêm sự kiện
          </Button>
        </a>
      </div>

      <div className="">
        <CardEvent style={{ width: "50%" }} />
      </div>
    </div>
  );
}
