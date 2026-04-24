import HomeNavbar from '@/components/home/HomeNavbar';
import HomeHero from '@/components/home/HomeHero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeContacts from '@/components/home/HomeContacts';
import HomeFooter from '@/components/home/HomeFooter';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HomeNavbar scrollToSection={scrollToSection} />
      <HomeHero scrollToSection={scrollToSection} />
      <HomeAbout />
      <HomeContacts />
      <HomeFooter />
    </div>
  );
}
