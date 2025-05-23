import Project from '../components/Project';

export default function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: '/project1.png',
      deployed: 'https://your-app.onrender.com',
      github: 'https://github.com/lobungen/Booking-on-a-Budget.git'
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
