// HeartIcon.tsx
import React from "react";

type HeartIconProps = {
  fillColor?: string; // 색상을 동적으로 변경할 수 있는 옵션
  strokeColor?: string; // 테두리 색상을 동적으로 변경할 수 있는 옵션
};

const HeartIcon = ({
  fillColor = "none",
  strokeColor = "#6B7280",
}: HeartIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.55694 9.31157C3.40722 9.18016 3.28746 9.07475 3.19967 8.99739V8.95147L3.02394 8.77574C2.33013 8.08193 1.93301 7.16547 1.93301 6.2V6.07612C1.99448 4.2062 3.59154 2.66667 5.46634 2.66667C5.74462 2.66667 6.11383 2.76344 6.48188 2.96162C6.82921 3.14864 7.13408 3.40383 7.33652 3.68842C7.63101 4.31494 8.53881 4.30366 8.8112 3.65457C8.97894 3.36092 9.27293 3.0955 9.62525 2.89902C9.99287 2.694 10.3593 2.6 10.5997 2.6C12.529 2.6 14.0714 4.12742 14.133 6.07581V6.2C14.133 7.24201 13.7296 8.14473 13.0609 8.75771L12.8663 8.93606V8.97957C12.7653 9.06525 12.6349 9.17766 12.4831 9.30974C12.1459 9.6029 11.6945 9.99999 11.203 10.4332C11.0452 10.5722 10.8834 10.7149 10.7198 10.8592C9.86357 11.6143 8.95903 12.4119 8.34567 12.9417C8.16914 13.0861 7.89687 13.0861 7.72034 12.9417C6.98813 12.3093 5.82553 11.2962 4.83618 10.4316C4.34055 9.9984 3.88881 9.60286 3.55694 9.31157Z"
        stroke={strokeColor} // 동적으로 색상 변경
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default HeartIcon;
