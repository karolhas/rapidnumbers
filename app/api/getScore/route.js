import connect from "../../../db";
import Score from "../../../models/Score";

export const GET = async (request) => {
  try {
    await connect();

    const scores = await Score.find().sort({ score: -1 }).limit(10);

    return new NextResponse(JSON.stringify(scores), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching scores:", error);
    return new NextResponse("Error fetching scores", { status: 500 });
  }
};
