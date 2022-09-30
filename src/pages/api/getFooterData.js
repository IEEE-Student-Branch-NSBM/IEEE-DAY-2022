// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    id: 1,
    ieeeDayUrl: "https://ieeeday.org/",
    ieeeNsbmUrl: "https://ieeensbm.org/",
    facebookUrl: "https://www.facebook.com/ieeensbm/",
    instagramUrl: "https://www.instagram.com/nsbmieee/",
    linkedinUrl: "https://www.linkedin.com/company/ieee-student-branch-nsbm/",
    youtubeUrl: "https://www.youtube.com/channel/UCx0ZNiZrDQCEWKbqWfp9YcQ",
    termsUrl: "#",
    privacyPolicyUrl: "#",
  });
}
