type Props = {
  avatar: string;
  handleClick: any;
};

export default function Avatar({ avatar, handleClick }: Props) {
  return (
    <div>
      <img onClick={() => handleClick(avatar)} src={`${avatar}`} loading="lazy" className="pointer" />
    </div>
  );
}
