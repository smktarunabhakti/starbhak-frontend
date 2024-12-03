import Image from "next/image";
import bgSuccessReset from "@/assets/bgSuccess.svg";
import wave from "@/assets/wave6.svg";
import check from "@/assets/Check.svg";
import { Button } from "../ui/button";

export function SuccessValidate() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center relative bg-blue-600 rounded-r-3xl">
          <Image src={bgSuccessReset} alt="" />

          <div className="absolute bottom-0 w-full">
            <Image src={wave} alt="" />
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center p-2 gap-16">

          <div className="flex flex-col justify-center items-center gap-10">
            <Image src={check} alt="" />

            <div className="flex flex-col items-center">
              <h2 className="font-bold text-2xl" >Berhasil Validasi</h2>
              <p>Silahkan cek email kamu dan buat password baru</p>
            </div>
          </div>

          <Button type="submit" className="w-96 bg-blue-600 text-center p-2 mx-20">
            Masuk
          </Button>
        </div>
      </div>
    </>
  );
}
