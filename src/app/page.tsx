import { LandingPrimaryImageCtaSection } from "@/components/landing/cta/LandingPrimaryCta";
import { SparklesIcon, LineChartIcon, LayersIcon } from "lucide-react";
import { LandingFeatureList } from "@/components/landing/feature/LandingFeatureList";
import { LandingSaleCtaSection } from "@/components/landing/cta/LandingSaleCta";
import { LandingFaqCollapsibleSection } from "@/components/landing/LandingFaqCollapsible";
import { Header } from "./header";
import { Footer } from "./footer";

const featureItems = [
  {
    title: "Crafted with Care, Built for Trust",
    description:
      "We use only premium materials to ensure every accessory is durable, safe, and designed with your pet’s comfort in mind—because they deserve nothing less.",
    icon: <SparklesIcon />,
  },
  {
    title: "Adventure-Ready Designs",
    description:
      "Whether exploring the park or trekking new trails, Kinee’s accessories are crafted to keep up with your adventures, offering unmatched style, comfort, and functionality for you and your furry companion.",
    icon: <LineChartIcon />,
  },
  {
    title: "Your Satisfaction, Our Promise",
    description:
      "As fellow pet lovers, we understand the need for dependable gear. That’s why Kinee guarantees a worry-free experience with every purchase—your happiness and your pet’s joy are what matter most.",
    icon: <LayersIcon />,
  },
];

const faqItems = [
  {
    question: "Walk Essentials",
    answers: [
      "Collars",
      "Leashes",
      "Harnesses",
      "Name Tags",
      "Collar & Leash Set",
    ],
  },
  {
    question: "Clothing",
    answers: [
      "Jackets",
      "Sweatshirts",
      "Sweaters",
      "Raincoats",
      "T-Shirts & Shirts",
      "Dresses",
    ],
  },
  {
    question: "Grooming",
    answers: [
      "Shampoos, Conditioners",
      "Brushes & Combs",
      "Towels & Wipessses",
      "Tick & Flea",
      "Dry Baths & Perfumes",
      "Paw Care",
    ],
  },
  {
    question: "Dog Toys",
    answers: [
      "Chew Toys",
      "Plush Toys",
      "Balls",
      "Interactive Toys",
      "Tough Chewers",
      "Rope Toys",
    ],
  },
  {
    question: "Food",
    answers: [
      "Special Meals",
      "Dry Food",
      "Wet Food",
      "Puppy Food",
      "Grain Free Food",
      "Hypoallergenic Food",
    ],
  },
  {
    question: "Treats, Biscuits & Chews",
    answers: [
      "Biscuits",
      "Vegetarian Treats",
      "Natural Treats",
      "Puppy Treats",
      "Dental Treats",
      "Soft & Hard Chews",
    ],
  },
];

export default function Component() {
  return (
    <>
      <Header />
      <LandingPrimaryImageCtaSection
        title="Kinee: For the hearts that lead and the paws that follow"
        description="Elevate your pet’s walk with the best accessories designed for comfort, style, and safety."
        imageSrc="/kinee/LUXURY_DESIGNER_DOG_COLLAR.png"
        imageAlt="Sample image"
        withBackground
        imageShadow="none"
        variant="secondary"
      />
      <LandingFaqCollapsibleSection
        title="Our Products"
        withBackground
        variant="secondary"
        faqItems={faqItems}
      />
      <LandingFeatureList
        title={"Why Choose Us?"}
        description={""}
        featureItems={featureItems}
        withBackground
        variant="secondary"
      />
      <LandingSaleCtaSection
        title="We Value Your Feedback!"
        description="Help us shape the future of Kinee. Take a quick survey and let us know what you think"
        ctaHref="https://docs.google.com/forms/d/1LNVSrLDZxgZVwMcoEmRzmkQIcWrGQxfBL4oX7_WK9Kk/edit"
        ctaLabel="Share feedback"
        withBackground
        variant="secondary"
      />
      <Footer />
    </>
  );
}
