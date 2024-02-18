import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col pb-12 bg-zinc-900">
      <div className="flex flex-col self-center w-full max-w-[1276px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-8 text-xl text-white max-md:mt-10 max-md:max-w-full">
                <div className="self-center capitalize whitespace-nowrap leading-[160%]">
                </div>
                <div className="mt-32 text-7xl font-extrabold leading-[96.56px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  BudgetBuddy
                </div>
                <div className="mt-11 leading-8 capitalize max-md:mt-10 max-md:max-w-full">
                  Simplify Budgeting - stay on top of your finances <br />
                  <br />
                  Discover Top Stocks and watch your money grow
                  <br />
                  <br />
                  Learn About Savings Accounts
                </div>
                <div className="flex flex-col justify-center px-5 py-4 mt-8 w-40 max-w-full text-2xl font-semibold tracking-tight text-center whitespace-nowrap bg-zinc-900 rounded-2xl shadow-2xl">
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23ec569c22e791182e69c30f969eeecc5b42776fca689c83cbbc54bff2c1b7f?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-56 text-4xl font-semibold text-white capitalize max-md:mt-10 max-md:max-w-full">
          How it works...
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start px-16 py-12 mt-11 w-full bg-zinc-900 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mt-9 font-semibold text-white">
          <div className="text-6xl max-md:text-4xl">Track your Expenses</div>
          <div className="mt-7 text-2xl leading-8 capitalize">
            Step 1: Enter the money you spent last month
            <br />
            <br />
            BudgetBuddy automatically calculates the money you can save
          </div>
        </div>
        <div className="flex flex-col px-2 py-3 mt-6 backdrop-blur-[2px] bg-cyan-950 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex gap-5 justify-between px-0.5 text-2xl font-bold text-yellow-50 capitalize">
                    <div className="flex-auto self-end mt-6">
                      Welcome, Tarun
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                      className="aspect-[1.04] w-[54px]"
                    />
                  </div>
                  <div className="mt-4 text-xl font-semibold leading-7 text-white capitalize whitespace-nowrap">
                    Enter your Expenses
                  </div>
                  <div className="flex gap-3 justify-between mt-5 text-2xl font-semibold tracking-tight text-center text-white whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf220203341a2ec522a9d2d0062dc55ec6edeb8a258c8888333639a4e3239df0?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                      className="aspect-[1.1] w-[53px]"
                    />
                    <div className="flex flex-col flex-1 justify-center self-start px-8 py-1 mt-1.5 bg-teal-700 rounded-2xl shadow-2xl max-md:px-5">
                      <div className="justify-center px-10 py-1 max-md:px-5">
                        Food
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3.5 justify-between mt-2 text-2xl font-semibold tracking-tight text-center text-white whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be70bcb4de65767467e71ad50962f6d03138a52fa6cd6acb65121651c6c0cf2?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                      className="aspect-square w-[50px]"
                    />
                    <div className="flex flex-col flex-1 justify-center self-start px-8 py-1 bg-orange-300 rounded-2xl shadow-2xl max-md:px-5">
                      <div className="justify-center px-7 py-1 max-md:px-5">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3.5 justify-between items-start mt-1.5">
                    <div className="flex flex-col items-center mt-1.5 basis-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a5d85a51a4d2cdb6104468a334d9cef07f3a5527632ae135f9ccb58e9a0471?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                        className="w-14 aspect-[1.12]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa08575f1d747dac1e3faafbd31e53d5f3d86e880c24c41b03b0805a7aa8cf2b?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                        className="mt-2.5 w-14 aspect-[1.43]"
                      />
                    </div>
                    <div className="flex flex-col flex-1 text-2xl font-semibold tracking-tight text-center text-white whitespace-nowrap">
                      <div className="flex flex-col justify-center px-8 py-1 bg-cyan-200 rounded-2xl shadow-2xl max-md:px-5">
                        <div className="justify-center px-10 py-1 max-md:px-5">
                          Rent
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-8 py-1 mt-5 rounded-2xl shadow-2xl bg-zinc-600 max-md:px-5">
                        <div className="justify-center px-7 py-1 max-md:px-5">
                          Income
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-28 text-2xl font-semibold tracking-tight text-center text-white max-md:mt-10">
                  <div className="justify-center items-start py-1.5 pr-16 pl-3.5 rounded-2xl shadow-2xl bg-zinc-900 max-md:pr-5">
                    ${" "}
                  </div>
                  <div className="justify-center items-start py-1.5 pr-16 pl-3.5 mt-5 rounded-2xl shadow-2xl bg-zinc-900 max-md:pr-5">
                    ${" "}
                  </div>
                  <div className="justify-center items-start py-1.5 pr-16 pl-3.5 mt-6 rounded-2xl shadow-2xl bg-zinc-900 max-md:pr-5">
                    ${" "}
                  </div>
                  <div className="justify-center items-start py-1.5 pr-16 pl-3.5 mt-7 rounded-2xl shadow-2xl bg-zinc-900 max-md:pr-5">
                    ${" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between text-white max-md:flex-wrap max-md:max-w-full">
            <div className="grow text-2xl font-extrabold capitalize whitespace-nowrap">
              This Month, you can save ...
            </div>
            <div className="justify-center items-start py-1.5 pr-16 pl-3.5 text-2xl font-semibold tracking-tight text-center bg-amber-300 rounded-2xl shadow-2xl max-md:pr-5">
              ${" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start px-16 py-12 w-full bg-zinc-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col font-semibold text-white">
          <div className="text-6xl max-md:text-4xl">
            Discover Savings Accounts Available to You
          </div>
          <div className="mt-11 text-2xl leading-9 capitalize max-md:mt-10">
            Step 2 : Open an account <br />
            and grow your money tax-free
          </div>
        </div>
        <div className="flex flex-col justify-center pr-3 mt-11 font-bold capitalize bg-green-800 backdrop-blur-[2px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col pt-1.5 pb-7 pl-3.5 bg-green-800 backdrop-blur-[2px] max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-1 items-start mt-1.5">
                <div className="flex flex-col flex-1 mt-1">
                  <div className="text-2xl text-yellow-50">
                    Savings Dashboard
                  </div>
                  <div className="self-start mt-5 ml-5 text-xl text-white underline whitespace-nowrap max-md:ml-2.5">
                    You have <span className="underline">$50</span> to save!
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/273c3af232be9bbbb85f5e578eecdb87958414d8a5fafd2ca2970258828537dd?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                  className="aspect-[1.04] w-[54px]"
                />
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbc6e82b0f9cc03cfb2f7204e34165e2e331c761255ac755a508a43454764ee8?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                className="aspect-[1.04] w-[54px]"
              />
            </div>
            <div className="shrink-0 mt-4 bg-emerald-900 rounded-3xl shadow-sm h-[52px] max-md:max-w-full" />
            <div className="flex flex-col justify-end self-center py-6 pr-1 pl-5 text-lg text-white bg-teal-700 rounded-none shadow-sm max-md:max-w-full">
              <div className="max-md:max-w-full">
                AAPL (Apple) $50 gets you $167 in 5 years{" "}
              </div>
              <div className="mt-5 max-md:max-w-full">
                DELL (Dell Tech) $50 gets you $142 in 5 years{" "}
              </div>
              <div className="mt-5 max-md:max-w-full">
                qCOM (Qualcomm) $50 gets you $113 in 5 years{" "}
              </div>
              <div className="mt-5 max-md:max-w-full">
                NVDA (NIVIDIA) $50 gets you $82 in 5 years{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-20 pt-12 w-full bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-11 w-full max-w-[1156px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-start mt-14 font-semibold text-white max-md:mt-10">
            <div className="text-6xl whitespace-nowrap max-md:text-4xl">
              And It’s Done
            </div>
            <div className="mt-8 text-2xl leading-9 capitalize">
              Step 3 : Stay on top of your <br />
              finances by submitting your
              <br />
              budget monthly and save more
            </div>
          </div>
          <div className="flex flex-col px-6 pt-3 pb-8 bg-teal-700 backdrop-blur-[2px] max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-w-full text-2xl font-bold text-yellow-50 capitalize whitespace-nowrap w-[259px]">
              <div className="flex-auto self-end mt-6">Summary</div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b5563e2f8ce3e54ff63a44b2c42321aef52a2e7b1bc46917d0b48c11396c456?apiKey=ceca4ab5cadc44aa945984df769c0873&"
                className="aspect-[1.04] w-[54px]"
              />
            </div>
            <div className="mt-7 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-5 w-full text-xl leading-7 capitalize bg-white rounded-[35px] max-md:mt-5">
                    <div className="flex flex-col items-start pl-4">
                      <div className="font-bold text-black backdrop-blur-[2px]">
                        Your Portfolio
                      </div>
                      <div className="mt-6 font-semibold text-emerald-900">
                        Invested:{" "}
                      </div>
                      <div className="self-center mt-5 ml-3.5 font-extrabold text-teal-700">
                        $203
                      </div>
                    </div>
                    <div className="self-end mt-4 text-lg font-semibold text-emerald-900 whitespace-nowrap">
                      Since 2023, You’ve made
                    </div>
                    <div className="justify-center self-center px-11 py-1.5 mt-4 font-extrabold text-white whitespace-nowrap bg-yellow-600 rounded-2xl max-md:px-5">
                      $83
                    </div>
                    <div className="mt-2.5 text-lg font-semibold leading-6 text-center text-emerald-900">
                      In cash from <br />
                      investments
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow py-5 pr-5 w-full font-bold text-black capitalize bg-white rounded-[35px] max-md:mt-5">
                    <div className="text-xl backdrop-blur-[2px]">
                      Find out about more
                      <br />
                      options
                    </div>
                    <div className="mt-3.5 text-base lowercase">
                      Explore a range of investments for your financial goals.
                      Build a diverse portfolio with stocks, bonds, and more.
                      Enhance your earnings potential.
                    </div>
                    <div className="justify-center self-center px-4 py-2 mt-5 text-lg text-white underline whitespace-nowrap bg-yellow-600 rounded-2xl">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 mt-32 mb-0 ml-20 text-2xl font-semibold leading-9 text-white capitalize max-md:mt-10 max-md:max-w-full">
          BudgetBuddy is your go-to tool to start investing for the future
        </div>
      </div>
      <div className="flex flex-col items-center px-20 mt-20 w-full text-3xl text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-6xl font-semibold text-center max-md:text-4xl">
          FAQ’S
        </div>
        <div className="flex gap-5 justify-between mt-20 w-full max-w-[973px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            Do I need any financial knowledge to use BudgetBuddy?
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91d33155d3e8ba00b07f8c4432aef790cb573d5d56e76b5b6cc11d1dca9bdd7a?apiKey=ceca4ab5cadc44aa945984df769c0873&"
            className="w-9 aspect-square"
          />
        </div>
        <div className="mt-9 text-lg w-[933px] max-md:max-w-full">
          No prior financial knowledge is required. BudgetBuddy is designed to
          be user-friendly and intuitive, with educational content and resources
          to guide you through the process of budgeting and investing.
        </div>
        <div className="mt-8 max-w-full h-px bg-stone-300 rounded-[98.75px] w-[969px]" />
        <div className="flex gap-5 justify-between mt-5 w-full max-w-[973px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            How can BudgetBuddy help me?
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a84451f58a9b409fa516127b419e7303da4ac661edb151b4739cb822d4a3bba?apiKey=ceca4ab5cadc44aa945984df769c0873&"
            className="self-start w-9 aspect-square"
          />
        </div>
        <div className="mt-9 text-lg w-[933px] max-md:max-w-full">
          BudgetBuddy provides easy-to-use budgeting features, top-performing
          stock picks, and information about Tax-Free Savings Accounts (TFSA)
          and First Home Savings Accounts (FHSA) to empower users to manage
          their finances and start investing with confidence.
        </div>
        <div className="mt-5 max-w-full h-px bg-stone-300 rounded-[98.75px] w-[969px]" />
        <div className="flex gap-5 justify-between mt-3.5 w-full max-w-[974px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            How do I get started with BudgetBuddy?
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9eccf10b28d71df89b279bf01b5e416992f31d0077d506b35478852b0c93c8fd?apiKey=ceca4ab5cadc44aa945984df769c0873&"
            className="self-start w-9 aspect-square"
          />
        </div>
        <div className="mt-9 text-lg w-[933px] max-md:max-w-full">
          Getting started with BudgetBuddy is easy! Simply sign up for an
          account on our website, and you'll be guided through the process of
          setting up your budget and exploring investment options,
        </div>{" "}
        <div className="mt-7 max-w-full h-px bg-stone-300 rounded-[98.75px] w-[969px]" />{" "}
        <div className="justify-center self-start px-3.5 py-5 mt-16 ml-4 text-2xl font-semibold tracking-tight whitespace-nowrap bg-teal-700 rounded-2xl shadow-2xl max-md:mt-10 max-md:ml-2.5">
          Contact Us
        </div>{" "}
        <div className="flex gap-5 justify-between items-center mt-11 w-full max-w-screen-lg text-2xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto self-stretch my-auto"></div>{" "}
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4594d9c209b98da31f76380f7073bbfacced8680b0487a910639344e224fba3?apiKey=ceca4ab5cadc44aa945984df769c0873&"
            className="self-stretch max-w-full aspect-[1.04] w-[103px]"
          />{" "}
          <div className="flex-auto self-stretch my-auto capitalize leading-[132%]">
            Take control of your financial future
          </div>
        </div>
      </div>
    </div>
  );
}


const DashboardPage = () => {
  return (
    <div>
      <MyComponent />
    </div>

  );
}

export default DashboardPage;