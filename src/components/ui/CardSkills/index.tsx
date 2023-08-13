type Props = {
  title: string;
  content: string;
  imgUrl: string;
};

const CardSkills = ({ imgUrl, title, content }: Props) => {
  return (
    <div>
      <div>
        <img src={imgUrl} alt={title} /> <span>{title}</span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default CardSkills;
