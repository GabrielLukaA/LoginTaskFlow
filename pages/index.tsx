export default function Home() {
  return (
<div className="h-screen w-screen bg-[#FCFCFC] flex items-center justify-center "> 
<div className="bola w-[216px] h-[209px] fixed top-[-104.5px] left-[762px]"></div>
<img src="Group88.png" alt="" width={"114px"} height={"118px"} className="fixed left-[26px] top-[28px]"/>
<div className="w-[1318px] h-[2218px] fixed bolaEnorme top-[-390px] right-[-760px]">

</div>
<div className="w-[325px] h-[306px] fixed otaBola left-[-162px] bottom-[52px]">

</div>
<div className="w-[457px] h-[443px] shadowzin rounded-[10px] bg-white z-[1000] flex items-center flex-col ">
<p className="mt-[58px] font-bold mb-[30px] text-2xl">Entrar</p>
<div className="flex gap-4 items-center ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5H8Z" clip-rule="evenodd"/></svg>
<input type="text" placeholder="Place your email" className="w-[303px] h-[62px] pl-5 hover:text-lg"/>
</div>
<div className="flex gap-4 items-center mt-[24px]">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
<input type="text" placeholder="Place your email" className="w-[303px] h-[62px] pl-5 hover:text-lg "/>
</div>
<div className="flex gap-12 mt-2">
<p className="ml-[24px] text-base font-semibold">Esqueceu a Senha?</p>
<p className="esquisito  text-base font-semibold">Registre-se</p>
</div>
<button className="text-white font-bold mt-[26px] px-6 py-2 rounded-lg bg-[#F04A94] w-[150px]">
Log In
</button>
</div>
</div>
  );
}
