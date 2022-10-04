// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    headerTitle: "Agenda",

    agendaData: [
      {
        id: 1,
        time: "08:30 AM – 09:15 AM",
        prefixImg: "/images/agendaPrefix/register.jpg",
        title: "Registration Opening",
        description: " ",
      },
      {
        id: 2,
        time: "09:15 AM – 09:25 AM",
        prefixImg: "/images/agendaPrefix/opening.jpg",
        title: "Opening Remarks",
        description: " ",
      },
      {
        id: 3,
        time: "09:25 AM – 09:35 AM",
        prefixImg: "/images/agendaPrefix/MsDulanjali.jpeg",
        title: "Welcome Speech",
        description: "By Ms. Dulanjali Wijesekara ",
      },
      {
        id: 4,
        time: "09:35 AM – 09:45 AM",
        prefixImg: "/images/agendaPrefix/DrRasika.jpg",
        title: "Speech",
        description: "By Dr. Rasika Ranaweera",
      },
      {
        id: 5,
        time: "09:45 AM – 10:15 AM",
        prefixImg: "/images/agendaPrefix/ProfChaminda.jpg",
        title: "Speech",
        description: "By Prof. Chaminda Rathnayake",
      },
      {
        id: 6,
        time: "10:15 AM – 10:25 AM",
        prefixImg: "/images/agendaPrefix/misnad.jpg",
        title: "Keynote Speech",
        description: "By Mr. Misnad Haque",
      },
      {
        id: 7,
        time: "10:25 AM – 10:35 AM",
        prefixImg: "/images/agendaPrefix/cake.jpg",
        title: "Cutting Cake",
        description: " ",
      },
      {
        id: 8,
        time: "10:35 AM – 10:40 AM",
        prefixImg: "/images/agendaPrefix/intro.jpg",
        title: "Introduction to Parallel Sessions",
        description: " ",
      },
      {
        id: 9,
        time: "10:40 AM – 11:00 AM",
        prefixImg: "/images/agendaPrefix/photo.jpg",
        title: "Group Photo",
        description: " ",
      },
      {
        id: 10,
        time: "11:00 AM – 13:30 PM",
        prefixImg: "/images/agendaPrefix/sample.jpg",
        title: "Track Sessions",
        description: "",
      },
      {
        id: 11,
        time: "01:30 PM – 02:00 PM",
        prefixImg: "/images/agendaPrefix/lunch.jpg",
        title: "Lunch Break",
        description: "",
      },
      {
        id: 12,
        time: "02:00 PM – 02:45 PM",
        prefixImg: "/images/agendaPrefix/aeturnum.jpeg",
        title: "Speech",
        description: "By Aeturnum",
      },
      {
        id: 13,
        time: "02:45 PM – 02:55 PM",
        prefixImg: "/images/agendaPrefix/music.jpg",
        title: "Entertainment Session",
        description: "",
      },
      {
        id: 14,
        time: "03:00 PM – 03:45 PM",
        prefixImg: "/images/agendaPrefix/MrKrishantha.jpeg",
        title: "Tech Talk",
        description: "By Mr. Krishantha Dinesh",
      },
      {
        id: 15,
        time: "03:45 PM – 04:00 PM",
        prefixImg: "/images/agendaPrefix/awards.jpg",
        title: "Prize giving",
        description: "For Artistspace and MAD Fest 2022",
      },
      {
        id: 16,
        time: "04:00 PM – 04:15 PM",
        prefixImg: "/images/agendaPrefix/thankyou.jpg",
        title: "Thank you Speech",
        description: "",
      },
    ],
  });
}
