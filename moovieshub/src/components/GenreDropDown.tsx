import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const GenereDropDown = () => {

 const genreArray =[{id:101,name:"Action"},{id:102,name:"Adventure"}]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex items-center text-sm font-medium">
        Genre <ChevronDown className="ml-1" size={20}></ChevronDown>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {genreArray.map((item)=>(
            <DropdownMenuItem key={item.id}>
                <Link href={`/genre/${item.id}?genre=${item.name}`}>
                {item?.name}
                </Link>
            </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenereDropDown;
