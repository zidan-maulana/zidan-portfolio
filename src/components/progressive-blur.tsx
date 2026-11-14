export function ProgressiveBlur() {
  return (
    <div
      className="progressive-blur-bottom"
      aria-hidden="true"
    >
      <div className="blur-slice blur-slice-1" />
      <div className="blur-slice blur-slice-2" />
      <div className="blur-slice blur-slice-3" />
      <div className="blur-slice blur-slice-4" />
      <div className="blur-slice blur-slice-5" />
      <div className="blur-fade" />
    </div>
  );
}
