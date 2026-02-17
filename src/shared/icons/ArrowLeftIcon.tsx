interface ArrowLeftIconProps {
  size?: number;
  className?: string;
}

export const ArrowLeftIcon = ({ size = 32, className }: ArrowLeftIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.4042 11.4265C17.696 11.1349 18.1691 11.1349 18.4609 11.4265C18.7525 11.7183 18.7525 12.1914 18.4609 12.4832L15.0039 15.9392L18.4609 19.3963C18.7526 19.6879 18.7524 20.1611 18.4609 20.4529C18.1691 20.7447 17.696 20.7447 17.4042 20.4529L13.4189 16.4685C13.1273 16.1768 13.1273 15.7036 13.4189 15.4119L17.4042 11.4265Z"
      fill="currentColor"
      fillOpacity={0.45}
    />
  </svg>
);
