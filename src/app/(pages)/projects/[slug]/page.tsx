import React from 'react';

type ProjectSlugProps = Awaited<{
  params: {
    slug: string;
  };
}>;

async function getProjectBySlug(slug: string) {
  // Simulate fetching project data based on the slug
  return { title: `Project: ${slug}`, content: "Project details here..." };
}

export default async function ProjectSlug({ params }: ProjectSlugProps) {
  const { slug } =  params.slug ? params : { slug: "no-slug" };

  const project = await getProjectBySlug(slug);
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </>
  );
}
