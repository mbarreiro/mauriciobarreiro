import Image from "next/image";
import SimpleSlider from "@/components/SimpleSlider";
import styles from "./page.module.css";
import Section from "@/components/Section";
import Hero, { GreyscaleColor } from "@/components/Hero";
import { ImageModel } from "./models/image.model";
import { File } from "./models/common.model";

export default function Home() {
  return (
    <div className={styles.page}>
      <Section classes="section--contains-header">
        <Hero
          title="This is the Homepage Hero title"
          description="This is a brief description of my portfolio."
          backgroundColor={"#cccccc" as GreyscaleColor}
          color="#333333"
          backgroundImage={
            {
              src: "https://fpoimg.com/1920x540?text=Hero Background Image&bg_color=CCe6CC&text_color=8F8F8F",
            } as ImageModel
          }
          image={
            {
              alt: "Hero Image",
              title: "Hero Image",
              width: 400,
              height: 400,
              src: "https://fpoimg.com/600x400?text=Hero Image&bg_color=00e699&text_color=8F8F8F",
            } as ImageModel
          }
        />
      </Section>
      <Section classes="custom-section-class">
        <p>This is the homepage of my portfolio website.</p>
        <SimpleSlider />
      </Section>
      <section>Featured projects</section>
      <section>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </section>
      <section>[Quotes Placeholder]</section>
      <section>[Skills Placeholder]</section>
      <section>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </section>
      <Section>
        <p>This is the content of the section.</p>
      </Section>
    </div>
  );
}
