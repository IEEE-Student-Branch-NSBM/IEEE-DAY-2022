// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    headerTitle: "IEEE DAY NSBM 2022 Track Sessions",
    headerDescription: "",
    trackList: [
      {
        id: 1,
        trackCategory: "Track 01",
        tile: "Data Science and AI",
        description:
          "Data science and Artificial Intelligence are two complementary fields of intelligent Systems, where Data science focuses on statistical techniques. Both these areas are high in the future tech industry. This session is open to all tech enthusiastic who are interested in learning Data Science and AI. Participants will be learning data structures, machine learning, and business intelligence like topics related to data science as well as can learn what AI is and its future developments and advantages.",
        image: "/images/rootcode.png",
      },
      {
        id: 2,
        trackCategory: "Track 02",
        tile: "AR & VR With Game Development",
        description:
          "Virtual reality (VR) and Augmented reality (AR) are two of the most promising technologies currently sweeping the world. AR and VR are making their way into every market, from gaming and entertainment toto 3D modeling and social networking. This session is all about how these technologies involve in-game developments and future advancements in the gaming industry. This is also open to all undergraduates.",
        image: "/images/rootcode.png",
      },
      {
        id: 3,
        trackCategory: "Track 03",
        tile: "Cyber Security & Networking",
        description:
          "It is essential for Cyber Security Professionals to have a solid understanding of how computers communicate. There is much more happening behind the scenes of computer networks than what can be observed when using applications. This will be a valuable awareness session for all the participants as it is a well discussed topic among IT enthusiasts. Interested undergraduates on the relevant topic will be the participants of this event.",
        image: "/images/rootcode.png",
      },
      {
        id: 4,
        trackCategory: "Track 04",
        tile: "Engineering Session",
        description:
          "A robotic system is capable of performing tasks and duties normally performed by humans. Robotics engineers with specialized training in electrical and mechanical engineering design robotic systems. Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. This session  is open for all the undergraduates who find this field interesting.",
        image: "/images/rootcode.png",
      },
    ],
  });
}
