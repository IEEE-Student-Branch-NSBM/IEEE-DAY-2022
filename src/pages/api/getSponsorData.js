// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    headerTitle: "Our Supporters",
    headerDescription:
      "Sponsors are the backbone of any event. We are grateful to our sponsors for their support and contribution to IEEE Day NSBM 2022.",
    sponsorList: [
      {
        id: 1,
        companyLogo: "/images/companyLogos/orelit.png",
        detail: "Data Science and AI track",
      },

      {
        id: 2,
        companyLogo: "/images/companyLogos/virtusa.png",
        detail: "Cyber Security & Networking track",
      },
      {
        id: 3,
        companyLogo: "/images/companyLogos/virtusa.png",
        detail: "Engineering Session track",
      },
      {
        id: 4,
        companyLogo: "/images/companyLogos/Aeturnum.png",
        detail: "Bronze Partner",
      },
      {
        id: 5,
        companyLogo: "/images/companyLogos/nescafe.png",
        detail: "Beverage Partner",
      },
    ],
  });
}
