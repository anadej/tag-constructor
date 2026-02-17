interface ArrowRightIconProps {
  size?: number;
  className?: string;
}

export const ArrowRightIcon = ({
  size = 16,
  className,
}: ArrowRightIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity={0.8}
      d="M7 4L11 8L7 12"
      stroke="currentColor"
      strokeOpacity={0.65}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
