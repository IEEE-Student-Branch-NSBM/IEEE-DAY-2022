// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    title: "IEEE DAY 2022",
    description:
      "IEEE Day is a celebration of worldwide IEEE members and engineers gathered to share their technical knowledge among them and Worldwide celebrations demonstrate the ways thousands of IEEE members in local communities join to collaborate on ideas that Leverage technology for a better tomorrow. We are delighted to announce the IEEE Student Branch of NSBM ready to celebrate  IEEE Day 2022, the most alluring event of the year with the most prominent collaboration of Engineers and IEEE Members worldwide. We hope to demonstrate how IEEE members in local communities work together to cooperate on ideas that harness technology for a better tomorrow. ",
    image: "/images/nsbm.png", // Image on the about section
    buttonLink: "https://ieeeday.org", // Link of the more details button
  });
}
