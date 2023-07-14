import { Input } from "@/components/ui/input";
import { MapPin, Clock3, CalendarCheck } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-start relative px-10">
      <div className="absolute top-40">
        <h1 className="text-[2.6rem] leading-loose font-semibold font-montserrat">
          Order food to your door
        </h1>
        <div className="flex space-x-2 py-4">
          <div className="flex bg-white w-full justify-center items-center hover:border-b-2 hover:border-black  shadow-sm">
            <MapPin className="ml-3" />
            <Input type="text" placeholder="Enter delivery address" />
          </div>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder=" Deliver now" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <Clock3 />
                Deliver now
              </SelectItem>
              <SelectItem value="dark">
                <CalendarCheck /> Schedule for later
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
