import { retry as _retry, AttemptFunction, PartialAttemptOptions } from '@lifeomic/attempt';
export const DELAY = 1000;
export const FACTOR = 3;
export const MAX_ATTEMPTS = 5;
export const RETRY_TIMEOUT = 1000;

// Try the given operation up to 5 times. The initial delay will be 0
// and subsequent delays will be 200, 400, 800, 1600.
//
// If an attempt fails to complete after 1 second then the retries
// are aborted and error with `code` `ATTEMPT_TIMEOUT` is thrown.
export const DEFAULT_ATTEMPT_OPTIONS: PartialAttemptOptions<any> = {
    delay: DELAY,
    factor: FACTOR,
    maxAttempts: MAX_ATTEMPTS,
    timeout: RETRY_TIMEOUT
};

export function retry<T>(
    cb: AttemptFunction<T>,
    attemptOptions: PartialAttemptOptions<T> = DEFAULT_ATTEMPT_OPTIONS
) {
    return _retry(cb, attemptOptions);
}