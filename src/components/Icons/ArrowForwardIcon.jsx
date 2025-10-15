import SvgIcon from '@mui/material/SvgIcon';

function ArrowButtonIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 19 19">
      <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />

      <path
        d="M13 9.5H7.5"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 6.5L13.5 9.5L10.5 12.5"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default ArrowButtonIcon;