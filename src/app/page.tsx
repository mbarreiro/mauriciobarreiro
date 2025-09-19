import Image from "next/image";
import SimpleSlider from "@/components/SimpleSlider";
import styles from "./page.module.css";
import Section from "@/components/Section";
import Grid, { GridItem } from "@/components/Grid";
import Hero, { GreyscaleColor } from "@/components/Hero";
import { ImageModel } from "./models/image.model";
import type { CardProps } from "@/components/Card";

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
        <SimpleSlider />
      </Section>
      <Section classes="custom-section-class--grid-container" spacing="large">
        {/* TODO: Add title text for Services section */}
        <div className="title-text title-text--centered">
          <h2 className="title-text__header">Services Grid</h2>
        </div>

        <Grid
          classes="custom-grid-class"
          gridColumns={3}
          hasGridColumnGap={true}
          hasGridRowGap={true}
          gridColumnGap="small"
          gridRowGap="small"
          gridItems={[
            {
              component: "Card",
              props: {
                eyebrow: "Card Eyebrow",
                description: "Card with image on top and centered text.",
                image: {
                  alt: "Sample Image",
                  title: "Sample Image",
                  width: 400,
                  height: 300,
                  src: "/icons/tool-container.svg",
                },
                title: "The Claim Title",
                variant: "claim",
              } as CardProps,
            } as unknown as GridItem,
            {
              component: "Card",
              props: {
                eyebrow: "Card Eyebrow",
                description: "Card description goes here.",
                image: {
                  alt: "Sample Image",
                  title: "Sample Image",
                  width: 400,
                  height: 300,
                  src: "/icons/tool-divider.svg",
                },
                title: "Card Title",
                variant: "claim",
              } as CardProps,
            } as unknown as GridItem,
            {
              component: "Card",
              props: {
                eyebrow: "Card Eyebrow",
                description: "Card description goes here.",
                image: {
                  alt: "Sample Image",
                  title: "Sample Image",
                  width: 400,
                  height: 300,
                  src: "/icons/tool-container.svg",
                },
                title: "Card Title",
                variant: "claim",
              } as CardProps,
            } as unknown as GridItem,
          ]}
        />
      </Section>
      <Section classes="custom-section-class--grid-container" spacing="large">
        {/* TODO: Add title text for Services section */}
        <div className="title-text title-text--centered">
          <h2 className="title-text__header">Grid</h2>
        </div>

        <Grid
          classes="custom-grid-class"
          gridColumns={3}
          hasGridColumnGap={true}
          hasGridRowGap={true}
          gridColumnGap="small"
          gridRowGap="small"
          gridItems={[
            {
              component: "Card",
              props: {
                eyebrow: "Card Eyebrow",
                description: "Card with image on top and centered text.",
                image: {
                  alt: "Sample Image",
                  title: "Sample Image",
                  width: 400,
                  height: 300,
                  src: "https://fpoimg.com/400x300?text=Card+Image&bg_color=cccccc&text_color=8F8F8F",
                },
                title: "Card Title",
              } as CardProps,
            } as unknown as GridItem,
            {
              component: "Card",
              props: {
                // layout: "image-top",
                eyebrow: "Card Eyebrow",
                description: "Card description goes here.",
                image: {
                  alt: "Sample Image",
                  title: "Sample Image",
                  width: 400,
                  height: 300,
                  src: "https://fpoimg.com/400x300?text=Card+Image&bg_color=cccccc&text_color=8F8F8F",
                },
                title: "Card Title",
              } as CardProps,
            } as unknown as GridItem,
            {
              component: "Card",
              props: {
                layout: "image-bottom",
                eyebrow: "Card Eyebrow",
                title: "Card Title",
                description: "Card description goes here.",
                image: {
                  alt: "Sample Image",
                  title: "Sample Image",
                  width: 400,
                  height: 300,
                  src: "https://fpoimg.com/400x300?text=Card+Image&bg_color=cccccc&text_color=8F8F8F",
                },
              } as CardProps,
            } as unknown as GridItem,
          ]}
        />
      </Section>
      <section>Featured projects</section>
      <Section classes="custom-section-class--grid-container">
        <Grid
          classes="custom-grid-class"
          gridColumns={3}
          hasGridColumnGap={true}
          gridItems={[
            {
              component: "Image",
              props: {
                alt: "Sample Image",
                title: "Sample Image",
                width: 640,
                height: 480,
                src: "https://fpoimg.com/640x480?text=Sample Image&bg_color=cccccc&text_color=8F8F8F",
              },
            } as unknown as GridItem,
            {
              component: "Image",
              props: {
                alt: "Sample Image 2",
                title: "Sample Image 2",
                width: 640,
                height: 480,
                src: "https://fpoimg.com/640x480?text=Sample Image 2&bg_color=cccccc&text_color=8F8F8F",
              },
            } as unknown as GridItem,
            {
              component: "Image",
              props: {
                alt: "Sample Image 3",
                title: "Sample Image 3",
                width: 640,
                height: 480,
                src: "https://fpoimg.com/640x480?text=Sample Image 3&bg_color=cccccc&text_color=8F8F8F",
              },
            } as unknown as GridItem,
          ]}
        />
      </Section>
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
