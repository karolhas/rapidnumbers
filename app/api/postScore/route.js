import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import connect from "../../../db";
import Score from "../../../models/Score";

export const POST = async (request) => {
  try {
    await connect();

    const session = await getSession({ req: request });

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { userId, nickname, score } = session.user;

    const newScore = new Score({
      userId,
      nickname,
      score,
    });

    await newScore.save();

    return new NextResponse("Score saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error saving score:", error);
    return new NextResponse("Error saving score", { status: 500 });
  }
};

// export const GET = async (request) => {
//   try {
//     await connect();
//     const scores = await Score.find();

//     return new NextResponse(JSON.stringify(scores), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Error in fetching posts " + error, {
//       status: 500,
//     });
//   }
// };
