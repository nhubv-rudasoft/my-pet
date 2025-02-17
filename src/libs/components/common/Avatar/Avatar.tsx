interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => {
  return (
    <div className={`avatar avatar-${size}`}>
      <img src={src} alt={alt} />
    </div>
  );
};