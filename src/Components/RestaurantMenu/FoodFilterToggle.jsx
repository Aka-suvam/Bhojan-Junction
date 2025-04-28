const FoodFilterToggle = ({ Img, Alt, type, isActive, onToggle }) => {
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isActive}
          onChange={onToggle}
          aria-label={`Enable ${type} option`}
          className="toggle-input"
        />
        <span className={`toggle-slider ${type} ${isActive ? 'active' : ''}`}>
          <img
            src={Img}
            alt={Alt}
            className="toggle-icon"
          />
        </span>
      </label>
    </div>
  );
};

export default FoodFilterToggle;