const Emoji = ({ symbol, label, className }) => {
   return (
      <span className={className} role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
         {symbol}
      </span>
   );
};

export default Emoji
