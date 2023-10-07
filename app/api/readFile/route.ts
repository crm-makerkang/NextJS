import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

function readFilenames(dir:string) {
  try {
  
    const filenames = fs.readdirSync(dir); 
    console.log("xxx", filenames);

    return filenames;

  } catch (error) {
    console.log("read setting file err");
    return "Error"
  }
}

export async function GET(request: NextRequest) {
  console.log("GET method");

  const dir = request.nextUrl.searchParams.get("dir") 

  let filenames = readFilenames(dir!);  

  return NextResponse.json({
    message: filenames,
    success: true,
  })

}
