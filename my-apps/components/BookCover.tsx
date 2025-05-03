import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "small" | "default" | "wide";

const variantStyle: Record<BookCoverVariant, string> = {
  default: "book-cover",
  small: "book-cover_small",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = "default",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyle[variant],
        className
      )}
      style={{ backgroundColor: coverColor }}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div className="absolute z-10" style={{left: '12%', width: '87.5%', height: "88%"}}>
        <Image src={coverImage} alt="Book cover" fill className="rounded-sm object-fill"></Image>

      </div>
    </div>
  );
};

export default BookCover;
