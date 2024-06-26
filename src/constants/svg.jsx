export function Priority({ width = 16, height = 16, fill = 'none' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M4.223 4.584A.5.5 0 0 0 4 5v14.5a.5.5 0 0 0 1 0v-5.723C5.886 13.262 7.05 13 8.5 13c.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.759 0 3.187-.357 4.277-1.084A.5.5 0 0 0 20 13V4.5a.5.5 0 0 0-.777-.416C18.313 4.69 17.075 5 15.5 5c-.97 0-1.704-.178-3.342-.724C10.421 3.696 9.613 3.5 8.5 3.5c-1.758 0-3.187.357-4.277 1.084Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Cancel() {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
}

export function ShowMore() {
  return (
    <svg width="15" height="3" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
      ></path>
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M7.646 9.646 4.854 6.854A.5.5 0 0 1 5.207 6h5.586a.5.5 0 0 1 .353.854L8.354 9.646a.5.5 0 0 1-.708 0Z"
      ></path>
    </svg>
  );
}

export function Check() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width="12"
      height="12"
      aria-hidden="true"
      className="dropdown_select_checkmark"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z"
      ></path>
    </svg>
  );
}

export function Section() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M17.5 20a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11zM16 8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h8zm0 1H8a1 1 0 0 0-.993.883L7 10v5a1 1 0 0 0 .883.993L8 16h8a1 1 0 0 0 .993-.883L17 15v-5a1 1 0 0 0-.883-.993L16 9zm1.5-5a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1h11z"
      ></path>
    </svg>
  );
}

export function HashTag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.994 6.082a.5.5 0 1 0-.987-.164L14.493 9h-3.986l.486-2.918a.5.5 0 1 0-.986-.164L9.493 9H7a.5.5 0 1 0 0 1h2.326l-.666 4H6a.5.5 0 0 0 0 1h2.493l-.486 2.918a.5.5 0 1 0 .986.164L9.507 15h3.986l-.486 2.918a.5.5 0 1 0 .987.164L14.507 15H17a.5.5 0 1 0 0-1h-2.326l.667-4H18a.5.5 0 1 0 0-1h-2.493l.487-2.918ZM14.327 10H10.34l-.667 4h3.987l.667-4Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Inbox() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="AyswQEh"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.062 4h7.876a2 2 0 0 1 1.94 1.515l2.062 8.246c.04.159.06.322.06.486V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.754a2 2 0 0 1 .06-.485L6.12 5.515A2 2 0 0 1 8.061 4Zm0 1a1 1 0 0 0-.97.758L5.03 14.004a1 1 0 0 0-.03.242V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.754a.997.997 0 0 0-.03-.242L16.91 5.758a1 1 0 0 0-.97-.758H8.061Zm6.643 10a2.75 2.75 0 0 1-5.41 0H7a.5.5 0 1 1 0-1h2.75a.5.5 0 0 1 .5.5 1.75 1.75 0 1 0 3.5 0 .5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-2.295Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function DueDate() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className=""
    >
      <path
        fill="currentColor"
        d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
      ></path>
    </svg>
  );
}

export function View() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M15 14.5a2 2 0 0 1 1.936 1.498L19.5 16a.5.5 0 0 1 0 1l-2.563.001a2.001 2.001 0 0 1-3.874 0L4.5 17a.5.5 0 0 1 0-1l8.564-.002A2 2 0 0 1 15 14.5zm-.982 1.81.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0 0 14 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 0 0 1.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0 0 16 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 0 0-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 0 1 1.936 1.498L19.5 11a.5.5 0 0 1 0 1l-8.563.001a2.001 2.001 0 0 1-3.874 0L4.5 12a.5.5 0 0 1 0-1l2.564-.002A2 2 0 0 1 9 9.5zm0 1a.998.998 0 0 0-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 0 0 1.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0 0 10 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0 0 9 10.5zm6-6a2 2 0 0 1 1.936 1.498L19.5 6a.5.5 0 0 1 0 1l-2.563.001a2.001 2.001 0 0 1-3.874 0L4.5 7a.5.5 0 0 1 0-1l8.564-.002A2 2 0 0 1 15 4.5zm0 1a.998.998 0 0 0-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 0 0 1.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0 0 15 5.5z"
      ></path>
    </svg>
  );
}

