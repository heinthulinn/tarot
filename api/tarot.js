export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { cards, question, language } = req.body;
  
    return res.status(200).json({
      success: true,
      message: "Tarot API is working",
      received: {
        cards,
        question,
        language
      }
    });
  }
  