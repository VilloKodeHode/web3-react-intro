import "./buttons.css";

export const NormalButton = ({onClick, children}) => {
  return <button className="normal-btn" onClick={onClick}>{children}</button>;
};

// man kan definere flere komponenter i samme fil:

export const UnormalButton = ({onClick, children}) => {
  return <button className="unormal-btn" onClick={onClick}>{children}</button>;
}
