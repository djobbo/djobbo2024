import Link from "next/link"
import { ResumeData } from "@/data/resume"

type ContactLinkIconProps = Readonly<{
  type: ResumeData["links"][number]["type"]
  size?: number
}>

export const ContactLinkIcon = ({ type, size = 16 }: ContactLinkIconProps) => {
  switch (type) {
    case "website":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1240_283)">
            <rect width="16" height="16" fill="#4B4A5F" />
            <path
              d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 3C6.71612 4.34808 6 6.13837 6 8C6 9.86163 6.71612 11.6519 8 13C9.28388 11.6519 10 9.86163 10 8C10 6.13837 9.28388 4.34808 8 3Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 8H13"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1240_283">
              <rect width="16" height="16" rx="4" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "email":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1240_289)">
            <rect width="16" height="16" fill="#4B4A5F" />
            <path
              d="M13.5 5.12728V11.5022C13.5 11.9166 13.1645 12.2521 12.7502 12.2521H10.9998V8.00241L8 10.2528L5.00021 8.00241V12.2525H3.24983C3.15133 12.2525 3.05378 12.2331 2.96278 12.1954C2.87177 12.1577 2.78909 12.1024 2.71946 12.0328C2.64982 11.9631 2.5946 11.8804 2.55695 11.7893C2.51929 11.6983 2.49994 11.6008 2.5 11.5022V5.12728C2.5 4.20008 3.55829 3.6707 4.29988 4.22712L5.00021 4.75283L8 7.00233L10.9998 4.75191L11.7001 4.22712C12.4413 3.67116 13.5 4.20008 13.5 5.12728Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1240_289">
              <rect width="16" height="16" rx="4" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1240_264)">
            <rect width="16" height="16" fill="#4B4A5F" />
            <path
              d="M8 2C4.685 2 2 4.6865 2 8C2 10.6515 3.719 12.9 6.1025 13.6925C6.4025 13.749 6.5125 13.5635 6.5125 13.404C6.5125 13.2615 6.5075 12.884 6.505 12.384C4.836 12.746 4.484 11.579 4.484 11.579C4.211 10.8865 3.8165 10.7015 3.8165 10.7015C3.273 10.3295 3.8585 10.337 3.8585 10.337C4.461 10.379 4.7775 10.955 4.7775 10.955C5.3125 11.8725 6.182 11.6075 6.525 11.454C6.579 11.066 6.7335 10.8015 6.905 10.6515C5.5725 10.5015 4.172 9.9855 4.172 7.6865C4.172 7.0315 4.4045 6.4965 4.7895 6.0765C4.722 5.925 4.5195 5.315 4.842 4.4885C4.842 4.4885 5.3445 4.3275 6.492 5.1035C6.972 4.97 7.482 4.904 7.992 4.901C8.502 4.904 9.012 4.97 9.492 5.1035C10.632 4.3275 11.1345 4.4885 11.1345 4.4885C11.457 5.315 11.2545 5.925 11.1945 6.0765C11.577 6.4965 11.8095 7.0315 11.8095 7.6865C11.8095 9.9915 10.407 10.499 9.072 10.6465C9.282 10.8265 9.477 11.1945 9.477 11.7565C9.477 12.5595 9.4695 13.2045 9.4695 13.3995C9.4695 13.557 9.5745 13.7445 9.882 13.6845C12.2825 12.8975 14 10.6475 14 8C14 4.6865 11.3135 2 8 2Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1240_264">
              <rect width="16" height="16" rx="4" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1240_250)">
            <rect width="16" height="16" fill="#4B4A5F" />
            <rect x="2" y="2" width="12" height="12" fill="white" />
            <path
              d="M12.6928 12.6956H10.7183V9.60171C10.7183 8.86393 10.7033 7.91449 9.68942 7.91449C8.65998 7.91449 8.50276 8.71726 8.50276 9.54726V12.6956H6.52831V6.33337H8.42498V7.2006H8.45054C8.71554 6.7006 9.35998 6.17282 10.3228 6.17282C12.3233 6.17282 12.6933 7.48949 12.6933 9.20337L12.6928 12.6956ZM4.29831 5.46282C3.66276 5.46282 3.1522 4.94837 3.1522 4.3156C3.1522 3.68337 3.66331 3.16949 4.29831 3.16949C4.93165 3.16949 5.44498 3.68337 5.44498 4.3156C5.44498 4.94837 4.93109 5.46282 4.29831 5.46282ZM5.28831 12.6956H3.30831V6.33337H5.28831V12.6956ZM13.6805 1.33337H2.3172C1.77331 1.33337 1.33331 1.76337 1.33331 2.29393V13.7062C1.33331 14.2373 1.77331 14.6667 2.3172 14.6667H13.6789C14.2222 14.6667 14.6666 14.2373 14.6666 13.7062V2.29393C14.6666 1.76337 14.2222 1.33337 13.6789 1.33337H13.6805Z"
              fill="#4B4A5F"
            />
          </g>
          <defs>
            <clipPath id="clip0_1240_250">
              <rect width="16" height="16" rx="4" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )

    default:
      return null
  }
}

type ContactLinkProps = Readonly<{
  link: ResumeData["links"][number]
}>

export const ContactLink = ({ link }: ContactLinkProps) => {
  switch (link.type) {
    case "website":
      return (
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </Link>
      )
    case "email":
      return <Link href={link.url}>{link.text}</Link>
    case "github":
      return (
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          <span className="text-[12px] text-foreground-alt">github.com/</span>
          {link.text}
        </Link>
      )
    case "linkedin":
      return (
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          <span className="text-[12px] text-foreground-alt">
            linkedin.com/in/
          </span>
          {link.text}
        </Link>
      )
    default:
      return null
  }
}
