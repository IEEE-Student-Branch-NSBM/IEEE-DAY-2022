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
        question: "What is IEEE Day?",
        answer:
          "IEEE Day is a yearly celebration of the initial time in history when engineers from all over the world got together to explore technical ideas in 1884. One objective of IEEE Day is to emphasize the ways in which IEEE members work together in their communities to develop innovative technology-based concepts.",
        open: true,
      },
      {
        id: 2,
        question: "When do we celebrate IEEE Day NSBM 2022?",
        answer:
          "IEEE Day is celebrated on  4th October 2022. . This year, IEEE Day NSBM will take place on 5th October 2022.",
        open: false,
      },
      {
        id: 3,
        question: "Who is eligible to celebrate IEEE Day NSBM 2022?",
        answer:
          "IEEE Day is a holiday for all IEEE members! Attending regional IEEE Day events, organized by the local IEEE Section or IEEE Student Branch, is a great way to connect with others who have a similar interest for technology and IEEE and to work with them on projects.",
        open: false,
      },
    ],
  });
}
