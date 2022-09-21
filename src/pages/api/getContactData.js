// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    title: "Contact Us",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    details: [
      {
        item: "Phone",
        list: [
          {
            id: 1,
            attribute: "+94 xx xxx xxx",
          },
          {
            id: 2,
            attribute: "+94 xx xxx xxx",
          },
          {
            id: 3,
            attribute: "+94 xx xxx xxx",
          },
        ],
      },
      {
        item: "Email",
        list: [
          {
            id: 1,
            attribute: "xxxxxxxxx@gmail.com",
          },
          {
            id: 2,
            attribute: "xxxxxxxxx@gmail.com",
          },
          {
            id: 3,
            attribute: "xxxxxxxxx@gmail.com",
          },
        ],
      },
      {
        item: "Location",
        list: [
          {
            id: 1,
            attribute: "NSBM Green University",
          },
        ],
      },
    ],
  });
}
