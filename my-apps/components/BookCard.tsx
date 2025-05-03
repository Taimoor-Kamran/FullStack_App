import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isloanedBook = false,
}: Book) => (
  <li className={cn(isloanedBook && 'xs:w-52 w-full')}>
    <Link href={`/books/${id}`} className={cn(isloanedBook && 'w-full flex flex-col items-center')}>
      <BookCover coverColor={color} coverImage={cover} variant="wide"/>

      <div className={cn('mt-4', !isloanedBook && 'xs:max-w-40 max-w-28')}>
        <p className="book-title">{title}</p>
            <p className="book-genre">{genre}</p>
      </div>

      {isloanedBook && (
        <div className="mt-3 w-full">
            <div className="book-loaned">
                <Image src="/icons/calender.svg" alt="calender" width={18} height={18} className="object-contain"></Image>
            </div>
        </div>
      )}
    </Link>
  </li>
);

export default BookCard;
