import { CarouselPlugin } from './Carousel'

export default function CarouselSection() {
  return (
    <div className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:max-w-6xl max-w-3xl  md:text-center'>
          <h2 className='heading-one text-custom-color'>
            Certified Cloud Native Applied Generative AI Engineer
          </h2>
          {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mastering Cloud Native and Physical AI for the Next Technological
            Frontier
          </p> */}
          <p className='mt-6 paragraph-center'>
            Today&apos;s pivotal technological trends are Cloud Native (CN),
            Generative AI (GenAI), and Physical AI. Cloud Native technology
            offers a scalable and dependable platform for application operation,
            while AI equips these applications with intelligent, human-like
            capabilities. Physical AI aims to bridge the gap between digital
            intelligence and physical capability, creating systems that can
            understand and interact with the world in a human-like manner. Our
            aim is to train you to excel as a Cloud Native Applied Generative
            and Physical AI developer globally.
          </p>

          <p className='mt-2 paragraph-center'>
            {/* As the world rapidly embraces Cloud Native and Physical AI
            technologies, we stand on the edge of a new era of innovation.These
            advancements are set to revolutionize industries by enabling
            intelligent, human-like interactions in both digital and physical
            realms. This program is designed to equip you with the cutting-edge
            skills needed to excel as a Cloud Native Applied Generative and
            Physical AI developer, positioning you at the forefront of this
            transformative wave.  */}
            For the first time in Khyber Pakhtunkhwa, we are merging advanced AI
            training with practical, real-world applications, under the
            leadership of the provincial government. Our goal is to empower you
            to develop world-class AI applications, driving both technological
            innovation and economic growth in the region.
          </p>
          <p className='mt-2 paragraph-center'>
            Join us and become part of the next generation of tech leaders.
            <span className='font-semibold'>The future is yours to shape!</span>
          </p>
        </div>
        <CarouselPlugin />
      </div>
    </div>
  )
}
