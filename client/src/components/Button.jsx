const Button = ({ innerText }) => {
  return (
    <button className="px-4 py-2 text-base text-white tracking-wider bg-zinc-950 rounded-lg m-2">
      {innerText}
    </button>
  );
};

export default Button;
