import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/shadcn/button";

type SortOption =
  | "price-asc"
  | "price-desc"
  | "rating"
  | "reviews"
  | "distance";

interface SortControlsProps {
  onSortChange: (option: SortOption) => void;
}

export default function SortControls({ onSortChange }: SortControlsProps) {
  const [priceDirection, setPriceDirection] = useState<"asc" | "desc">("asc");

  const handlePriceClick = () => {
    const newDirection = priceDirection === "asc" ? "desc" : "asc";
    setPriceDirection(newDirection);
    onSortChange(`price-${newDirection}` as SortOption);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={handlePriceClick}
        className="h-[24px] w-[74px] bg-white text-[12px] text-primaryBlue hover:bg-gray-50 hover:text-blue-700"
      >
        Price <ArrowUpDown className="ml-1 h-4 w-4" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild={true}>
          <Button
            variant="outline"
            className="h-[24px] w-[74px] bg-white p-2 text-[12px] text-primaryBlue hover:bg-gray-50 hover:text-blue-700"
          >
            Sort by
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="-mr-20 rounded:md w-[160px] cursor-pointer bg-white"
        >
          <DropdownMenuItem onClick={() => onSortChange("rating")}>
            Rating
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("reviews")}>
            Number of reviews
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("distance")}>
            Distance
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
