import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";

function readFilenames(dir:string) {
  try {
  
    var filenames = fs.readdirSync(dir); 
    console.log("xxx", filenames);

    filenames = fs.readdirSync("../"); 
    console.log("yyy", filenames);
    
    filenames = fs.readdirSync("node_modules/"); 
    console.log("zzz", filenames);

    fs.writeFileSync("node_modules/test.txt", "test");
       

    return filenames;

  } catch (error) {
    console.log(error);
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
