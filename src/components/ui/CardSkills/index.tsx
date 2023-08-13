type Props = {
  title: string;
  content: string;
};

const CardSkills = ({ title, content }: Props) => {
  return (
    <div>
      <div>
        <img src="" alt="" /> <span>{title}</span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default CardSkills;
