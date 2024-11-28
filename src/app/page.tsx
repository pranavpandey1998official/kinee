import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { SparklesIcon, LineChartIcon, LayersIcon, Twitter, Facebook, LinkedinIcon } from 'lucide-react';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import Image from 'next/image';

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

// components/Footer.js
import Link from 'next/link';

function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Company Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo_hor.png" alt="Company Logo"  width={120} height={40}/>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="https://www.facebook.com">
              
              <Facebook />
            </Link>

            <Link href="https://twitter.com">
              
            <Twitter />

            </Link>

            <Link href="https://www.linkedin.com">
                <LinkedinIcon />

            </Link>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Kniee. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}


function Header() {
  return (
    <header className="bg-secondary-100/20 text-white">
      <div className="container mx-auto py-4">
        <Image
          src="/logo_hor.png"
          alt="Kinee logo"
          width={120}
          height={40}
        />
      </div>
    </header>
  );
}

export default function Component() {
  return (
    <>
      <Header />    
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
        title={"Why Choose Us?"}
        description={
          ''
        }
        featureItems={featureItems}
        />
        <LandingSaleCtaSection
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
        <Footer />
    </>
  );
}
