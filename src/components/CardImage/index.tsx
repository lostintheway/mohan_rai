import Image from "next/image";
import "./CardImage.css"; // Import your CSS file for styling

interface CardImageProps {
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}

export default function CardImage({
  imageUrl,
  title,
  description,
  className = "",
}: CardImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer ${className}`}
    >
      <Image
        width={300}
        height={360}
        src={imageUrl}
        alt={title}
        className=" object-cover"
      />
    </div>
  );
}
