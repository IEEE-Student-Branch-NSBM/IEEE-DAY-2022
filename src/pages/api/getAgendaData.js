// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    title: "Agenda",

    agendaData: [
      {
        id: 1,
        time: "3.00 PM – 3.10 PM",
        prefixImg: "/images/agendaPrefix/sample.jpg",
        title: "Welcome Speech",
        description: "By Prof. Pradeep Abeygunawardhana",
      },
      {
        id: 2,
        time: "3.10 PM – 3.30 PM",
        prefixImg: "/images/agendaPrefix/sample.jpg",
        title: "Keynote Speech",
        description: "By Prof. Pradeep Abeygunawardhana",
      },
    ],
  });
}
