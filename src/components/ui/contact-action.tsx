import { Mail, MessageCircle } from "lucide-react";

import { buttonStyles } from "@/components/ui/button";
import { getContactTarget } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ContactActionProps = {
  message: string;
  label: string;
  fallbackLabel?: string;
  subject?: string;
  variant?: "primary" | "secondary" | "dark" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function ContactAction({
  message,
  label,
  fallbackLabel,
  subject,
  variant = "primary",
  size = "md",
  className,
}: ContactActionProps) {
  const target = getContactTarget(message, subject);
  const visibleLabel =
    target?.channel === "email" ? (fallbackLabel ?? label) : label;
  const classes = buttonStyles({ variant, size, className });
  const channelLabel = target?.channel === "email" ? "email" : "WhatsApp";
  const accessibleLabel = target
    ? /whatsapp|email/i.test(visibleLabel)
      ? visibleLabel
      : `${visibleLabel} via ${channelLabel}`
    : visibleLabel;

  if (!target) {
    return (
      <button
        type="button"
        className={classes}
        disabled
        aria-disabled="true"
        title="Kanal kontak belum dikonfigurasi."
      >
        <MessageCircle size={17} aria-hidden="true" />
        <span>{label}</span>
      </button>
    );
  }

  const Icon = target.channel === "whatsapp" ? MessageCircle : Mail;

  return (
    <a
      href={target.href}
      className={cn(classes, "contact-action")}
      target={target.external ? "_blank" : undefined}
      rel={target.external ? "noopener noreferrer" : undefined}
      aria-label={accessibleLabel}
      data-contact-channel={target.channel}
    >
      <Icon size={17} strokeWidth={2.1} aria-hidden="true" />
      <span>{visibleLabel}</span>
    </a>
  );
}
