import { AccountDetails } from './AccountDetails';
import { MovieDetails } from './MovieDetails';
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../ErrorFallback";
import { Suspense } from 'react';
import { Loading } from '../Loading';

interface Props {
  userId: number;
  movieId: number;
}
export function UserDetails({ userId, movieId }: Props) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h4 className="text-center mt-5">User details</h4>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AccountDetails userId={userId} />
        </ErrorBoundary>
        <h4 className="text-center mt-5">Favorite movie</h4>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MovieDetails movieId={movieId} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
