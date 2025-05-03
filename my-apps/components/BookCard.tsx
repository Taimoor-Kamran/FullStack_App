import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isloanedBook = false,
}: Book) => (
  <li className={cn(inputs: isloanedBook && 'xs:w-52 w-full')}>
    <Link href={`/books/${id}`} className={cn( inputs: isloanedBook )}>
      <BookCover coverColor={color} coverImage={cover} variant="wide"/>
    </Link>
  </li>
);

export default BookCard;
