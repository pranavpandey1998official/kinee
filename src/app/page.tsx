import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { SparklesIcon, LineChartIcon, LayersIcon } from 'lucide-react';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

const featureItems = [
  {
    title: 'Quality You Can Trust',
    description:
      'We source only the highest-quality materials, ensuring every accessory is made to last. Your pet’s comfort and safety are our priority.',
    icon: <SparklesIcon />,
  },
  {
    title: 'Designed for Adventure',
    description:
      'From the city streets to the wilderness, our accessories are designed to meet the demands of your active lifestyle and provide ultimate convenience.',
    icon: <LineChartIcon />,
  },
  {
    title: 'Customer Satisfaction Guarantee',
    description:
      'We’re pet owners too, and we know how important it is to have reliable gear. If you’re not satisfied with your purchase, we offer hassle-free returns because we want you and your pet to be happy.',
    icon: <LayersIcon />,
  },
]

const faqItems = [
  {
    question: 'Can I get a refund?',
    answer:
      'Yes, you can get a refund within 30 days of your purchase. No questions asked.',
  },
  {
    question: 'What technologies are used?',
    answer:
      'We use Next.js, Tailwind CSS, and Vercel for the deployment.',
  },
  {
    question: 'What do I get if I pre-order?',
    answer:
      'With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.',
  },
]

export default function Component() {
  return (
    <>
      <LandingPrimaryImageCtaSection
        title="Welcome to Kinee – Where Pet Adventures Begin!"
        description="Elevate your pet’s walk with the best accessories designed for comfort, style, and safety."
        imageSrc="/dog_cat.png"
        imageAlt="Sample image"
        withBackground
        withBackgroundGlow
        imageShadow='none'
        variant="secondary"
      >
      </LandingPrimaryImageCtaSection>
      <LandingFeatureList
        withBackground
        variant="secondary"
        title={"Why Choose Us?"}
        description={
          ''
        }
        featureItems={featureItems}
        />


        <LandingSaleCtaSection
          withBackground
          variant="secondary"
          title="Ready to get started?"
          description="Pre-order today and get a 50% discount on the final price for the first 3 months. No credit card required."
          ctaHref="https://gum.co/product"
          ctaLabel="Pre-order for $49"
        />
        <LandingFaqCollapsibleSection
          title='FAQ'
          withBackground
          variant='secondary'
          description="Looking to learn more about our product? Here are some of the most common
          questions."
          faqItems={faqItems}
        />
    </>
  );
}
