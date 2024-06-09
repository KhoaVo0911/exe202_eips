import { width } from "@mui/system";
import CardList from "../../admin/Card/CardList";

export default function EventsManagement() {
  return (
    <div>
      <h1 className="text-2xl mb-4 text-start font-bold">Quản lí Sự kiện</h1>
      <div className="">
        <CardList style={{ width: "50%" }} />
      </div>
    </div>
  );
}
