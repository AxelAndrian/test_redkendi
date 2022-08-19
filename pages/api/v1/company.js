export default function handler(req, res) {
  res.status(200).json(
    JSON.parse(`
      {
        "status_code": 200,
        "success": true,
        "message": "success get data",
        "data": [
          "/images/company/mayora.png",
          "/images/company/sumco.png",
          "/images/company/japfa.png",
          "/images/company/seiwa.jpg",
          "/images/company/isuzu.png",
          "/images/company/kansai.png",
          "/images/company/adhi.png"
        ],
        "errors": null
      }
    `)
  )
}