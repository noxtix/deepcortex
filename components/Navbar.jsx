'use client';
import CardNav from './CardNav';

const Navbar = () => {
  const items = [
    {
      label: "Discover",
      bgColor: "#0f172a", // Slate 900
      textColor: "#fff",
      links: [
        { label: "Home", href: "/", ariaLabel: "Home Page" },
        { label: "All Tools", href: "/tools", ariaLabel: "Browse all AI tools" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#020617", // Slate 950
      textColor: "#fff",
      links: [
        { label: "Stacks", href: "/stacks", ariaLabel: "Tech Stacks" },
        { label: "Blog", href: "/blog", ariaLabel: "Read our blog" }
      ]
    },
    {
      label: "Company",
      bgColor: "#00FF94", // Neon Green
      textColor: "#000",
      links: [
        { label: "About", href: "/about", ariaLabel: "About DeepCortex" },
        { label: "Instagram", href: "https://instagram.com/deepcortex.tech", ariaLabel: "Follow on Instagram" }
      ]
    }
  ];

  return (
    <div className="relative z-50">
      <CardNav
        logo="/logo.png"
        logoAlt="DeepCortex"
        items={items}
        baseColor="rgba(3, 7, 18, 0.8)"
        menuColor="#fff"
        buttonBgColor="#00FF94"
        buttonTextColor="#000"
        ease="power3.out"
      />
    </div>
  );
};

export default Navbar;
