import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Button } from "../../ui/Button";

function TitleAndBtn() {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-[20px] font-semibold lg:text-[36px] md:text-[26px]">
        Kategoriyalar
      </h2>
      <Button className="flex items-center gap-[5px] cursor-pointer text-[13px] lg:text-[16px]">
        Barchasini ko‘rish
        <HiOutlineArrowSmallRight />
      </Button>
    </div>
  );
}

export default TitleAndBtn;
