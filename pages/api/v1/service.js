export default function handler(req, res) {
  res.status(200).json(
    JSON.parse(`
      {
        "status_code": 200,
        "success": true,
        "message": "success get data",
        "data": [
          "/images/service/service_1.png",
          "/images/service/service_2.png",
          "/images/service/service_3.png",
          "/images/service/service_4.png",
          "/images/service/service_5.png",
          "/images/service/service_6.png"
        ],
        "errors": null
      }
    `)
  )
}