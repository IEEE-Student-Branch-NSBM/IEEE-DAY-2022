export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    image: "/images/Header 2.png",
    title: "Register",
    buttonLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdz-q-KXOog0kUqGCq5TyN4lHq_oCowi2roNGiw8AlM6sA1pw/viewform",
  });
}
