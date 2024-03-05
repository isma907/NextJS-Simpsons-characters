import { SimpsonCharacter } from "../../../../lib/models/simpsons";
import { NextRequest } from "next/server";
import Characters from "../../../../lib/models/simpsons";
import connect from "../../../../lib/db";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const filterObj = await req.json();
    const query = req.nextUrl.searchParams;
    const page = Number(query.page ?? 1); // Using nullish coalescing operator
    const limit = Number(query.limit ?? 10); // Using nullish coalescing operator

    const regexFilterObj: Partial<Record<keyof SimpsonCharacter, RegExp>> = {};
    for (const key in filterObj) {
      if (Object.prototype.hasOwnProperty.call(filterObj, key)) {
        regexFilterObj[key as keyof SimpsonCharacter] = new RegExp(
          filterObj[key],
          "i"
        );
      }
    }

    await connect();
    const users: SimpsonCharacter[] = await Characters.find(regexFilterObj)
      .skip((page - 1) * limit)
      .limit(limit);

    const characters: SimpsonCharacter[] = users.map((user: any) => ({
      _id: user._id,
      name: user.name,
      resume: user.resume,
      image: user.image,
      gender: user.gender,
      status: user.status,
      occupation: user.occupation,
    }));

    return NextResponse.json(characters);
  } catch (error) {
    console.error(error);
    return NextResponse.json("ERRR");
  }
}
