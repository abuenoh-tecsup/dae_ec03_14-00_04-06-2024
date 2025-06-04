import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="row">
      {Array(count)
        .fill()
        .map((_, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Skeleton height={300} />
            <Skeleton height={30} style={{ marginTop: 10 }} />
            <Skeleton height={20} count={2} />
            <Skeleton height={40} width={100} style={{ marginTop: 10 }} />
          </div>
        ))}
    </div>
  );
}
