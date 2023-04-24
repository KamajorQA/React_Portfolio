import './buttonOutline.css';

function ButtonOutline({ icon, btnDesc, btnLink }) {
  return (
    <a href={btnLink} target="_blank" rel="noreferrer" className="btn-outline">
      {icon && <img src={icon} alt={btnDesc} />}
      {btnDesc}
    </a>
  );
}

export default ButtonOutline;
