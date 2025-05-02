import Link from "next/link";
import React from "react";
import BookCover from "@/components/BookCover";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isloanedBook = false,

}: Book) => (
    <li>
        <Link href={`/books/${id}`}>
            <BookCover coverColor={color} coverImage={color}/>
        </Link>
    </li>
)
export default BookCard;
