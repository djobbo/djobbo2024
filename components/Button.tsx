import type NextLink from "next/link"
import { Link } from "next-view-transitions"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type ButtonProps = ComponentProps<typeof NextLink>

const ButtonBackground = () => (
  <svg
    width="144"
    height="37"
    viewBox="0 0 144 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ gridArea: "button" }}
  >
    <g filter="url(#filter0_d_1180_15)">
      <rect x="1" y="3" width="141" height="32" rx="8" fill="#672EDF" />
    </g>
    <g filter="url(#filter1_d_1180_15)">
      <rect
        x="1"
        y="1"
        width="141"
        height="32"
        rx="8"
        fill="url(#paint0_linear_1180_15)"
      />
      <rect
        x="1.25"
        y="1.25"
        width="140.5"
        height="31.5"
        rx="7.75"
        stroke="#6C47FF"
        strokeWidth="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1180_15"
        x="0.5"
        y="2.5"
        width="143"
        height="34"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.5" dy="0.5" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.423529 0 0 0 0 0.278431 0 0 0 0 1 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1180_15"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1180_15"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_1180_15"
        x="0.5"
        y="0.5"
        width="143"
        height="34"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.5" dy="0.5" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.423529 0 0 0 0 0.278431 0 0 0 0 1 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1180_15"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1180_15"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1180_15"
        x1="71"
        y1="1"
        x2="71"
        y2="33"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8F6FFF" />
        <stop offset="0.04" stopColor="#8F6FFF" />
        <stop offset="0.06" stopColor="#8661FF" />
        <stop offset="0.42" stopColor="#8661FF" />
        <stop offset="0.58" stopColor="#6C47FF" />
        <stop offset="1" stopColor="#6C47FF" />
      </linearGradient>
    </defs>
  </svg>
)

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <>
      <Link
        {...props}
        className={cn("grid text-[14px] font-medium", className)}
        style={{
          gridTemplateAreas: `button`,
        }}
      >
        <ButtonBackground />
        <span
          className={cn("grid place-items-center text-brand-white")}
          style={{
            gridArea: "button",
          }}
        >
          {children}
        </span>
      </Link>
    </>
  )
}
