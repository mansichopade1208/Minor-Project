const axios = require("axios");

const generateItinerary = async (req, res) => {

  try {

    const {
      destination,
      days,
      budget,
      travelers,
      interests,
    } = req.body;

    const prompt = `
Create a travel itinerary.

Destination: ${destination}
Days: ${days}
Budget: ${budget}
Travelers: ${travelers}
Interests: ${interests}

Return ONLY valid JSON.

{
  "tripName": "",
  "days": [
    {
      "day": 1,
      "city": "",
      "activities": [],
      "food": "",
      "hotel": ""
    }
  ]
}
`;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "deepseek/deepseek-chat",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",
        },
      }
    );

    let text =
      response.data.choices[0].message.content;

    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");

    const jsonData = JSON.parse(text);

    res.status(200).json(jsonData);

  } catch (error) {

    console.log(error.response?.data || error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  generateItinerary,
};