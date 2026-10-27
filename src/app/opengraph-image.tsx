import { ImageResponse } from "next/og";

export const alt =
  "Belajar Coding Bareng Rezki — kelas coding online untuk anak SD/SMP";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          color: "#172b4d",
          padding: "72px 76px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-180px",
            width: "540px",
            height: "540px",
            borderRadius: "999px",
            border: "2px solid #e7e8e4",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "72px",
            bottom: "-150px",
            width: "380px",
            height: "380px",
            borderRadius: "999px",
            background: "#c6f36b",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "#172b4d",
              color: "#c6f36b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: 700 }}>
              Belajar Coding
            </span>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "2.5px",
                color: "#687386",
                marginTop: "4px",
              }}
            >
              BARENG REZKI
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "820px",
          }}
        >
          <span
            style={{
              fontSize: "17px",
              letterSpacing: "3px",
              color: "#687386",
              marginBottom: "22px",
            }}
          >
            KELAS CODING ONLINE UNTUK ANAK SD/SMP
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "64px",
              lineHeight: 1.05,
              letterSpacing: "-2.6px",
              fontWeight: 800,
            }}
          >
            <span>Belajar bikin game</span>
            <span>
              dan website sendiri<span style={{ color: "#8aa25b" }}>.</span>
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "20px", color: "#687386" }}>
            Scratch · Web development · Pendampingan langsung
          </span>
          <div
            style={{
              display: "flex",
              background: "#c6f36b",
              color: "#172b4d",
              borderRadius: "999px",
              padding: "14px 22px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Sesi perkenalan · 60 menit
          </div>
        </div>
      </div>
    ),
    size,
  );
}
