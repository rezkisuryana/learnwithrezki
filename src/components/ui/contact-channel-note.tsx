import { AlertCircle, Mail } from "lucide-react";

import { getContactTarget, isWhatsAppConfigured } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ContactChannelNoteProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function ContactChannelNote({
  tone = "light",
  className,
}: ContactChannelNoteProps) {
  if (isWhatsAppConfigured()) {
    return null;
  }

  const fallbackTarget = getContactTarget("Konsultasi kelas coding untuk anak.");
  const hasEmailFallback = fallbackTarget?.channel === "email";

  return (
    <p
      className={cn(
        "contact-channel-note",
        tone === "dark" && "contact-channel-note--dark",
        className,
      )}
    >
      {hasEmailFallback ? (
        <Mail size={14} strokeWidth={2} aria-hidden="true" />
      ) : (
        <AlertCircle size={14} strokeWidth={2} aria-hidden="true" />
      )}
      <span>
        {hasEmailFallback
          ? "WhatsApp belum tersedia — sementara ini konsultasi melalui email."
          : "Kanal konsultasi belum tersedia saat ini."}
      </span>
    </p>
  );
}
