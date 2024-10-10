import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Logo",
      link: "/design-catalog/logo",
    },
    {
      name: "Business Card",
      link: "/design-catalog/business-card",
    },
    {
      name: "Poster",
      link: "/design-catalog/poster",
    },
    {
      name: "Price List",
      link: "/design-catalog/price-list",
    },
    {
      name: "ID Card",
      link: "/design-catalog/id-card",
    },
    {
      name: "Menu",
      link: "/design-catalog/menu",
    },
    {
      name: "Invitation",
      link: "/design-catalog/invitation",
    },
    {
      name: "Label",
      link: "/design-catalog/label",
    },
    {
      name: "Loyalty Card",
      link: "/design-catalog/loyalty-card",
    },
    {
      name: "Flyer",
      link: "/design-catalog/flyer",
    },
    {
      name: "YouTube Banner",
      link: "/design-catalog/youtube-banner",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 text-xs pt-8">
      {categories.map((category, index) => (
        <Link key={index} href={category.link} className="cursor-pointer my-4">
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
