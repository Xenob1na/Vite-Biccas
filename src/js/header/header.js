export function setupHead() {
    document.querySelector('#head').innerHTML = `
    <div class="max-w-[1180px] mx-auto mt-8">
        <div class="flex justify-between items-center">
            <div>
              <h4 class="text-[#54BD95] text-[50px] font-semibold"><a href="/">Biccas</a></h4>
            </div>
            <nav class="items-center">
              <ul class="flex gap-10 items-center">
                <li class="text-[18px] text-[#000] font-medium leading-normal hover:text-[#A6A6A6] delay-[100ms] transition-all"><a href="#Home">Home</a></li>
                <li class="text-[18px] text-[#000] font-medium leading-normal hover:text-[#A6A6A6] delay-[100ms] transition-all"><a href="#Product">Product</a></li>
                <li class="text-[18px] text-[#000] font-medium leading-normal hover:text-[#A6A6A6] delay-[100ms] transition-all"><a href="#FAQ">FAQ</a></li>
                <li class="text-[18px] text-[#000] font-medium leading-normal hover:text-[#A6A6A6] delay-[100ms] transition-all"><a href="#Blog">Blog</a></li>
                <li class="text-[18px] text-[#000] font-medium leading-normal hover:text-[#A6A6A6] delay-[100ms] transition-all"><a href="#About_Us">About Us</a></li>
              </ul>
            </nav>
            <div>
              <button class="text-[16px] text-[#000] font-medium leading-normal hover:text-[#A6A6A6] mr-5 delay-[100ms] transition-all">Login</button>
              <button class="text-[#F8F8FA] text-[16px] leading-normal bg-[#54BD95] py-[10px] px-[10px] rounded-[10px] hover:bg-[#37785f] delay-[100ms] transition-all">Sign up</button>
            </div>
        </div>
      </div>
`
}