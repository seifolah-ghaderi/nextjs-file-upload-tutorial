import fs from "fs/promises";

export default function Home() {
  async function handleUpload(formData: FormData) {
    "use server";
    const audioFile = formData.get("audio") as File;
    //const fs = require('fs');
    const buffer = await audioFile.arrayBuffer();
    const audioBuffer = Buffer.from(buffer);
    const path = require("path");
    var p = path.join(process.cwd(), audioFile.name)
    console.log(p)
    await fs.writeFile(p, audioBuffer);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold pb-24">Transcribe Audio</h1>
      <form>
        <label htmlFor="audio" className="block">
          Audio file:
        </label>
        <input type="file" name="audio" className="w-96 p-4" />
        <button className="bg-blue-500 text-white p-4 rounded">Submit</button>
      </form>
    </main>
  );
}
