// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    headerTitle: "Event Speakers",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    speakerList: [
      {
        id: 1,
        speakerName: "Track 01",
        designation: "Data Science and AI",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 2,
        speakerName: "Track 02",
        designation: "AR & VR With Game Development",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 3,
        speakerName: "Track 03",
        designation: "Cyber Security & Networking",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 4,
        speakerName: "Track 04",
        designation: "Engineering Session",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 5,
        speakerName: "Track 05",
        designation: "Student Session",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 6,
        speakerName: "Track 02",
        designation: "AR & VR With Game Development",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 7,
        speakerName: "Track 03",
        designation: "Cyber Security & Networking",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
      {
        id: 8,
        speakerName: "Track 04",
        designation: "Engineering Session",
        company: "",
        image: "/images/rootcode.png",
        facebookUrl: "",
        linkedinUrl: "",
      },
    ],
  });
}
