import Image, { type ImageProps } from "next/image";

interface LogoProps extends Partial<ImageProps> {
  size?: number;
  mode?: "decor_blue" | "decor_white" | "general_blue" | "general_white";
}

const Logo: React.FC<LogoProps> = ({
  size = 70,
  mode = "decor_white",
  ...props
}) => {
  const aspectRatio = 0.375;

  return (
    <Image
      {...props}
      src={`/logo_${mode}.png`}
      style={{ width: "auto", height: "auto" }}
      alt="Logo"
      width={size}
      height={size * aspectRatio}
    />
  );
};

export default Logo;
