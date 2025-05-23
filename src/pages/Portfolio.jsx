import Project from '../components/Project';

export default function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: '/project1.png',
      deployed: 'https://example.com/project1',
      github: 'https://github.com/yourname/project1'
    },
    // Repeat for 6 total
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((p, i) => (
        <Project key={i} {...p} />
      ))}
    </section>
  );
}
