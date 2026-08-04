"use client";

type Props = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: "conversion",
      params: {
        send_to: string;
        value?: number;
        currency?: string;
        transaction_id?: string;
      }
    ) => void;
  }
}

export default function GoogleAdsButton({
  href,
  target,
  rel,
  className,
  children,
}: Props) {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18367924465/4DdbCLTy7NocEPGRwbZE",
        value: 1,
        currency: "COP",
        transaction_id: "",
      });
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}