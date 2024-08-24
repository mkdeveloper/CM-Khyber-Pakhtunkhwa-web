import python from "../../../../public/kpk/course/python.jpeg";
import agents from "../../../../public/kpk/course/agents.jpeg";
import microservices from "../../../../public/kpk/course/microservices.jpeg";
import pytorch from "../../../../public/kpk/course/pytorch.jpeg";
import llama_3 from "../../../../public/kpk/course/llama_3.jpeg";
import Kubernetes from "../../../../public/kpk/course/Kubernetes.jpeg";
import Humanoid from "../../../../public/kpk/course/Humanoid.jpeg";
import Nextjs from "../../../../public/kpk/course/react.jpeg";
import Image from "next/image";
import Link from "next/link";

const Quarters = [
  {
    id: 1,
    title: " Prompt Engineering and Modern Python",
    href: "/course/q1",
    imageUrl: python,
    quater: "Quarter 1",
  },
  {
    id: 2,
    title: "Developing Multi AI Agent Systems",
    href: "/course/q2",

    imageUrl: agents,
    quater: "Quarter 2",
  },
  {
    id: 3,
    title: "Cloud Native Microservices",
    href: "/course/q3",
    imageUrl: microservices,
    quater: "Quarter 3",
  },
  {
    id: 4,
    title: "Generative AI with PyTorch",
    href: "/course/q4",
    imageUrl: pytorch,
    quater: "Quarter 4",
  },
  {
    id: 5,
    title: "Fine-Tuning Open-Source LLM (Llama 3)",
    href: "/course/q5",
    imageUrl: llama_3,
    quater: "Quarter 5",
  },
  {
    id: 6,
    title: "Kubernetes and Advanced CNAI",
    href: "/course/q6",
    imageUrl: Kubernetes,
    quater: "Quarter 6",
  },
  {
    id: 7,
    title: "Humanoid Robotics Development",
    href: "/course/q7",
    imageUrl: Humanoid,
    quater: "Quarter 7",
  },
  {
    id: 8,
    title: "Front-end Next.js and TypeScript",
    href: "/course/q8",
    imageUrl: Nextjs,
    quater: "Quarter 8",
  },
];

export default function CourseSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-custom-color sm:text-4xl">
            Comprehensive Learning Path for Advanced Technology Skills
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <span className="font-semibold">
              Master the Future: Getting You Ready For The $100 Trillion AI
              Industrial Revolution{" "}
            </span>
            <p className="text-justify">
              Embark on a comprehensive learning journey to acquire advanced
              technology skills. This structured program is designed to equip
              you with the expertise needed to thrive in the rapidly evolving AI
              landscape.
            </p>
            <p className="text-justify">
              The curriculum is divided into core and advanced quarters,
              providing a solid foundation in essential technologies and delving
              into cutting-edge advancements. Core quarters will focus on
              mastering Python, AI, and cloud-native microservices, while
              advanced quarters will explore generative AI, Kubernetes, and
              large language models.
            </p>
            <p className="text-justify">
              Regular breaks throughout the program allow for rest, reflection,
              and reinforcement of learned concepts. By joining this program,
              you will position yourself at the forefront of the AI revolution
              and unlock opportunities in the lucrative $100 trillion industry.
            </p>
            <p className="text-justify">
              Join us and become part of the next generation of tech leaders.
              <span className="font-medium">The future is yours to shape!</span>
            </p>
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {Quarters.map((course) => (
            <Link
              href={course.href}
              key={course.id}
              className="hover:scale-105 duration-300 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                width={500}
                height={500}
                placeholder="blur"
                src={course.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {course.quater}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span>
                  <span className="absolute inset-0" />
                  {course.title}
                </span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
