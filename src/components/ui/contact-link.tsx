import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { getContactTarget } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ContactLinkProps = {
  message: string;
  label: string;
  fallbackLabel?: string;
  subject?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function ContactLink({
  message,
  label,
  fallbackLabel,
  subject,
  tone = "light",
  className,
}: ContactLinkProps) {
  const target = getContactTarget(message, subject);
  const visibleLabel =
    target?.channel === "email" ? (fallbackLabel ?? label) : label;
  const classes = cn(
    "contact-link",
    tone === "dark" && "contact-link--dark",
    className,
  );
  const channelLabel = target?.channel === "email" ? "email" : "WhatsApp";
  const accessibleLabel = target
    ? /whatsapp|email/i.test(visibleLabel)
      ? visibleLabel
      : `${visibleLabel} via ${channelLabel}`
    : visibleLabel;

  if (!target) {
    return (
      <span className={cn(classes, "contact-link--disabled")} aria-disabled="true">
        <span>{label}</span>
        <span className="contact-link__channel" aria-hidden="true">
          Kanal belum tersedia
        </span>
      </span>
    );
  }

  const Icon = target.channel === "whatsapp" ? MessageCircle : Mail;

  return (
    <a
      href={target.href}
      className={classes}
      target={target.external ? "_blank" : undefined}
      rel={target.external ? "noopener noreferrer" : undefined}
      aria-label={accessibleLabel}
      data-contact-channel={target.channel}
    >
      <Icon size={15} strokeWidth={2.1} aria-hidden="true" />
      <span>{visibleLabel}</span>
      <ArrowUpRight
        className="contact-link__arrow"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </a>
  );
}
