import { cn } from "@/lib/utils"
import { Link } from "next-view-transitions"
import { ComponentProps } from "react"
import NextLink from "next/link"

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
        stroke-width="0.5"
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
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        <stop stop-color="#8F6FFF" />
        <stop offset="0.04" stop-color="#8F6FFF" />
        <stop offset="0.06" stop-color="#8661FF" />
        <stop offset="0.42" stop-color="#8661FF" />
        <stop offset="0.58" stop-color="#6C47FF" />
        <stop offset="1" stop-color="#6C47FF" />
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
