import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { learningApproach } from "@/content/approach";

export function LearningApproach() {
  return (
    <section
      id="pendekatan"
      className="section section--rule approach"
      aria-labelledby="pendekatan-title"
    >
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Cara belajar"
          title="Belajar dengan mencoba, bukan hanya menonton."
          description="Satu sesi bukan soal menghabiskan banyak materi, tetapi memastikan anak memahami langkah yang sedang dikerjakan."
          titleId="pendekatan-title"
        />

        <ol className="approach-grid">
          {learningApproach.map((step) => (
            <li className="approach-step" key={step.number}>
              <div className="approach-step__top">
                <span className="approach-step__number" aria-hidden="true">
                  {step.number}
                  <span>.</span>
                </span>
                <span className="approach-step__line" aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="approach-note">
          <span className="approach-note__mark" aria-hidden="true">
            “
          </span>
          <p>
            Setiap anak punya ritme belajar yang berbeda. Kemajuan disesuaikan
            dengan kemampuan awal, minat, dan kebiasaan belajarnya.
          </p>
        </div>
      </Container>
    </section>
  );
}