export function DragIcon() {
  return (
    <svg width="24" height="24">
      <path
        fill="currentColor"
        d="M14.5 15.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 15.5zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 15.5zm5-5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 10.5zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 10.5zm5-5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 5.5zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 5.5z"
      ></path>
    </svg>
  );
}

export function Edit() {
  return (
    <svg width="24" height="24">
      <g fill="none" fillRule="evenodd">
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
  );
}

export function Delete() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
    </svg>
  );
}

export function Today() {
  const today = new Date().getDate();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="scheduler-suggestions-item-icon--today"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
        ></path>
        <text
          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
          fontSize="9"
          transform="translate(4 2)"
          fontWeight="500"
        >
          <tspan x="8" y="15" textAnchor="middle">
            {today}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export function Tomorrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="scheduler-suggestions-item-icon--tomorrow"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.704 17.544a.5.5 0 0 0-.653.27l-.957 2.31a.5.5 0 1 0 .924.383l.956-2.31a.5.5 0 0 0-.27-.653Zm5.931-14.32a.5.5 0 0 0-.653.27l-.957 2.31a.5.5 0 1 0 .924.383l.957-2.31a.5.5 0 0 0-.27-.653ZM9.704 6.457a.5.5 0 0 1-.653-.27l-.957-2.31a.5.5 0 1 1 .924-.383l.956 2.31a.5.5 0 0 1-.27.653Zm5.931 14.32a.5.5 0 0 1-.653-.27l-.957-2.31a.5.5 0 0 1 .924-.383l.957 2.31a.5.5 0 0 1-.27.653ZM7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm8 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-9.314 2.95a.5.5 0 0 0-.383-.924l-2.31.957a.5.5 0 0 0 .383.924l2.31-.957Zm14.32-5.932a.5.5 0 1 0-.383-.924l-2.31.957a.5.5 0 0 0 .383.924l2.31-.957Zm-2.692 5.932a.5.5 0 1 1 .383-.924l2.31.957a.5.5 0 0 1-.384.924l-2.31-.957ZM3.494 9.018a.5.5 0 0 1 .382-.924l2.31.957a.5.5 0 1 1-.383.924l-2.31-.957Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function NextWeekend() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="scheduler-suggestions-item-icon--weekend"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16 6a3 3 0 0 1 3 3v1h.1c1 0 1.9 1 1.9 2v4c0 1-.8 2-1.9 2H18v.5a.5.5 0 0 1-1 0V18H7v.5a.5.5 0 0 1-1 0V18H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2V9a3 3 0 0 1 3-3h8zm3 5a1 1 0 0 0-1 .9V15H6v-3a1 1 0 0 0-2-.1V16c0 .5.4 1 .9 1H19a1 1 0 0 0 1-.9V12c0-.6-.4-1-1-1zm-3-4H8c-1 0-2 .8-2 1.9v1.4c.6.3 1 1 1 1.7v2h10v-2a2 2 0 0 1 1-1.7V9c0-1-.8-2-1.9-2H16z"
      ></path>
    </svg>
  );
}

export function NextWeek() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="scheduler-suggestions-item-icon--next-week"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Zm8.354 4.647a.5.5 0 0 0-.708.707l1.647 1.647H8.5a.5.5 0 1 0 0 1h5.793l-1.647 1.646a.5.5 0 0 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function SideBarButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Calendar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      className="calendar_icon"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1ZM2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7ZM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule="evenodd"
    >
      <path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z" />
    </svg>
  );
}
