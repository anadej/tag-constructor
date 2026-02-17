interface IconWrapperDotsProps {
  size?: number;
  className?: string;
}

export const IconWrapperDots = ({
  size = 12,
  className,
}: IconWrapperDotsProps) => (
  <svg
    width={size}
    height={(size / 12) * 16}
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 13.25C5.37868 13.25 4.875 12.7463 4.875 12.125C4.875 11.5037 5.37868 11 6 11C6.62132 11 7.125 11.5037 7.125 12.125C7.125 12.7463 6.62132 13.25 6 13.25ZM6 9.125C5.37868 9.125 4.875 8.62132 4.875 8C4.875 7.37868 5.37868 6.875 6 6.875C6.62132 6.875 7.125 7.37868 7.125 8C7.125 8.62132 6.62132 9.125 6 9.125ZM4.875 3.875C4.875 4.49632 5.37868 5 6 5C6.62132 5 7.125 4.49632 7.125 3.875C7.125 3.25368 6.62132 2.75 6 2.75C5.37868 2.75 4.875 3.25368 4.875 3.875Z"
      fill="currentColor"
      fillOpacity={0.25}
    />
  </svg>
);
