'use client';
import CardNav from './CardNav';

const Navbar = () => {
  const items = [
    {
      label: "Discover",
      bgColor: "#0f172a", // Slate 900
      textColor: "#fff",
      links: [
        { label: "All Tools", href: "/#all-tools", ariaLabel: "Browse all AI tools" },
        { label: "Categories", href: "/#categories", ariaLabel: "Browse categories" },
        { label: "Featured", href: "/#featured", ariaLabel: "Featured tools" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#020617", // Slate 950
      textColor: "#fff",
      links: [
        { label: "Stacks", href: "/stacks", ariaLabel: "Tech Stacks" },
        { label: "Blog", href: "/blog", ariaLabel: "Read our blog" },
        { label: "Newsletter", href: "/newsletter", ariaLabel: "Subscribe" }
      ]
    },
    {
      label: "Company",
      bgColor: "#00FF94", // Neon Green
      textColor: "#000",
      links: [
        { label: "About", href: "/about", ariaLabel: "About DeepCortex" },
        { label: "Contact", href: "mailto:hello@deepcortex.tech", ariaLabel: "Contact us" },
        { label: "Twitter", href: "https://twitter.com/deepcortex", ariaLabel: "Follow on Twitter" }
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
