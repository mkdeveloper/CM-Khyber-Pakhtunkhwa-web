import Courses from './Course';

export default function CourseSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-custom-color sm:text-4xl">
            Comprehensive Learning Path for Advanced Technology Skills
          </h2>
          <p className="mt-2 paragraph-center text-justify">
            <span className="font-semibold text-xl">
              Master the Future: Getting You Ready For The $100 Trillion AI
              Industrial Revolution{' '}
            </span>
            Embark on a comprehensive 21-month learning journey to acquire
            advanced technology skills, structured across 7 quarters. This
            program equips you to thrive in the rapidly evolving AI landscape,
            with a curriculum divided into foundation and professional levels.
            The first 3 core quarters provide a solid foundation in Python, AI,
            and cloud-native microservices, while the next 3 CNAI Mastery
            quarters focus on generative AI, Kubernetes, and large language
            models. A final quarter dedicated to future technologies ensures you
            stay at the forefront of the AI revolution. Regular breaks
            throughout the program allow for rest and reinforcement of concepts,
            positioning you to unlock opportunities in the lucrative{' '}
            <span className="font-semibold capitalize">
              {' '}
              $100 trillion industry
            </span>
            .
            <p>
              The detailed outline of each course level and its quarters is
              provided below.
            </p>
          </p>
        </div>
        <Courses />
      </div>
    </div>
  );
}
