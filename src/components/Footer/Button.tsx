type Props = {
  link: string;
};

const Button = ({ link }: Props) => {
  return (
    <button>
      <img src={link} alt="" />
    </button>
  );
};

export default Button;
