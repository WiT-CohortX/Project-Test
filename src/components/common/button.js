export function Button({ children, icon, ...props }) {
  const ArrowIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    );
  };

  const UserIcon = () => {
    return (
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          d="M3.552 14.1591C5.41726 13.1048 7.52408 12.5523 9.66667 12.5556C11.8889 12.5556 13.9751 13.1378 15.7813 14.1591M12.3333 7.22222C12.3333 7.92947 12.0524 8.60774 11.5523 9.10784C11.0522 9.60794 10.3739 9.88889 9.66667 9.88889C8.95943 9.88889 8.28115 9.60794 7.78105 9.10784C7.28096 8.60774 7.00001 7.92947 7.00001 7.22222C7.00001 6.51498 7.28096 5.8367 7.78105 5.3366C8.28115 4.83651 8.95943 4.55556 9.66667 4.55556C10.3739 4.55556 11.0522 4.83651 11.5523 5.3366C12.0524 5.8367 12.3333 6.51498 12.3333 7.22222ZM17.6667 9C17.6667 10.0506 17.4597 11.0909 17.0577 12.0615C16.6557 13.0321 16.0664 13.914 15.3235 14.6569C14.5807 15.3997 13.6987 15.989 12.7281 16.391C11.7575 16.7931 10.7172 17 9.66667 17C8.6161 17 7.57581 16.7931 6.6052 16.391C5.6346 15.989 4.75269 15.3997 4.00982 14.6569C3.26695 13.914 2.67767 13.0321 2.27564 12.0615C1.8736 11.0909 1.66667 10.0506 1.66667 9C1.66667 6.87827 2.50953 4.84344 4.00982 3.34315C5.51011 1.84285 7.54494 1 9.66667 1C11.7884 1 13.8232 1.84285 15.3235 3.34315C16.8238 4.84344 17.6667 6.87827 17.6667 9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderIcon = () => {
    switch (icon) {
      case "arrow":
        return <ArrowIcon />;
      case "user":
        return <UserIcon />;
    }
  };

  return (
    <button
      {...props}
      className="py-2 px-4 mb-6 w-full text-white font-semibold shadow-lg rounded-full bg-gradient-to-r from-Primary via-Primary to-Secondary700 flex justify-center relative"
    >
      {children}
      {icon && <span aria-hidden="true" className="absolute right-6">{renderIcon()}</span>}
    </button>
  );
}
