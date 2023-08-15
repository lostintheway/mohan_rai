type Props = { targetId: string; title: string };

const ScrollTo = ({ targetId, title }: Props) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = 0; // Offset from the top to adjust for headers or fixed elements
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return <li onClick={handleClick}>{title}</li>;
};

export default ScrollTo;
