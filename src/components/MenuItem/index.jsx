import './style.css';

export const MenuItem = ({ text, onSelect }) => {

  const handleOnSelect = () => {
    // misto onClick={() => onSelect()} pustime tuto fci
    onSelect(text);
  }

  return (
    <a href="#" className="menu-item" onClick={handleOnSelect}>
      {text}
    </a>
  );
};
