import type { SystemPointIcon } from "@/data/axis";

type SystemIconProps = {
  variant: SystemPointIcon;
};

const shared = {
  leaf: (
    <>
      <path
        d="M24 42c10-6 16-16 16-28v-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 10c9 4 17 3 24-2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 24c6 3 20 4 27-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
  wave: (
    <>
      <path
        d="M8 28c4 4 8 6 12 6s8-2 12-6s8-6 12-6s8 2 12 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 16c4 4 8 6 12 6s8-2 12-6s8-6 12-6s8 2 12 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="12" r="2" fill="currentColor" />
      <circle cx="40" cy="36" r="2" fill="currentColor" />
    </>
  ),
  spark: (
    <>
      <circle
        cx="28"
        cy="28"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M28 10v6m0 28v6m18-18h-6M16 32h-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 22c2.5 1.5 4.5 3.5 6 6c1.5-2.5 3.5-4.5 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </>
  ),
  network: (
    <>
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="40"
        cy="12"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="44"
        cy="36"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="16"
        cy="40"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M20 19l16-5m-12 18l16 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 22v12m24-22l4 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
};

export function SystemIcon({ variant }: SystemIconProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      className="h-10 w-10 text-emerald-600"
      aria-hidden="true"
    >
      {shared[variant]}
    </svg>
  );
}
