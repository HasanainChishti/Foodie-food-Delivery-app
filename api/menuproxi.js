export default async function handler(req, res) {
  const { lat, lng, restaurantId } = req.query;

  const swiggyUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

  try {
    const response = await fetch(swiggyUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Swiggy fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch data from Swiggy API" });
  }
}