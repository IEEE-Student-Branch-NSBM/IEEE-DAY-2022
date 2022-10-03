// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    headerTitle: "Our Partners and Sponsors",
    headerDescription:
      "Presenting our gracious partners that have helped make this event spectacular and conceivable.",
    sponsorList: [
      {
        id: 1,
        companyLogo: "/images/companyLogos/orelit.png",
        detail: "Data Science and AI track",
      },

      {
        id: 2,
        companyLogo: "/images/companyLogos/virtusa.png",
        detail: "Industry partner",
      },
      {
        id: 3,
        companyLogo: "/images/companyLogos/Aeturnum.png",
        detail: "Bronze Partner",
      },
      {
        id: 4,
        companyLogo: "/images/companyLogos/nescafe.png",
        detail: "Beverage Partner",
      },
      {
        id: 5,
        companyLogo: "/images/companyLogos/nsbmMedia.png",
        detail: "Official Media Partner",
      },
    ],
  });
}
