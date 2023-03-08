import React from "react";
import styled from "styled-components";

export interface LoadingProps {
  loading: boolean;
}

const LoadingAnimationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function LoadingAnimation() {
  return (
    <LoadingAnimationContainer>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#f00"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(0 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </LoadingAnimationContainer>
  );
}

export function Loading({
  children,
  loading
}: React.PropsWithChildren<LoadingProps>) {
  return loading ? <LoadingAnimation /> : <>{children}</>;
}
