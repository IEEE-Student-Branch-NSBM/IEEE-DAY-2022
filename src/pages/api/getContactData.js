// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
      id: 1,
      title: "Contact Us",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      location: "NSBM Green University",
      phoneList: [
        {number: "+94 xx xxx xxx"},
        {number: "+94 xx xxx xxx"},
        {number: "+94 xx xxx xxx"},
      ],
      emailList: [
        {email: "xxxxxxxxx@gmail.com"},
        {email: "xxxxxxxxx@gmail.com"},
        {email: "xxxxxxxxx@gmail.com"},
      ],
  })
}
