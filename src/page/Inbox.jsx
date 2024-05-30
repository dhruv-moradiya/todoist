import React from 'react';

function Inbox() {
  return (
    <div className="flex max-h-screen w-full flex-col gap-2 px-3 py-3">
      <div className="flex w-full justify-end">
        <button className="flex w-fit items-center gap-2 rounded-[4px] px-3 py-[4px] duration-200 hover:bg-[#80808024]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="nonzero"
              d="M15 14.5a2 2 0 0 1 1.936 1.498L19.5 16a.5.5 0 0 1 0 1l-2.563.001a2.001 2.001 0 0 1-3.874 0L4.5 17a.5.5 0 0 1 0-1l8.564-.002A2 2 0 0 1 15 14.5zm-.982 1.81.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0 0 14 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 0 0 1.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0 0 16 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 0 0-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 0 1 1.936 1.498L19.5 11a.5.5 0 0 1 0 1l-8.563.001a2.001 2.001 0 0 1-3.874 0L4.5 12a.5.5 0 0 1 0-1l2.564-.002A2 2 0 0 1 9 9.5zm0 1a.998.998 0 0 0-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 0 0 1.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0 0 10 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0 0 9 10.5zm6-6a2 2 0 0 1 1.936 1.498L19.5 6a.5.5 0 0 1 0 1l-2.563.001a2.001 2.001 0 0 1-3.874 0L4.5 7a.5.5 0 0 1 0-1l8.564-.002A2 2 0 0 1 15 4.5zm0 1a.998.998 0 0 0-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 0 0 1.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0 0 15 5.5z"
            ></path>
          </svg>
          <p className="text-xs">View</p>
        </button>
      </div>


      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-8">
          <h2 className="self-start text-3xl font-extrabold">Inbox</h2>
          <ul className="flex w-[700px] flex-col items-start gap-4">
            <li className="flex w-full items-start gap-1 border-b-[1px] border-gray-400 pb-2">
              <div className="cursor-grab text-base">
                <span class="material-symbols-outlined text-xl">
                  drag_indicator
                </span>
              </div>

              <div>
                <div className="circle font-light">
                  <i className="ri-checkbox-blank-circle-line text-2xl font-extralight"></i>
                  <i className="ri-check-line check text-base"></i>
                </div>
              </div>

              <div className="mx-3 mr-auto flex grow flex-col gap-1">
                <h4 className="text-base font-medium tracking-wide">
                  Browse the Todoist Inspiration Hub
                </h4>
                <p className="text-xs tracking-wide">
                  For productivity advice and to sign up for our newsletter
                </p>
                <div className="flex items-center gap-1 font-semibold text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 12 12"
                    class="calendar_icon"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1ZM2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7ZM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-[11.5px]">Tomorrow</p>
                </div>
              </div>

              <div className="ml-auto">
                <svg width="24" height="24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="currentColor"
                      d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"
                    ></path>
                    <path
                      stroke="currentColor"
                      d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"
                    ></path>
                  </g>
                </svg>
              </div>
            </li>
            <li className="flex w-full items-start gap-1 border-b-[1px] border-gray-400 pb-2">
              <div className="cursor-grab text-base">
                <span class="material-symbols-outlined text-xl">
                  drag_indicator
                </span>
              </div>

              <div>
                <div className="circle font-light">
                  <i className="ri-checkbox-blank-circle-line text-2xl font-extralight"></i>
                  <i className="ri-check-line check text-base"></i>
                </div>
              </div>

              <div className="mx-3 mr-auto flex grow flex-col gap-1">
                <h4 className="text-base font-medium tracking-wide">
                  Browse the Todoist Inspiration Hub
                </h4>
                <p className="text-xs tracking-wide">
                  For productivity advice and to sign up for our newsletter
                </p>
                <div className="flex items-center gap-1 font-semibold text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 12 12"
                    class="calendar_icon"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1ZM2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7ZM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <p className="text-[11.5px]">Tomorrow</p>
                </div>
              </div>

              <div className="ml-auto">
                <svg width="24" height="24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="currentColor"
                      d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"
                    ></path>
                    <path
                      stroke="currentColor"
                      d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"
                    ></path>
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Inbox;
