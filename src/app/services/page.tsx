import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import ServicesShowcase from "../sections/ServicesShowcase";
import ContactForm from "@/app/sections/ContactForm";
import Testimonials from "@/app/sections/Testimonials";

export default function Services() {
  return (
    <div>
      <div className="mb-8 p-4 pb-12 md:px-8 md:py-12 lg:px-16 lg:py-24">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full grid grid-cols-12 p-4 md:p-8 xl:p-16 pb-10  sm:p-20 font-semibold text-9xl gap-y-4 mb-20">
            <div className="col-start-5 col-end-12 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text ">
              WHAT WE
            </div>
            <div className="absolute top-[10px] left-1 ">
              <img
                src={"/images/work/hero-bg.svg"}
                alt={"Dzign bg"}
                height={800}
                width={900}
                className="mix-blend-luminosity"
              />
            </div>
            <div className="col-start-3 col-end-10 bg-gradient-to-t to-[#A100FF]  from-[#21005E] text-transparent bg-clip-text">
              EXCEL AT
            </div>
          </div>
          <div className="flex justify-between w-full p-4 md:p-8 xl:px-16 pb-20  sm:p-20">
            <p className="text-[#21005E] max-w-[35%]">
              Out staffing of IT-specialists, strengthening teams and projects
            </p>
            <div className="min-w-[30%]">
              <CTAButton floatingImageUrl="/images/booked_fast.svg" />
            </div>
          </div>
        </main>

        <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-4 overflow-x-auto md:grid-cols-2 mx-auto md:max-w-fit min-w-max px-4 md:h-[530px]">
          <div className="md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2">
            <ServiceCard
              title="Web Services"
              description="Your landing page is the first thing your customers, investors and partners see."
              deviceImage="/images/work/macbook.jpg"
              backgroundImage="/images/work/background.png"
              className="md:w-full md:h-full"
            />
          </div>

          <div className="md:w-[442px]">
            <ServiceCard
              title="App Design"
              description="User experience makes all the difference between good products and great ones."
              deviceImage="/images/work/mobile.svg"
              backgroundImage="/images/work/sand-cloud.png"
              className="md:w-full md:h-full "
            />
          </div>

          <div className="md:w-[442px]">
            <ServiceCard
              title="Business Consulting"
              description="AI, LLMs, NLP: Unlocking the Future of Intelligent Interaction and Language Processing."
              deviceImage="/images/work/ai-image.svg"
              backgroundImage="/images/work/background.png"
              className="md:w-full md:h-full "
            />
          </div>
        </div>
        <ServicesShowcase />
      </div>

      <div>
        <Testimonials />
        <ContactForm />
      </div>
    </div>
  );
}
