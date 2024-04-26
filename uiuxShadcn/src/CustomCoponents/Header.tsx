import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const notRoot = location.pathname !== "/";

  const back = () => {
    navigate(-1);
  };
  return (
    <div className="p-4 flex flex-row justify-between items-center	bg-slate-300">
      <div className="left-side Center">
        {notRoot && (
          <img
            onClick={() => back()}
            alt="settings icon"
            src="src/assets/arrow-left.svg"
            className="h-6 cursor-pointer"
          />
        )}
      </div>
      <div className="middle Center"></div>
      <div className="right-side Center cursor-pointer">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              alt="settings icon"
              src="src/assets/settings.svg"
              className="h-6 transition duration-200 hover:rotate-90 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Date & Time</DropdownMenuItem>
            <DropdownMenuItem>Connect Wifi</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
