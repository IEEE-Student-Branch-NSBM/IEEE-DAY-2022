// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    headerTitle: "Frequently Asked Questions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    content: [
      {
        id: 1,
        question: "question 01",
        answer:
          "lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum is simply dummy text of the printing and typesetting industry",
        open: true,
      },
      {
        id: 2,
        question: "question 02",
        answer:
          "lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum is simply dummy text of the printing and typesetting industry",
        open: false,
      },
      {
        id: 3,
        question: "question 03",
        answer:
          "lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum is simply dummy text of the printing and typesetting industry",
        open: false,
      },
    ],
  });
}
