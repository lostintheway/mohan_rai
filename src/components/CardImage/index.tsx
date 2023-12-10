import Image from "next/image";
import "./CardImage.css"; // Import your CSS file for styling

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

function CardImage({ imageUrl, title, description }: Props) {
  return (
    <div className="image-card-wrapper">
      <div className="image-card">
        <Image src={imageUrl} alt={title} width={210} height={320} />
        <div className="overlay">
          <b>{title}</b>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
