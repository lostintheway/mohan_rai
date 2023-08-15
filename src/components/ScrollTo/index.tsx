type Props = { targetId: string; title: string; onClick?: () => void };

const ScrollTo = ({ targetId, title, onClick }: Props) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = 0; // Offset from the top to adjust for headers or fixed elements
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (onClick) {
      onClick();
    }
  };

  return <li onClick={handleClick}>{title}</li>;
};

export default ScrollTo;
