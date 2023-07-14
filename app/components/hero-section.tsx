import { Input } from "@/components/ui/input";
import { MapPin, Clock3, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "./button";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-start relative px-10">
      <div className="absolute top-40">
        <h1 className="text-[2.6rem] leading-loose font-semibold font-montserrat">
          Order food to your door
        </h1>
        <div className="flex space-x-2 py-4 w-full">
          <div className="flex-1 w-[500px] flex bg-white justify-center items-center hover:border-b-2 hover:border-black  shadow-sm">
            <MapPin className="ml-3" />
            <Input type="text" placeholder="Enter delivery address" />
          </div>
          {/* drop down */}
          <div>
            <Select>
              <SelectTrigger className="w-[190px] h-[55px]">
                <div className="flex space-x-2">
                  <SelectValue
                    placeholder=" Deliver now"
                    className="font-semibold"
                  />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <div className="flex space-x-2">
                    <Clock3 size={20} />
                    <p className="pl-1 min-w-fit text-[14px] font-semibold">
                      Deliver now
                    </p>
                  </div>
                </SelectItem>

                <SelectItem value="dark">
                  <div className="flex ">
                    <CalendarCheck size={20} />{" "}
                    <p className="pl-1 min-w-fit text-[14px] font-semibold">
                      Schedule for later
                    </p>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className={cn("rounded-[10px]  px-5 py-3 hover:bg-slate-700 z-99")}
          >
            Find Food
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
